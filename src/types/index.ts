export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
    brand: string;
    inStock: boolean;
    freeShipping: boolean;
}


export interface CartItem {
    product: Product;
    quantity: number;
}