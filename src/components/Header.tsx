'use client'
import React   from "react";
import SearchItem from "@/components/SearchItem";
import Link from "next/link";
import CartIcon from "@/components/CartItcon";
import {useSearchStore} from "@/store/searchStore";
import Profile from "@/components/Profile";
import {useContext} from "react";
import {ProductContext} from "@/contexts/ProductContext";
import CartPanel from "@/components/CartPanel";



const Header: React.FC= () => {

    const products = useContext(ProductContext);

    const setHighlightedProduct = useSearchStore((state) => state.setHighlightedProduct);

    const handleProductSelected = (productId: number) => {
        setHighlightedProduct(productId);
    };

    return (
        <header className="  items-center justify-items-center bg-gradient-to-b from-gray-600 to-blue-600 text-white shadow ">
            <div className="container mx-auto px-4 py-4  sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link href="/" className="md:text-4xl sm:text-2xl font-bold order-1 sm:order-none">
                    E - SHOPPING
                </Link>

                <div className="relative w-full md:w-1/3  sm:w-1/3 px-2 order-3 sm:order-none ">
                    <SearchItem
                        productProps={products}
                        onProductSelected={handleProductSelected}
                    />
                </div>

                <nav className="flex flex-row gap-2 items-center space-x-8">

                    <div className=" overflow-visible sm:relative">
                        <Profile/>
                    </div>
                    <div className="relative">
                        <h2 className=" md:text-xl sm:text-xs order-1 sm:order-none font-bold hover:text-blue-500">
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