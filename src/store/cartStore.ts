import {create} from 'zustand';
import {CartItem, Product} from "@/types";

interface CartStore {
    items: CartItem[];

    totalItems: () => number;
    totalAmount: () => number;

    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    isAddedToCart: (productId: number) => boolean;


    clearCart: () => void;
}

export const useCartStore = create<CartStore>(
    (set, get) => (
        {
            items: [],

            isAddedToCart: (productId: number) => {
                const existingItem = get().items.find(item => item.product.id === productId);
                return existingItem !== undefined || false;
            },

            totalItems: () => {
                return get().items.reduce(
                    (total, item) => total + item.quantity, 0);

            },
            totalAmount:
                () => {
                    return get().items.reduce(
                        (total, item) => total + item.quantity * item.product.price, 0);
                },

            //Actions
            addToCart: (product: Product) => set((state) => {
                const existingItem = state.items.find(item => item.product.id === product.id);
                if (existingItem) {
                    return {
                        items: state.items.map(item =>
                            item.product.id === product.id ? {...item, quantity: item.quantity + 1} : item
                        )
                    }
                } else {
                    return {
                        items: [...state.items, {product, quantity: 1}]
                    }
                }
            }),
            removeFromCart: (productId: number) => set((state) => ({
                items: state.items.filter(item => item.product.id !== productId)
            })),
            increaseQuantity: (productId: number) => set((state) => {
                return {
                    items: state.items.map(item =>
                        item.product.id === productId ? {...item, quantity: item.quantity + 1} : item
                    )
                }
            }),

            decreaseQuantity: (productId: number) => set((state) => {
                    const targetItem = state.items.find(item => item.product.id === productId);
                    if (targetItem && targetItem.quantity > 1) {
                        return {
                            items: state.items.map(item =>
                                item.product.id === productId ? {...item, quantity: item.quantity - 1} : item
                            )
                        }
                    } else {
                        return {
                            items: state.items.filter(item => item.product.id !== productId)
                        }
                    }
                }
            ),
            clearCart: () => set({items: []}) // Clear all items from the cart

        }
    )
)