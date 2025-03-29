import React, {useMemo} from 'react';
import {useState, useEffect,useRef} from "react";
import Fuse from "fuse.js";
import {Product} from "@/types";
import ProductCard from "@/components/ProductCard";

interface SearchItemProps {
    productProps: Product[];
    onProductSelected? : (productId: number) => void
}

const SearchItem: React.FC<SearchItemProps> = ({productProps, onProductSelected}) => {
    const [query, setQuery] = useState<string>("");
    const [results, setResults] = useState<Product[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const fuse = useMemo(() => new Fuse(productProps, {
        keys: ["name"],
        threshold: 0.3,
    }), [productProps]);
    useEffect(() => {
        if (!query) {
            setResults([]);
            return;
        }

        const handler = setTimeout(() => {
            const searchResults = fuse.search(query).map(result => result.item);
            setResults(searchResults);
        }, 300);

        return () => clearTimeout(handler);

    }, [query, fuse]);

    const handleProductClick = (productId: number) => {
        setResults([]);
        setQuery("");
        if (inputRef.current) {
            inputRef.current.blur();

        }
            if (onProductSelected) {
                onProductSelected(productId);
            }
        }


        return (
            <div className="w-[300px] mx-auto my-5 text-center relative z-50">
                <h1 className="text-2xl font-bold mb-4 bg-gradient-to-b from-white to-black text-transparent  bg-clip-text">
                    What You Looking For </h1>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full p-2 text-base border text-black border-gray-300 rounded focus:outline-none focus:border-blue-900 bg-amber-100"
                />
                {results.length > -1 && (
                    <ul className="absolute w-full list-none p-0 mt-2.5 border-1 border-blue-600 ">
                        {results.length === 0 ? (
                            <li>No results found</li>
                        ) : (
                            <div className="w-full max-h-[300px] overflow-y-scroll ">
                                {results.map((item) => (
                                    <li
                                        key={item.id}
                                        className="px-4 py-2  hover:bg-black cursor-pointer    bg-black/70  "
                                        onClick={() => handleProductClick(item.id)}
                                    >
                                        <div className="font-medium text-white">{item.name}</div>
                                        <div className="text-sm text-gray-500">${item.price.toFixed(2)}</div>
                                    </li>
                                ))}
                            </div>
                        )}
                    </ul>
                )}
            </div>
        )
    }

export default SearchItem
