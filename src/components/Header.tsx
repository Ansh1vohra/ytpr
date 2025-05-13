"use client";

import Logo from "@/assets/Logo.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import CustomCursor from "./CustomCursor";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Expertise", path: "/expertise" },
    { name: "Careers", path: "/careers" },
    { name: "Connect", path: "/connect" },
  ];

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isCursorActive = isLogoHovered || isNavHovered;

  return (
    <div className="sticky top-0 z-50">
      {!isTouchDevice && <CustomCursor isHovered={isCursorActive} />}

      <header className={`sticky top-0 z-50 ${
        isScrolled 
          ? 'bg-gradient-to-r from-slate-800 to-gray-900 border-b border-gray-800' 
          : 'bg-transparent border-b border-white border-transparent'
      } transition-all duration-300`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6 font-[family-name:var(--font-geist-sans)]">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="flex items-center group"
              onClick={() => setIsMenuOpen(false)}
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
            >
              <motion.div
                animate={{
                  scale: isLogoHovered ? 1.1 : 1,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="w-32 md:w-38"
              >
                <Image 
                  src={Logo} 
                  alt="Company Logo" 
                  width={150} 
                  height={150} 
                  priority 
                  className='brightness-0 invert cursor:pointer md:cursor-none'
                />
              </motion.div>
            </Link>

            <nav 
              className="hidden md:block"
              onMouseEnter={() => setIsNavHovered(true)}
              onMouseLeave={() => setIsNavHovered(false)}
            >
              <ul className="flex gap-4 lg:gap-8">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={`text-white cursor:pointer md:cursor-none hover:text-emerald-400 transition-colors font-medium text-base lg:text-lg tracking-wider relative group`}
                    >
                      {link.name}
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full`}></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              className="md:hidden focus:outline-none p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onMouseEnter={() => setIsNavHovered(true)}
              onMouseLeave={() => setIsNavHovered(false)}
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <nav 
              className="md:hidden bg-gradient-to-b from-slate-800 to-gray-900 mt-2 rounded-lg shadow-xl"
              onMouseEnter={() => setIsNavHovered(true)}
              onMouseLeave={() => setIsNavHovered(false)}
            >
              <ul className="flex flex-col gap-0.5 py-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="block py-3 px-6 text-white hover:bg-gray-700 hover:text-emerald-400 transition-colors font-medium"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsNavHovered(false);
                      }}
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
    </div>
  );
}