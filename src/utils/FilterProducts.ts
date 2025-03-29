import {Product} from "@/types";

interface FilterProductsProps {
    products: Product[];
    selectedCategories: string[];
    selectedBrands: string[];
    inStock: boolean;

    priceRange: { min: number; max: number };
}

export const filterProducts = ({
                                   products,
                                   selectedCategories,
                                   selectedBrands,
                                   inStock,

                                   priceRange,
                               }: FilterProductsProps) => {
    const categorySet = new Set(selectedCategories);
    const brandSet = new Set(selectedBrands);
    return products.filter((product) => {
        return (
            (categorySet.size === 0 || categorySet.has(product.category)) &&
            (brandSet.size === 0 || brandSet.has(product.brand)) &&
            (inStock ? product.inStock : true) &&
            // Alternative :(!inStockOnly || product.inStock)
            product.price >= priceRange.min &&
            product.price <= priceRange.max

        );
    });
}
