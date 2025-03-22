'use client'
import React from "react";
import ProductCard from "@/components/ProductCard";
import SearchItem from "@/components/SearchItem";
import {Product} from "@/types";

interface ProductGridProps {
    products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({products}) => {
    return (
        <div>
            <SearchItem productProps={products}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}

            </div>
        </div>

    );
}
export default ProductGrid;