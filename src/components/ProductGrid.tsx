'use client'
import React, {useMemo, useRef, useEffect} from "react";
import ProductCard from "@/components/ProductCard";
import {Product} from "@/types";
import {useSelectedCategories, useSelectedBrands, useInStock, usePriceRange} from "@/store/filterStore";
import {filterProducts} from "@/utils/FilterProducts";
import FilterNav from "@/components/FilterNav";
import {useSearchStore} from "@/store/searchStore";

interface ProductGridProps {
    products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({products}) => {
    const selectedCategories = useSelectedCategories();
    const selectedBrands = useSelectedBrands();
    const inStock = useInStock();
    const priceRange = usePriceRange();

    const highlightedProduct = useSearchStore((state) => state.highlightedProduct);
    const productRefs = useRef<{[key: number]: HTMLDivElement | null}>({});

    const FilteredProducts = useMemo(() => filterProducts({products,
        selectedCategories,
        selectedBrands,
        inStock,
        priceRange
    }), [products, selectedCategories, selectedBrands, inStock, priceRange]);

    useEffect(() => {
        if (highlightedProduct && productRefs.current[highlightedProduct]) {
            productRefs.current[highlightedProduct]?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }, [highlightedProduct]);


    return (
        <div className="left-0 flex flex-col md:flex-row w-full min-h-screen gap-4 z-40">

            <div className=" fix-grid-layout sticky-right w-full md:w-72  lg:w-80 flex-shrink-0 bg-white p-4  top-0 self-start">
                <div className="text-black font-bold mb-4 text-sm">
                    Showing {FilteredProducts.length} of {products.length}
                </div>
                <FilterNav />
            </div>
            <div className="flex-1 p-4 md:p-1 bg-gray-50 min-h-[calc(100vh-4rem)]" >

                {FilteredProducts.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-600">No products match your filters.</p>
                        </div> ):(
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {FilteredProducts.map((product) => (
                    <div
                        key={product.id}
                        ref={(el)=>{if(el){productRefs.current[product.id] = el} }}
                        className="{highlightedProduct === product.id ? 'ring-2 ring-blue-500' : ''}"
                    >
                    <ProductCard key={product.id} product={product}/>
                    </div>
                ))}

            </div>
                )}
        </div>
            </div>

    );
}
export default ProductGrid;