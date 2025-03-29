
import {create} from "zustand";
import {shallow} from "zustand/vanilla/shallow";
import {useMemo} from "react";

interface PriceRange {
    min: number;
    max: number;
}
interface FilterState {
    priceRange: PriceRange;

    categories: string[];
    selectedCategories: string[];

    brands: string[];
    selectedBrands: string[];

    inStock: boolean;
    freeShipping: boolean;
}
interface FilterActions {
    setPriceRange: (p_Range: PriceRange) => void;
    toggleCategory: (inputCategory: string) => void;
    toggleBrand: (brand: string) => void;
    toggleInStock: () => void;
    toggleFreeShipping: () => void;
    resetFilters: () => void;
}
const initialState: FilterState = {
    priceRange: {min: 0, max: 1000},
    categories: ["Audio", "Video", "Computer_Accessories", "Gadgets"],
    selectedCategories: [],
    brands: ["Apple", "Edifier", "Sony","Transcend"],
    selectedBrands: [],
    inStock: false,
    freeShipping: false
}

// creating a custom hook to support shallow equality
type UseFilterStore = {
    <T>(selector: (state: FilterState & FilterActions) => T, equalityFn?: (a: T, b: T) => boolean): T;
    (): FilterState & FilterActions;
};

 export const useFilterStoreBase = create<FilterState & FilterActions>((set) => ({
   ...initialState,
    setPriceRange: (p_Range) => set({priceRange: p_Range}),


    toggleCategory: (inputCategory) => set((state) => ({
        selectedCategories: state.selectedCategories.includes(inputCategory)
            ? state.selectedCategories.filter((category) => category !== inputCategory)
            : [...state.selectedCategories, inputCategory]
    })),
    toggleBrand: (brand) => set((state) => ({
        selectedBrands: state.selectedBrands.includes(brand)
            ? state.selectedBrands.filter((b) => b !== brand)
            : [...state.selectedBrands, brand]
    })),
    toggleInStock: () => set((state) => ({
        inStock: !state.inStock
    })),
     toggleFreeShipping: () => set((state) => ({
        freeShipping: !state.freeShipping
     })),
    resetFilters: () => set(() => ({
       ...initialState
    }))
}))
const useFilterStore = useFilterStoreBase as UseFilterStore
// selectors
export const useSelectedCategories = () => useFilterStore((state) => state.selectedCategories, shallow);
export const useSelectedBrands = () => useFilterStore((state) => state.selectedBrands,shallow);
export const usePriceRange = () => useFilterStore((state) => state.priceRange);
export const useInStock = () => useFilterStore((state) => state.inStock);
export const availableCategories = () => useFilterStore((state) => state.categories);
export const availableBrands = () => useFilterStore((state) => state.brands);
export const useFreeShipping = () => useFilterStore((state) => state.freeShipping);

export const useFilterActions = () => {
    const setPriceRange = useFilterStore(state => state.setPriceRange);
    const toggleCategory = useFilterStore(state => state.toggleCategory,shallow);
    const toggleBrand = useFilterStore(state => state.toggleBrand,shallow);
    const toggleInStock = useFilterStore(state => state.toggleInStock);
    const toggleFreeShipping = useFilterStore(state => state.toggleFreeShipping);

    const resetFilters = useFilterStore(state => state.resetFilters);

    return useMemo(() => ({
        setPriceRange,
        toggleCategory,
        toggleBrand,
        toggleInStock,
        resetFilters,
        toggleFreeShipping
    }), [setPriceRange, toggleCategory, toggleBrand, toggleInStock, resetFilters, toggleFreeShipping]);
};