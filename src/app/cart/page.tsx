"use client"
import React from "react";
import Link from "next/link";
import {useCartStore} from "@/store/cartStore";
import CartItem from "@/components/CartItem";


export default function CartPage() {

    const {clearCart, items, totalAmount, totalItems} = useCartStore();
    /* If Cart Items not present */
    if (items.length === 0) {
        return (
            <div className="text-center py-12  bg-gradient-to-r from-blue-300 to-white">
                <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
                <p className="text-gray-600 mb-6">Your cart is empty</p>
                <Link
                    href="/"
                    className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                >
                    Continue Shopping
                </Link>
            </div>
        );
    }
    return (
        <div className=' bg-gradient-to-r from-blue-300 to-white  '>
            <h1 className="text-2xl font-bold mb-6 text-center bg-gradient-to-b from-black to-blue-600 text-transparent bg-clip-text"
            >Check Your Cart</h1>


            <div className="bg-white rounded shadow p-6 mb-6 pe-20 ps-20">
                <h2 className="text-lg font-semibold mb-4 text-center"> Cart Items</h2>
                {items.map((item) => (
                    <CartItem key={item.product.id} item={item}/>
                ))}
            </div>


            <div className="bg-white rounded shadow p-5 pe-20 ps-20">
                <h2 className="text-lg font-semibold mb-4 text-center">Cart summary</h2>
                <div className="flex justify-between  font-medium mb-4">
                    <span>Total Number of Items:</span>
                    <span> {totalItems()} pieces </span>
                </div>
                <div className="flex justify-between text-lg font-medium mb-4">
                    <span>Total Amount:</span>
                    <span> {totalAmount().toFixed(2)} $ </span>
                </div>

                <div className="flex-items-center space-x-4">
                    <button
                        onClick={clearCart}
                        className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Clear Cart
                    </button>

                    <button
                        className=" px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Checkout (not implemented)
                    </button>
                </div>
            </div>


            <div className="mt-6">
                <Link href="/" className="text-blue-500 hover:underline">
                    ← Continue Shopping
                </Link>
            </div>
        </div>
    );
}