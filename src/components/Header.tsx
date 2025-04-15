"use client";

import Logo from "@/assets/Logo.avif";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md w-full">
            <div className="container mx-auto px-4 py-4 font-[family-name:var(--font-geist-sans)]">
                <div className="flex justify-between items-center px-10">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={100}
                            height={100}
                            className="w-16 h-auto md:w-20"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex gap-6">
                            <li className="cursor-pointer hover:text-emerald-600 transition-colors">Home</li>
                            <li className="cursor-pointer hover:text-emerald-600 transition-colors">About</li>
                            <li className="cursor-pointer hover:text-emerald-600 transition-colors">Expertise</li>
                            <li className="cursor-pointer hover:text-emerald-600 transition-colors">Solutions</li>
                            <li className="cursor-pointer hover:text-emerald-600 transition-colors">Careers</li>
                            <li className="cursor-pointer hover:text-emerald-600 transition-colors">Connect</li>
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4">
                        <ul className="flex flex-col gap-3">
                            <li className="cursor-pointer hover:text-emerald-600 transition-colors py-2">Home</li>
                            <li className="cursor-pointer hover:text-emerald-600 transition-colors py-2">About</li>
                            <li className="cursor-pointer hover:text-emerald-600 transition-colors py-2">Expertise</li>
                            <li className="cursor-pointer hover:text-emerald-600 transition-colors py-2">Solutions</li>
                            <li className="cursor-pointer hover:text-emerald-600 transition-colors py-2">Careers</li>
                            <li className="cursor-pointer hover:text-emerald-600 transition-colors py-2">Connect</li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    )
}