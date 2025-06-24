'use client'
import { expertiseData } from '../../data/expertiseData';
import OurExpertise from "@/components/OurExpertise";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import { useRouter } from 'next/navigation';
import { use } from 'react';

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

interface ExpertiseItem {
    title: string;
    tagLine: string;
    intro: string;
    content: string;
    excelAreas: string[];
    images: string[];
}
export interface ExpertiseData {
    services: Record<string, ExpertiseItem>;
    sectors: Record<string, ExpertiseItem>;
}

const imageReveal = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

export default function ExpertisePage({ params }: { params: Promise<{ type: string; slug: string }> }) {
    const [isHovered, setIsHovered] = useState(false);
    const isCursorActive = isHovered;
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const router = useRouter();

    // Get the expertise data based on type and slug
    const resolvedParams = use(params); // 👈 unwrap the promise
    const typeData = expertiseData[resolvedParams.type as keyof ExpertiseData] as Record<string, ExpertiseItem> | undefined;
    const expertiseItem = typeData?.[resolvedParams.slug];



    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    if (!expertiseItem) {
        return <div className="min-h-screen flex items-center justify-center">
            <h1>Expertise not found</h1>
        </div>;
    }

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
                    <button className="border-2 rounded-full p-4 m-2 mb-4 text-sm">Expertise</button>
                    <p className="text-black max-w-4xl font-semibold tracking-wide text-5xl md:text-6xl mb-2">
                        {expertiseItem.tagLine}
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

            {/* Rest of your component using expertiseItem instead of advisoryData */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerStagger}
                className="p-10 py-20"
            >
                <motion.h1 variants={fadeUp} className="text-2xl md:text-3xl font-semibold text-black mb-15 m-5">
                    {expertiseItem.title}
                </motion.h1>
                <motion.p variants={fadeUp} className="text-xl md:text-3xl text-gray-700 m-5 mb-8">
                    {expertiseItem.intro}
                </motion.p>
            </motion.div>

            <div className="flex flex-col md:flex-row border-y-2 border-black">
                <div className="hidden md:block md:w-[40%] border-r-2 border-black"></div>

                <div className="w-full md:w-[60%] flex flex-col justify-between">
                    <div className="space-y-6 text-black text-lg leading-relaxed">
                        <div className="p-10">
                            <h4 className="text-sm mb-5 uppercase tracking-wider font-semibold">
                                {expertiseItem.tagLine}
                            </h4>
                            <h2 className="text-3xl font-bold mb-7">{expertiseItem.title}</h2>
                            <p className="mb-7">{expertiseItem.intro}</p>
                            <p>{expertiseItem.content}</p>

                            <div className="mt-10">
                                <button
                                    className="cursor-none relative px-6 py-3 border-2 border-black rounded-full font-semibold group hover:bg-black hover:text-white transition-colors"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    onClick={() => router.push('/connect')}
                                >
                                    Contact us to learn more
                                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                                    <span className="absolute inset-0 rounded-full border-2 border-black translate-x-1 translate-y-1"></span>
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 className="mt-6 font-bold text-xl p-10">What we excel at</h3>
                            <div className="mt-4 border-t">
                                <div className="grid grid-cols-2">
                                    {expertiseItem.excelAreas.map((item, idx) => {
                                        const isLastColumn = (idx + 1) % 2 === 0;
                                        const isLastRow = idx >= expertiseItem.excelAreas.length - 2;

                                        return (
                                            <div
                                                key={idx}
                                                className={`px-4 py-6 
                                                ${!isLastColumn ? 'border-r' : ''} 
                                                ${!isLastRow ? 'border-b' : ''} 
                                                border-black`}
                                            >
                                                {item}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row">
                {expertiseItem.images.map((src, idx) => (
                    <motion.div
                        key={idx}
                        className="relative w-full h-[50vh] md:h-[85vh]"
                        variants={imageReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <Image
                            src={src}
                            alt={`${expertiseItem.title} image ${idx + 1}`}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="shadow-lg"
                        />
                    </motion.div>
                ))}
            </div>

            <OurExpertise />
        </div>
    );
}