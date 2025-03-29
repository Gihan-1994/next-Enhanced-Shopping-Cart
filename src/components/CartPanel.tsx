"use client"
import React, {useRef, useEffect} from "react";
import {useCartStore} from "@/store/cartStore";
import CartItem from "@/components/CartItem";
import {usePopupStore} from "@/store/popUpStore";


 const CartPanel = () => {
     const {isOpen, closePopup} = usePopupStore();

     const {clearCart, items, totalAmount, totalItems} = useCartStore();
     const panelRef = useRef<HTMLDivElement>(null);



     useEffect(() => {
         if (!isOpen) return;  // Move condition inside useEffect

         const handleClickOutside = (event: MouseEvent) => {
             if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
                 console.log('Clicked outside panel');
                 closePopup();
             }
         };

         document.addEventListener('mousedown', handleClickOutside);
         return () => {
             document.removeEventListener('mousedown', handleClickOutside);
         };
     }, [isOpen, closePopup]);
     if (!isOpen) return null;

         /* If Cart Items not present */
         // if (items.length === 0) {
         //     return (
         //         <div className="text-center py-12  bg-gradient-to-r from-blue-300 to-white">
         //             <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
         //             <p className="text-gray-600 mb-6">Your cart is empty</p>
         //             <Link
         //                 href="/"
         //                 className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
         //             >
         //                 Continue Shopping
         //             </Link>
         //         </div>
         //     );
         // }


         return (
             <div className="fixed inset-0 z-50 overflow-y-auto">
                 {/* Overlay */}
                 <div
                     className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                     onClick={closePopup}
                     aria-hidden="true"
                 />

                 {/* Panel */}
                 <div

                     className="relative min-h-screen  flex items-center justify-center p-4 overflow-hidden">
                     <div
                         ref={panelRef}

                         onClick={(e) => e.stopPropagation()}
                         className="relative bg-white rounded-lg  shadow-xl max-w-md w-full max-h-[150vh] overflow-hidden">
                         {/* Close button */}
                         <button
                             onClick={() => {
                                 console.log('close button clicked');
                                 closePopup()
                             }}
                             className="absolute top-4 right-4  text-4xl font-bold text-gray-500 hover:text-red-700"
                         >
                             ✕
                         </button>

                         {/* Panel content */}
                         <div className="p-6 text-black">
                             {items.length === 0 ? (
                                 <div className="text-center py-8">
                                     <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
                                     <p className="text-gray-600 mb-6">Your cart is empty</p>
                                 </div>
                             ) : (
                                 <>
                                     <h1 className="text-2xl  text-blue-700 font-bold mb-6 text-center">
                                         Your Added : {totalItems()} Items
                                     </h1>

                                     <div className="space-y-4 mb-6">
                                         {items.map((item) => (
                                             <CartItem key={item.product.id} item={item}/>
                                         ))}
                                     </div>

                                     <div className="border-t pt-4">
                                         <div className="flex justify-between font-medium mb-4">
                                             <span>Total:</span>
                                             <span>${totalAmount().toFixed(2)}</span>
                                         </div>

                                         <div className="flex space-x-4">
                                             <button
                                                 onClick={clearCart}
                                                 className="flex-1 py-2 bg-gray-200 rounded hover:bg-gray-300"
                                             >
                                                 Clear Cart
                                             </button>
                                             <button
                                                 className="flex-1 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                             >
                                                 Checkout
                                             </button>
                                         </div>
                                     </div>
                                 </>
                             )}
                         </div>
                     </div>
                 </div>
             </div>
         );

 }
export default CartPanel