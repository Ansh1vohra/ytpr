'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";

// Ensure React types are recognized in a TypeScript environment
import type { FC } from 'react';

const advisoryData = {
    tagLine: "Value is the Bellwether and the Building Block",
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerStagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const imageReveal = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const value: FC = () => {
    const [isHovered] = useState(false);
    const isCursorActive = isHovered;
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    return (
        <div className="bg-white animate-gradient-cycle min-h-screen overflow-hidden">
            {!isTouchDevice && <CustomCursor isHovered={isCursorActive} />}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="md:w-[80vw] border-b-3 flex flex-col items-start px-8 md:px-25 pt-[80px] pb-[100px]"
                >
                    <p className="pt-42 text-black max-w-4xl font-semibold tracking-wide text-5xl md:text-6xl mb-2">
                        {advisoryData.tagLine}
                    </p>
                </motion.div>
                <div className="flex items-end hidden md:flex">
                    <Image
                        src='/ytdesign4.png'
                        alt="YT Design"
                        width={400}
                        height={400}
                        className="max-w-[20vw] brightness-0"
                    />
                </div>
            </motion.div>

            {/* Split Screen with Adjusted Layout and Gap */}
            <section className="flex flex-col md:flex-row md:items-center pt-16 pb-16">
                {/* Left Side: Text Vertically Centered with Gap */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="md:w-1/2 p-10"
                >
                    <p className="text-black text-lg leading-relaxed">
                        <span className="font-bold">Earning, contributing and building value</span><br />
                        If you want people to care. If you want them to buy from you, invest in you, vote for you, work for you, believe in you. You have to contribute value to their lives. Our deep industry expertise and proprietary AI-fueled analytics and intelligence tools help you do just that, creating work that drives business outcomes, builds brands and bolsters reputations. See the inaugural report of our global study, “The Primacy of Personal,” the first wave of an ongoing initiative to understand what different stakeholders value.
                    </p>
                </motion.div>
                {/* Right Side: Smaller Image Moved Up with Gap */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={imageReveal}
                    className="md:w-1/2 flex justify-center pt-10 md:-mt-10"
                >
                    <div className="w-3/4">
                        <Image
                            src="/value-1.jpeg"
                            alt="ytpr Image"
                            width={800}
                            height={600}
                            className="w-full max-h-96 h-auto object-cover"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Section: Default Background with Text and Form, Border on Top */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col md:flex-row items-center py-16 px-10 border-t-2 border-black"
            >
                {/* Left Side: Text */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-4xl font-bold mb-4">
                        What We Value: The Primacy of Personal
                    </h2>
                    <p className="text-lg leading-relaxed">
                        The focus isn’t just valuation. It’s reevaluation. After all, a world upended by a global pandemic that raged amid an economic, political, environmental and technological maelstrom is not the same world that existed a few years ago. Buffeted by the waves, what we value is certain to have drifted and shifted.
                    </p>
                    <p className="text-lg font-bold mt-4">BUT NOW?</p>
                </div>
                {/* Right Side: Form */}
                <div className="md:w-1/2 flex justify-center">
                    <div className="w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Name*"
                            spellCheck='false'
                            className="w-full mb-4 p-3 border-2 border-black rounded-full focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email*"
                            className="w-full mb-4 p-3 border-2 border-black rounded-full focus:outline-none"
                        />
                        <div className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                className="mr-2 w-5 h-5 border-2 border-black rounded-full appearance-none checked:bg-white checked:border-black checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iYmxhY2siPjxwYXRoIGQ9Ik0yMCA2LjQxTDE3LjU5IDQgOCAxMi41OSAzLjQxIDggMSAxMC40MUw4IDE3LjQxIDEwLjUxIDIwIDIwIDYuNDFaIi8+PC9zdmc+')] checked:bg-no-repeat checked:bg-center checked:bg-[length:16px_16px]"
                            />
                            <label className="text-sm">
                                I agree to the privacy policy
                            </label>
                        </div>
                        <button className="w-full p-3 border-2 border-black rounded-full flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors">
                            Download
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 12h16M12 4v16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </motion.section>

            {/* New Section: Two Images (Circle and Rectangle like a lowercase 'i' with 1/3 and 2/3 split) */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="py-16 px-10 border-t-2 border-black"
            >
                <div className="flex flex-col items-center w-full">
                    <div className="flex items-center justify-center w-full h-[50vh]">
                        <div className="w-1/3 flex justify-end pr-2">
                            <Image
                                src="/value-2.jpeg"
                                alt="value-2 Image"
                                width={200}
                                height={200}
                                className="w-[50vh] h-[50vh] rounded-full object-cover"
                            />
                        </div>
                        <div className="w-2/3">
                            <Image
                                src="/value-3.jpeg"
                                alt="value-3 Image"
                                width={400}
                                height={400}
                                className="w-full h-[50vh] rounded-none object-cover"
                            />
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerStagger}
                className="p-10 py-20"
            >
            </motion.div>
        </div>
    );
};

export default value;