'use client'

import { useState } from "react";
import Navbar from "./Navbar"

export default function MainContainer({ children }: { children: React.ReactNode }) {

    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(!open)} type="button" className="z-50 absolute top-7 left-3 w-fit p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400">
                <span className="sr-only">Abrir menú</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            <div className='flex justify-center overflow-hidden selection:bg-darkblue selection:text-white'>
                <aside id="default-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${open ? 'sm:translate-x-0 transform-none' : '-translate-x-full md:translate-x-0'}`} aria-label="Sidebar">
                    <Navbar />
                </aside>
                {children}
                {open && <div onClick={() => setOpen(false)} className="bg-black bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30 md:hidden"></div>} 
            </div>
        </>
    )
}