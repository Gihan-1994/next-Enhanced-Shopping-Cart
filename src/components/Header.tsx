'use client'
import React , {useMemo, useRef, useState}  from "react";
import SearchItem from "@/components/SearchItem";
import Link from "next/link";
import CartIcon from "@/components/CartItcon";
import {Product} from "@/types";
import {useSearchStore} from "@/store/searchStore";
import Profile from "@/components/Profile";
import {useContext} from "react";
import {ProductContext} from "@/contexts/ProductContext";
import CartPanel from "@/components/CartPanel";


interface HeaderProps {
    products: Product[]
}

const Header: React.FC= () => {

    const products = useContext(ProductContext);

    const setHighlightedProduct = useSearchStore((state) => state.setHighlightedProduct);

    const handleProductSelected = (productId: number) => {
        setHighlightedProduct(productId);
    };

    return (
        <header className="bg-gradient-to-b from-gray-600 to-blue-600 text-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-4xl font-bold">
                    E - SHOPPING
                </Link>

                <div className="relative w-full md:w-1/3 px-4 ">
                    <SearchItem
                        productProps={products}
                        onProductSelected={handleProductSelected}
                    />
                </div>

                <nav className="flex items-center space-x-8">

                    <div>
                        <Profile/>
                    </div>
                    <div className="relative">
                        <h2 className="text-xl font-bold hover:text-blue-500">
                            Your Cart
                        </h2>
                        <div className="relative">
                            <CartIcon />
                            <CartPanel />
                        </div>
                    </div>

                </nav>
            </div>
        </header>
    )
}

export default Header;