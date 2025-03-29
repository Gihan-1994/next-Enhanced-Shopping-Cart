'use client'
import React from 'react';
import {useCartStore} from '@/store/cartStore';
import {usePopupStore} from "@/store/popUpStore";


const CartIcon: React.FC = () => {
    // Access cart state from Zustand store
    const {totalItems} = useCartStore();

    const { openPopup } = usePopupStore();

    return (
        <div className="relative">
            <button
                onClick={openPopup}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Cart"
            >




                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>

                {/* Show badge if there are items in cart */}
                {totalItems() > 0 && (
                    <span
                        className="absolute -top-2 -right-2 bg-red-500 text-white text-xl rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems()}
          </span>
                )}

            </button>


        </div>
    );
};

export default CartIcon;