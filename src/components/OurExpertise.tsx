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

    return (
        <section className="py-30 px-10 bg-black">
            <CustomCursor isHovered={isButtonHovered} />
            <h3 className="text-5xl mb-6 text-white">Our Expertise</h3>
            <div className="expertise-grid flex flex-warp gap-4 items-center justify-center">
                {expertiseItems.map((item, idx) => (
                    <div key={idx} className="expertise-circle-container p-4 ">
                        <div className="nut-container"
                            onMouseEnter={() => setIsButtonHovered(true)}
                            onMouseLeave={() => setIsButtonHovered(false)}>
                            <div className="nut-hole"></div>
                            <div className="nut-text">{item}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}