"use client";

import Logo from "@/assets/Logo.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Navigation links data
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Expertise", path: "/expertise" },
        { name: "Solutions", path: "/solutions" },
        { name: "Careers", path: "/careers" },
        { name: "Connect", path: "/connect" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-800 to-gray-900 backdrop-blur-sm shadow-sm w-full border-b border-gray-800">
            <div className="container mx-auto px-12 py-6 font-[family-name:var(--font-geist-sans)]">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center group" onClick={() => setIsMenuOpen(false)}>
                        <Image
                            src={Logo}
                            alt="Company Logo"
                            width={130}
                            height={130}
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block" aria-label="Main navigation">
                        <ul className="flex gap-8">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        href={link.path}
                                        className="text-white hover:text-emerald-400 transition-colors font-medium text-md tracking-wider relative group"
                                    >
                                        {link.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden focus:outline-none p-2 -mr-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <nav className="md:hidden pt-4 pb-6" aria-label="Mobile navigation">
                        <ul className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        href={link.path}
                                        className="block py-3 px-4 text-white hover:bg-gray-800 hover:text-emerald-400 rounded-lg transition-colors font-medium"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}