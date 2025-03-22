'use client'
import React from "react";
import Link from "next/link";
import CartIcon from "@/components/CartItcon";

const Header: React.FC = () => {
    return (
        <header className="bg-gradient-to-b from-black to-blue-600 text-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    Next Shop
                </Link>

                <nav className="flex items-center space-x-8">
                    <Link href="/" className="hover:text-blue-500">
                        Products
                    </Link>
                    <div className="relative">
                        <h2 className="text-xl font-bold hover:text-blue-500">
                            Your Cart
                        </h2>
                        <CartIcon/>
                    </div>

                </nav>
            </div>
        </header>
    )
}

export default Header;