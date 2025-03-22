'use client'
import React from "react";
import type {CartItem} from "@/types";
import {useCartStore} from "@/store/cartStore";
import Image from "next/image";

interface CartItemProps {
    item: CartItem;
}

const CartItem: React.FC<CartItemProps> = ({item}) => {
    const {removeFromCart, increaseQuantity, decreaseQuantity} = useCartStore();

    const itemTotal = item.quantity * item.product.price;

    return (

        <div className="flex items-center py-4 border-b">
            {/* Product image */}
            <div className="w-20 h-20 relative flex-shrink-0">
                <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    style={{objectFit: 'cover'}}
                    className="rounded"
                />
            </div>

            {/* Product details */}
            <div className="ml-4 flex-grow">
                <h3 className="text-lg font-medium">{item.product.name}</h3>
                <p className="text-gray-600">${item.product.price.toFixed(2)}</p>
            </div>

            {/* Quantity controls */}
            <div className="flex items-center space-x-2 font-bold text-4xl">
                <button
                    onClick={() => decreaseQuantity(item.product.id)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-green-400 rounded"
                >
                    -
                </button>

                <span className="w-8 text-center">{item.quantity}</span>

                <button
                    onClick={() => increaseQuantity(item.product.id)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded hover:bg-blue-400"
                >
                    +
                </button>
            </div>

            {/* Item total */}
            <div className="ml-6 w-24 text-right">
                <p className="font-medium">${itemTotal.toFixed(2)}</p>

                <p className="font-medium"></p>
            </div>

            {/* Remove button */}
            <button
                onClick={() => removeFromCart(item.product.id)}
                className="ml-4 text-red-400 text-4xl hover:text-red-600 "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </div>
    )
}
export default CartItem;