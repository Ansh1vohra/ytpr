"use client";

import Logo from "@/assets/Logo.png";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import CustomCursor from "./CustomCursor";

type SubLinkGroup = {
  title: string;
  items: string[];
};

type NavLink = {
  name: string;
  path: string;
  subLinks?: SubLinkGroup[] | null;
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const navLinks: NavLink[] = [
    {
      name: "About",
      path: "/about",
      subLinks: [
        {
          title: "Our Company",
          items: ["Value", "Location", "Impact"]
        },
        {
          title: "Our People",
          items: ["Leadership", "Inclusion and belonging", "News and Insights"]
        }
      ]
    },
    {
      name: "Expertise",
      path: "#",
      subLinks: [
        {
          title: "Services",
          items: [
            "Public affairs & impact",
            "Crisis & issues",
            "Transactions & transformations",
            "Strategy & reputation",
            "Public relations & marketing",
            "Creative, design & content",
            "Insights & analytics",
            "Generative AI",
            "YTPR Advisory"
          ]
        },
        {
          title: "Sectors",
          items: [
            "Health",
            "Food & beverage",
            "Financial services",
            "Government & public sector",
            "Mobility & transportation",
            "Technology",
            "Retail & CPG",
            "Lifestyle & leisure",
            "Media & entertainment",
            "Non-profit",
            "Energy",
            "Industry & manufacturing"
          ]
        }
      ]
    },
    {
      name: "Careers",
      path: "/careers",
      subLinks: null
    },
    {
      name: "Newsroom",
      path: "/news",
      subLinks: null
    },
    {
      name: "Shop",
      path: "/shop",
      subLinks: null
    },
    {
      name: "Connect",
      path: "/connect",
      subLinks: null
    },
  ];

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

    // const handleScroll = () => {
    //   setIsScrolled(window.scrollY > 10);
    // };

    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setIsMenuOpen(false);
      }
    };

    // window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  // const toKebabCase = (str: string) => {
  //   return str.toLowerCase()
  //     .replace(/&/g, 'and')
  //     .replace(/\s+/g, '-')
  //     .replace(/[^a-z0-9-]/g, '');
  // };

  // // Helper function to get clean base path
  // const getBasePath = (path: string) => {
  //   return path.replace(/#/g, '');
  // };


  const isCursorActive = isLogoHovered || isNavHovered;

  const toggleMobileDropdown = (linkName: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === linkName ? null : linkName);
  };

  const toggleDropdown = (linkName: string) => {
    setActiveDropdown(activeDropdown === linkName ? null : linkName);
  };

  return (
    <div className="sticky top-0 z-50" ref={headerRef}>
      {!isTouchDevice && <CustomCursor isHovered={isCursorActive} />}

      <header className={`sticky top-0 z-50 bg-gradient-to-r from-slate-800 to-gray-900 border-b border-gray-800 transition-all duration-300`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6 font-[family-name:var(--font-geist-sans)]">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="flex items-center group"
              onClick={() => {
                setIsMenuOpen(false);
                setActiveDropdown(null);
              }}
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

            <nav className="hidden md:block">
              <ul className="flex gap-4 lg:gap-8">
                {navLinks.map((link) => (
                  <li key={link.path} className="relative"
                    onMouseEnter={() => setIsNavHovered(true)}
                    onMouseLeave={() => setIsNavHovered(false)}>
                    {link.subLinks ? (
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        // Remove the onMouseEnter handler
                        className={`text-white cursor-none hover:text-emerald-400 transition-colors font-medium text-base lg:text-lg tracking-wider relative group`}
                      >
                        {link.name}
                        <span className={`absolute  cursor-none bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full`}></span>
                      </button>
                    ) : (
                      <Link
                        href={link.path}
                        className={`text-white cursor-pointer hover:text-emerald-400 transition-colors font-medium text-base lg:text-lg tracking-wider relative group`}
                        onClick={() => setActiveDropdown(null)}
                      >
                        {link.name}
                        <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full`}></span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <button
              className="md:hidden focus:outline-none p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
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
        </div>
      </header>

      {/* Desktop Dropdown Overlay */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-24 bg-white shadow-lg z-40 max-h-[32rem] overflow-y-auto"
          >
            <div className="container mx-auto px-0">
              {navLinks.map((link) =>
                link.name === activeDropdown && link.subLinks ? (
                  <div key={link.name} className="flex">
                    {/* Left sidebar - 25% width */}
                    <div className="w-1/4 p-8 bg-gray-50">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">{link.name}</h2>
                      <div className="w-12 h-0.5 bg-emerald-500 mb-6"></div>
                      <p className="text-gray-600 text-sm">
                        {link.name === "Expertise"
                          ? "Advising and leading businesses and brands across an array of industries"
                          : "Explore our offerings"}
                      </p>
                    </div>

                    {/* Divider line */}
                    <div className="w-px bg-gray-200"></div>

                    {/* Right content - 75% width */}
                    <div className="w-3/4 p-8">
                      <div className="grid grid-cols-2 gap-8">
                        {link.subLinks.map((group, index) => (
                          <div key={`desktop-group-${index}`}>
                            <h3 className="text-gray-900 font-bold text-lg mb-6">{group.title}</h3>
                            <ul className="space-y-3">
                              {group.items.map((item, itemIndex) => {
                                const basePath = link.path.replace(/#/g, '');
                                const itemPath = `${basePath}/${item.toLowerCase()
                                  .replace(/&/g, 'and')
                                  .replace(/\s+/g, '-')
                                  .replace(/[^a-z0-9-]/g, '')}`;

                                return (
                                  <li key={`desktop-item-${itemIndex}`}>
                                    <Link
                                      href={itemPath}
                                      className={`text-gray-700 hover:text-emerald-500 text-base ${item === "Weber Advisory" ? "font-bold text-gray-900" : ""
                                        }`}
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      {item}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed inset-y-0 right-0 w-4/5 max-w-md bg-gradient-to-b from-slate-800 to-gray-900 shadow-xl z-50 overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                <div className="p-4 border-b border-gray-700">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="ml-auto text-white p-2"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <nav className="flex-1 p-4">
                  <ul className="space-y-2">
                    {navLinks.map((link) => (
                      <li key={link.path}>
                        {link.subLinks ? (
                          <div className="mb-4">
                            <button
                              onClick={() => toggleMobileDropdown(link.name)}
                              className="w-full text-left py-3 px-4 text-white hover:bg-gray-700 hover:text-emerald-400 transition-colors font-medium flex justify-between items-center rounded-lg"
                            >
                              {link.name}
                              <svg
                                className={`w-5 h-5 transition-transform ${mobileOpenDropdown === link.name ? 'transform rotate-180' : ''
                                  }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>

                            {mobileOpenDropdown === link.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-4 mt-2 space-y-4 max-h-[20rem] overflow-y-auto"
                              >
                                <div className="mb-2">
                                  <h3 className="text-white font-medium mb-1">{link.name}</h3>
                                  <div className="w-8 h-0.5 bg-emerald-400 mb-3"></div>
                                  <p className="text-gray-300 text-xs mb-4">
                                    {link.name === "Expertise"
                                      ? "Advising and leading businesses and brands"
                                      : "Explore our offerings"}
                                  </p>
                                </div>
                                {link.subLinks.map((group, groupIndex) => (
                                  <div key={`mobile-group-${groupIndex}`} className="mb-4">
                                    <h3 className="text-emerald-400 font-bold mb-2 text-sm uppercase tracking-wider">
                                      {group.title}
                                    </h3>
                                    <ul className="space-y-1">
                                      {group.items.map((item, itemIndex) => {
                                        const basePath = link.path.replace(/#/g, '');
                                        const itemPath = `${basePath}/${item.toLowerCase()
                                          .replace(/&/g, 'and')
                                          .replace(/\s+/g, '-')
                                          .replace(/[^a-z0-9-]/g, '')}`;

                                        return (
                                          <li key={`mobile-item-${itemIndex}`}>
                                            <Link
                                              href={itemPath}
                                              className={`block py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg ${item === "Weber Advisory" ? "font-bold text-white" : ""
                                                }`}
                                              onClick={() => {
                                                setIsMenuOpen(false);
                                                setMobileOpenDropdown(null);
                                              }}
                                            >
                                              {item}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={link.path}
                            className="block py-3 px-4 text-white hover:bg-gray-700 hover:text-emerald-400 transition-colors font-medium rounded-lg"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setMobileOpenDropdown(null);
                            }}
                          >
                            {link.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}