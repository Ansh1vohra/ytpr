"use client";

import Logo from "@/assets/Logo.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import CustomCursor from "./CustomCursor";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Expertise", path: "/expertise" },
    // { name: "Solutions", path: "/solutions" },
    { name: "Careers", path: "/careers" },
    { name: "Connect", path: "/connect" },
  ];

  const isHovered = isLinkHovered || logoHovered;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="cursor-none sticky top-0 z-50">
      <CustomCursor isHovered={isHovered} />

      <header className={`sticky top-0 z-50 ${isScrolled 
        ? 'bg-gradient-to-r from-slate-800 to-gray-900 border-b border-gray-800' 
        : 'bg-transparent border-b border-white border-transparent'
      } transition-all duration-300`}>
        <div className="container mx-auto px-12 py-6 font-[family-name:var(--font-geist-sans)]">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="flex items-center group"
              onClick={() => setIsMenuOpen(false)}
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
            >
              <motion.div
                style={{
                  scale: logoHovered ? 1.1 : 1,
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <Image 
                  src={Logo} 
                  alt="Company Logo" 
                  width={150} 
                  height={150} 
                  priority 
                  className={isScrolled ? '' : 'brightness-0 invert'}
                />
              </motion.div>
            </Link>

            <nav className="hidden md:block">
              <ul className="flex gap-8">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={`${isScrolled ? 'text-white' : 'text-white'} hover:text-emerald-400 transition-colors font-medium text-md tracking-wider relative group`}
                      onMouseEnter={() => setIsLinkHovered(true)}
                      onMouseLeave={() => setIsLinkHovered(false)}
                    >
                      {link.name}
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isScrolled ? 'bg-emerald-400' : 'bg-white'} transition-all group-hover:w-full`}></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              className="md:hidden focus:outline-none p-2 -mr-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onMouseEnter={() => setIsLinkHovered(true)}
              onMouseLeave={() => setIsLinkHovered(false)}
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

          {isMenuOpen && (
            <nav className="md:hidden pt-4 pb-6">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="block py-3 px-4 text-white hover:bg-gray-800 hover:text-emerald-400 rounded-lg transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                      onMouseEnter={() => setIsLinkHovered(true)}
                      onMouseLeave={() => setIsLinkHovered(false)}
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