"use client"

import React, {useState, useRef, useEffect} from "react";

const Profile : React.FC = () => {
 const [isOpen , setIsOpen] = useState(false)
const cardRef = useRef<HTMLDivElement>(null);
 useEffect(()=>{
     const handleClickOutside = (event: MouseEvent) => {
         if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
             setIsOpen(false);
         }
     }
     document.addEventListener('click', handleClickOutside);
     return () => {
         document.removeEventListener('click', handleClickOutside);
     };
 }, [setIsOpen])
    return (
        <div className="relative">

        <div className="relative" ref={cardRef}>
            <button
            onClick={()=>setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-white focus:outline-none">
            <img
            src="https://plus.unsplash.com/premium_photo-1664392379061-eb7cff0c978a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHNpbXBsZSUyMGZ1bm55JTIwbWFufGVufDB8fDB8fHww"
            alt="my pic"
            className="w-full h-full object-cover"
            />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-4 max-w-xs  w-64 bg-white rounded-lg  shadow-xl z-50 overflow-hidden">
                    <div className="p-4">
                        <div className="flex items-center w-full space-x-3 mb-4 p-4">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1664392379061-eb7cff0c978a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHNpbXBsZSUyMGZ1bm55JTIwbWFufGVufDB8fDB8fHww"
                                alt="Profile"
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <p className="text-gray-900 font-medium">Apple Harry</p>
                                <p className="text-gray-500 text-sm">Harry@Apple.com</p>
                            </div>
                        </div>
                        <hr className="my-2 space-y-1" />
                        <ul className ="text-black">
                            <li className="px-2 py-2 hover:bg-gray-100 rounded cursor-pointer">My Account</li>
                            <li className="px-2 py-2 hover:bg-gray-100 rounded cursor-pointer">Settings</li>
                            <li className="px-2 py-2 hover:bg-gray-100 rounded cursor-pointer">Sign Out</li>
                        </ul>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}
export default Profile