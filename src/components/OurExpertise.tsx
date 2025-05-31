import CustomCursor from "@/components/CustomCursor";
import { useState } from "react";
import "./OurExpertise.css";

export default function OurExpertise() {
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    const expertiseItems = [
        "Creative, design and content",
        "Public relations and Marketing",
        "Strategy planning and reputation",
        "Transaction and Transformation",
        "Crises and issues",
        "Public Affairs and impact"
    ];

    const dotPositions = [
        <>
            <path fill="#EF476F" d="M147.9746 248.2722a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path fill="#3A86FF" d="M210 44.9999a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path fill="#8338EC" d="M50.7224 36.9434a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path fill="#06D6A0" d="M9.8037 114.1572a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />

        </>,
        <>
            <path fill="#F94144" d="M240.9746 168.2722a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path fill="#F9C74F" d="M147.4535 24.6822a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path fill="#577590" d="M30.7224 73.9434a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path fill="#43AA8B" d="M30.8037 194.1572a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />

        </>,
        <>
            <path fill="#FF5667" d="M180.5 230.2a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path fill="#746CFF" d="M255 135a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path fill="#FEFF00" d="M147 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path fill="#C6C4FF" d="M65.7 40a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path fill="#9EFFBA" d="M5 140a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>

        </>,
        <>
            <path fill="#FF5667" d="M160 13a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path fill="#746CFF" d="M240 120a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path fill="#00E5FF" d="M20.2 160a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path fill="#9EFFBA" d="M45 235a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>

        </>,
        <>
            <path fill="#FF8C00" d="M160 260a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path fill="#1E90FF" d="M250 120a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path fill="#FFD700" d="M140 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path fill="#8A2BE2" d="M60 40a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path fill="#32CD32" d="M15 120a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
        </>
        ,
        <>
            <path fill="#FF4500" d="M155 255a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path fill="#FFFF33" d="M135 25a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path fill="#7B68EE" d="M50 40a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path fill="#20B2AA" d="M20 110a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
        </>

    ]

    return (
        <section className="py-30 px-10 bg-transparent">
            <CustomCursor isHovered={isButtonHovered} />
            <h3 className="text-5xl mb-10 text-black">Our Expertise</h3>
            <div className="expertise-grid flex flex-warp gap-20 items-center justify-center">

                {expertiseItems.map((item, idx) => (
                    <div key={idx} className="expertise-circle-container relative">
                        <svg viewBox="0 0 270 270" xmlns="http://www.w3.org/2000/svg" style={{ color: "black" }}  onMouseEnter={() => setIsButtonHovered(true)}
                        onMouseLeave={() => setIsButtonHovered(false)}>
                            <path d="M0 135h30" stroke="currentColor"></path>
                            <path d="M2.0316 158.4475l29.5442 -5.2094" stroke="currentColor"></path>
                            <path d="M8.1108 181.1833l28.1908 -10.2606" stroke="currentColor"></path>
                            <path d="M18.0681 202.5078l25.9808 -15" stroke="currentColor"></path>
                            <path d="M31.581 221.777l22.9813 -19.2836" stroke="currentColor"></path>
                            <path d="M48.223 238.419l19.2836 -22.9813" stroke="currentColor"></path>
                            <path d="M67.4922 251.9319l15 -25.9808" stroke="currentColor"></path>
                            <path d="M88.8167 261.8893l10.2606 -28.1908" stroke="currentColor"></path>
                            <path d="M111.5526 267.9684l5.2094 -29.5442" stroke="currentColor"></path>
                            <path d="M135 270v-30" stroke="currentColor"></path>
                            <path d="M158.4475 267.9684l-5.2094 -29.5442" stroke="currentColor"></path>
                            <path d="M181.1834 261.8892l-10.2606 -28.1908" stroke="currentColor"></path>
                            <path d="M202.5079 251.9319l-15 -25.9808" stroke="currentColor"></path>
                            <path d="M221.7771 238.4189l-19.2836 -22.9813" stroke="currentColor"></path>
                            <path d="M238.419 221.777l-22.9813 -19.2836" stroke="currentColor"></path>
                            <path d="M251.932 202.5078l-25.9808 -15" stroke="currentColor"></path>
                            <path d="M261.8893 181.1833l-28.1908 -10.2606" stroke="currentColor"></path>
                            <path d="M267.9684 158.4474l-29.5442 -5.2094" stroke="currentColor"></path>
                            <path d="M270 134.9999h-30" stroke="currentColor"></path>
                            <path d="M267.9684 111.5525l-29.5442 5.2094" stroke="currentColor"></path>
                            <path d="M261.8892 88.8166l-28.1908 10.2606" stroke="currentColor"></path>
                            <path d="M251.9319 67.4921l-25.9808 15" stroke="currentColor"></path>
                            <path d="M238.419 48.2229l-22.9813 19.2836" stroke="currentColor"></path>
                            <path d="M221.777 31.581l-19.2836 22.9813" stroke="currentColor"></path>
                            <path d="M202.5078 18.068l-15 25.9808" stroke="currentColor"></path>
                            <path d="M181.1833 8.1107l-10.2606 28.1908" stroke="currentColor"></path>
                            <path d="M158.4474 2.0316l-5.2094 29.5442" stroke="currentColor"></path>
                            <path d="M134.9999 0v30" stroke="currentColor"></path>
                            <path d="M111.5525 2.0316l5.2094 29.5442" stroke="currentColor"></path>
                            <path d="M88.8166 8.1108l10.2606 28.1908" stroke="currentColor"></path>
                            <path d="M67.4921 18.0681l15 25.9808" stroke="currentColor"></path>
                            <path d="M48.2229 31.5811l19.2836 22.9813" stroke="currentColor"></path>
                            <path d="M31.581 48.223l22.9813 19.2836" stroke="currentColor"></path>
                            <path d="M18.0681 67.4922l25.9808 15" stroke="currentColor"></path>
                            <path d="M8.1107 88.8167l28.1908 10.2606" stroke="currentColor"></path>
                            <path d="M2.0316 111.5525l29.5442 5.2094" stroke="currentColor"></path>
                            {
                                dotPositions[idx]
                            }
                        </svg>
                        <div className="nut-container">
                            <div className="nut-text">{item}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}