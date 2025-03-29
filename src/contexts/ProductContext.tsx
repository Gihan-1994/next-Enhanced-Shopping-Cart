"use client"
import {createContext , ReactNode} from "react";
import {products} from "@/data/products";
import {Product} from "@/types";
export const ProductContext = createContext<Product[]>(products)

export function ProductProvider({children}: {children: ReactNode}) {
    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    )
}