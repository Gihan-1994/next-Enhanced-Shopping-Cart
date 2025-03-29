"use client"
import React from "react";
import {useFilterActions,useInStock,usePriceRange,useSelectedCategories,useSelectedBrands,availableCategories,availableBrands} from "@/store/filterStore";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css'

const FilterNav: React.FC = () => {
    const {setPriceRange,toggleCategory,toggleBrand,toggleInStock,resetFilters} = useFilterActions();
    const priceRange = usePriceRange();
    const selectedCategories = useSelectedCategories();
    const selectedBrands = useSelectedBrands();
    const inStock = useInStock();
    const categories = availableCategories();
    const brands = availableBrands();


    return (
        <div className="bg-white rounded shadow p-4 mb-6">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="mb-4">
                {/* Price Range Filter */}
                <h3 className="font-medium mb-2">Price Range</h3>
                <div className="flex items-center space-x-2">
                    <span className="ml-2 text-blue-700">${priceRange.min}</span>
            <Slider
                range
                className="horizontal-slider mb-4 w-full text-blue-700"
                handleStyle= {[
                    {
                        backgroundColor: 'grey',
                        borderColor: 'grey',
                        height: 16,
                        width: 16,
                        marginTop: -10,
                        opacity: 1,
                    },
                    {
                        backgroundColor: 'grey',
                        borderColor: 'grey',
                        height: 16,
                        width: 16,
                        marginTop: -10,
                        opacity: 1,
                    }
                ]}
                trackStyle={{
                    backgroundColor: 'black',
                    height: 4,
                }}
                railStyle={{
                    backgroundColor: '#e5e7eb',
                    height: 4,
                }}
                defaultValue={[priceRange.min, priceRange.max]}
                min={0}
                max={500}
                onChange={(value: number | number[]) => {
                    if (Array.isArray(value)) {
                        setPriceRange({ min: value[0], max: value[1] });
                    }
                }}
                pushable={10}
            />
                    <span className="ml-2 text-blue-700">${priceRange.max}</span>
                </div>
            </div>
            {/* Category Filter */}
            <div className="mb-4">
                <h3 className="mb-2 flex items-center font-bold text-xl">Categories</h3>
                <div className="space-y-2">
                    {categories.map((category) => (

                        <label key={category} className="flex items-center">
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(category)}
                                onChange={() => toggleCategory(category)}
                                className="mr-2 font-bold"
                            />
                            {category}
                        </label>
                    ))}
                </div>
            </div>

            {/* Brands Filter */}
            <div className="mb-4">
                <h3 className=" mb-2 flex items-center font-bold text-xl">Brands</h3>
                <div className="space-y-2">
                    {brands.map((brand) => (
                        <label key={brand} className="flex items-center">
                            <input
                                type="checkbox"
                                checked={selectedBrands.includes(brand)}
                                onChange={() => toggleBrand(brand)}
                                className="mr-2"
                            />
                            {brand}
                        </label>
                    ))}
                </div>
            </div>

            {/* Availability Filter */}
            <div className="mb-4">
                <label className="flex items-center font-bold text-xl">
                    <input
                        type="checkbox"
                        checked={inStock}
                        onChange={toggleInStock}
                        className="mr-2"
                    />
                    In Stock Only
                </label>
            </div>

            {/* Reset Filters */}
            <button
                onClick={resetFilters}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Reset Filters
            </button>

        </div>




    )}
export default FilterNav