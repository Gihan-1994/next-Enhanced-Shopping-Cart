import ProductGrid from "@/components/ProductGrid";
import {products} from "@/data/products"

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-10 gap-10 sm:p-10 font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-blue-300 to-white">
            <main className="flex flex-col gap-[32px] row-start-2 items-center  sm:items-start">
                <ProductGrid products={products}/>
            </main>

        </div>
    );
}
