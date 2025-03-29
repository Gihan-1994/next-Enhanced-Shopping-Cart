import {create} from "zustand";

interface SearchState {

    highlightedProduct : number | null
    setHighlightedProduct: (productId: number | null) => void
}

export const useSearchStore = create<SearchState>((set) => ({
    highlightedProduct: null,
    setHighlightedProduct: (productId: number | null) => set({highlightedProduct: productId}),

}))