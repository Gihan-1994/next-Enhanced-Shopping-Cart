"use client"
import ProductGrid from "@/components/ProductGrid";
import {ProductContext} from "@/contexts/ProductContext";
import {useContext} from "react";


export default function Home() {
    const products = useContext(ProductContext)
    return (
        <div
            className=" grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen   font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-blue-300 to-white">
            <main className="flex flex-col max-w-full-screen mx-auto  row-start-2 items-center  sm:items-start">
                <ProductGrid products={products}/>
            </main>

        </div>
    );
}
