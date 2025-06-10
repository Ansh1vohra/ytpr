'use client'
import OurExpertise from "@/components/OurExpertise";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState,useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import { useRouter } from 'next/navigation';

const advisoryData = {
    tagLine: "Guiding Leaders Through Complexity",
    title: "YTPR Advisory",
    intro:
        "At YTPR, we provide expert advisory support that helps organizations navigate political, regulatory, and reputational challenges with confidence. Our tailored insights and strategic counsel enable leaders to make informed decisions in an ever-evolving environment.",
    content:
        "Our advisory approach combines real-time intelligence, deep policy expertise, and advanced analytics to anticipate risks and opportunities ahead of time. We partner closely with leadership teams to craft proactive strategies that align with both business goals and societal expectations. With a global perspective and cross-functional expertise, YTPR ensures that your organization stays agile and resilient — ready to respond swiftly and effectively to emerging issues before they escalate.",
    excelAreas: [
        "Political and regulatory insight",
        "Risk anticipation and mitigation",
        "Stakeholder mapping and engagement",
        "Scenario planning and forecasting",
        "Reputation advisory and crisis preparedness"
    ],
    images: [
        "/ytpr-advisory/grad1.jpg",
        "/ytpr-advisory/people1.jpg",
        "/ytpr-advisory/people2.jpg"
    ]
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



const YTPRAdvisory = () => {
    const [isHovered, setIsHovered] = useState(false);
    const isCursorActive = isHovered;
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    const router = useRouter();

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
                    <button className="border-2 rounded-full p-4 m-2 mb-4 text-sm">Expertise</button>
                    <p className="text-black max-w-4xl font-semibold tracking-wide text-5xl md:text-6xl mb-2">
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

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerStagger}
                className="p-10 py-20"
            >
                <motion.h1 variants={fadeUp} className="text-2xl md:text-3xl font-semibold text-black mb-15 m-5">
                    {advisoryData.title}
                </motion.h1>
                <motion.p variants={fadeUp} className="text-xl md:text-3xl text-gray-700 m-5 mb-8">
                    {advisoryData.intro}
                </motion.p>
            </motion.div>

            <div className="flex flex-col md:flex-row border-y-2 border-black">
                {/* Left Side Empty - hidden on mobile, 40% width on md+ */}
                <div className="hidden md:block md:w-[40%] border-r-2 border-black"></div>

                {/* Right Side Content - full width on mobile, 60% on md+ */}
                <div className="w-full md:w-[60%] flex flex-col justify-between">
                    <div className="space-y-6 text-black text-lg leading-relaxed">
                        <div className="p-10">
                            <h4 className="text-sm mb-5 uppercase tracking-wider font-semibold">
                                {advisoryData.tagLine}
                            </h4>
                            <h2 className="text-3xl font-bold mb-7">{advisoryData.title}</h2>
                            <p className="mb-7">{advisoryData.intro}</p>

                            <p>{advisoryData.content}</p>

                            {/* {advisoryData.content.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))} */}

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
                                    {advisoryData.excelAreas.map((item, idx) => {
                                        const isLastColumn = (idx + 1) % 2 === 0;
                                        const isLastRow = idx >= advisoryData.excelAreas.length - 2; // last row for 2 columns

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
            <div className="flex flex-col md:flex-row">
                {advisoryData.images.map((src, idx) => (
                    <motion.div
                        key={idx}
                        className="relative w-full h-[100vh]"
                        variants={imageReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <Image
                            src={src}
                            alt={`Advisory image ${idx + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="shadow-lg"
                        />
                    </motion.div>
                ))}
            </div>
            <OurExpertise />

        </div>
    );
};

export default YTPRAdvisory;