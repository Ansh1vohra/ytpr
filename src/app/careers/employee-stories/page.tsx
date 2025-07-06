"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import CustomCursor from "@/components/CustomCursor";

const advisoryData = {
  tagLine: "Employee Stories",
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

const EmployeeStoriesPage: React.FC = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isCursorHovered, setIsCursorHovered] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // Update cursor hover state whenever an image is hovered
  useEffect(() => {
    setIsCursorHovered(hoveredImage !== null);
  }, [hoveredImage]);


  const texts = [
    "Embracing cultures, ever-changing socio-economic and political situations, engaging with people of different backgrounds and needs is what will keep us ahead, and give us the intelligence to provide for our personal and business experience.",
    "Innovation thrives when we collaborate across borders, leveraging diverse perspectives to solve complex challenges and drive progress.",
    "Adapting to global trends and fostering inclusive communities ensures our resilience and growth in an interconnected world.",
  ];

  const handleNext = () => {
    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
  };

  const handlePrev = () => {
    setCurrentTextIndex((prev) => (prev - 1 + texts.length) % texts.length);
  };

  const mavericks = [
    {
      name: "Pragati Rai",
      title: "Legal Associate",
      quote: "Working at YTPR as a Legal Associate isn’t about sitting on the sidelines — it’s about being at the center of ethical clarity and bold decisions. I help shape the framework that allows creativity to thrive responsibly.",
      tagline: "Where law meets impact with integrity.",
      src: "/pragati-rai.jpg",
      alt: "Pragati Rai",
    },
    {
      name: "Kashvi",
      title: "Content & Social Media Strategist",
      quote: "When I joined YTPR, I thought I was just going to manage content calendars and post timings. What I actually found? A place where ideas fly freely and my voice is heard. I get to tell powerful stories that move people — and that’s everything to me.",
      tagline: "Creative instinct meets cultural pulse.",
      src: "/kashvi.jpg",
      alt: "Kashvi",
    },
    {
      name: "Arkadeep",
      title: "Graphic Designer",
      quote: "Design here is more than pixels. It’s storytelling. Every brief is a blank canvas, and the trust I get from the team makes the process feel alive. We’re constantly experimenting, challenging norms, and leveling up — together.",
      tagline: "Turning bold ideas into visual magic.",
      src: "/arkadeep.jpg",
      alt: "Arkadeep",
    },
    {
      name: "Ansh",
      title: "Web Developer",
      quote: "At YTPR, I don’t just write code — I build experiences. I’ve learned how tech can power emotion and design can drive change. The team here is more like a think tank than a workplace — always bouncing ideas, always pushing limits.",
      tagline: "Logic meets creativity, every single day.",
      src: "/ansh.jpg",
      alt: "Ansh",
    },
    {
      name: "Gautami",
      title: "Creative Designer",
      quote: "Every day at YTPR is a chance to reimagine the ordinary. As a creative designer, I’m not just designing visuals — I’m designing emotions, energy, and impact. The team here celebrates imagination, and that freedom fuels my best work.",
      tagline: "Design with heart. Creativity with purpose.",
      src: "/gautami.jpg",
      alt: "Gautami",
    },
  ];

  const additionalImages = [
    { src: "/hamish-docherty.jpg", alt: "Hamish Docherty", title: "Vice President, Client Experience - Glasgow" },
    { src: "/khery-chiapas.jpg", alt: "Khery Chiapas", title: "Account Supervisor - Mexico City" },
    { src: "/julia-goetz.jpg", alt: "Julia Götz", title: "Vice President, Strategic Planning - Cologne" },
    { src: "/sarah-haggerty.jpg", alt: "Sarah Haggerty", title: "Director, Healthcare - Boston" },
    { src: "/image5.jpg", alt: "Image 5", title: "Title 5" },
    { src: "/image6.jpg", alt: "Image 6", title: "Title 6" },
    { src: "/image7.jpg", alt: "Image 7", title: "Title 7" },
    { src: "/image8.jpg", alt: "Image 8", title: "Title 8" },
    { src: "/image9.jpg", alt: "Image 9", title: "Title 9" },
    { src: "/image10.jpg", alt: "Image 10", title: "Title 10" },
  ];

  return (
    <div className="relative min-h-screen text-black">
      {!isTouchDevice && <CustomCursor isHovered={isCursorHovered} />}

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="flex md:-mt-34 -mt-10"
      >
        <motion.div
          variants={itemVariants}
          className="md:w-4/5 flex flex-col items-start px-8 md:px-24 pt-[290px] pb-[100px] border-b-[3px]"
        >
          <button className="border-2 rounded-full p-4 m-2 mb-4 text-sm">Join us</button>
          <motion.p
            variants={itemVariants}
            className="text-black max-w-4xl font-semibold tracking-wide text-5xl md:text-6xl mb-2"
          >
            {advisoryData.tagLine}
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-black max-w-2xl text-lg"
          >
            Real stories. Real people. Real impact.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-black max-w-2xl text-lg"
          >
            Step inside the minds and hearts of the people who make YTPR what it is — passionate, bold, and always evolving. Our team doesn’t just work at YTPR. They shape it.
          </motion.p>
        </motion.div>
        <motion.div
          variants={imageVariants}
          className="hidden md:flex items-end"
        >
          <Image
            src="/ytdesign4.png"
            alt="YT Design"
            width={400}
            height={400}
            className="max-w-[20vw] brightness-0"
          />
        </motion.div>
      </motion.div>

      {/* Mavericks Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="w-full py-16"
      >
        <h2 className="text-black text-3xl font-bold mb-10 pl-8">Meet Our Mavericks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8">
          {mavericks.slice(0, 3).map((maverick, index) => (
            <motion.div
              key={maverick.alt}
              variants={itemVariants}
              className={`relative w-full h-96 overflow-hidden ${hoveredImage === maverick.alt ? 'rounded-lg' : 'rounded-md'}`}
              style={{
                transform: hoveredImage === maverick.alt ? 'none' : `rotate(${index % 3 === 0 ? -5 : index % 3 === 1 ? 3 : 5}deg)`,
                transition: 'transform 0.3s ease, border-radius 0.3s ease, scale 0.3s ease',
                margin: hoveredImage && hoveredImage !== maverick.alt ? '-10px' : '0',
                boxShadow: hoveredImage === maverick.alt ? '0 0 10px rgba(0,0,0,0.3)' : 'none',
              }}
              onMouseEnter={() => setHoveredImage(maverick.alt)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <Image
                src={maverick.src}
                alt={maverick.alt}
                width={256}
                height={256}
                className={`w-full h-full object-cover ${hoveredImage === maverick.alt ? 'rounded-lg scale-110' : 'rounded-md scale-100'}`}
                style={{ transition: 'transform 0.3s ease' }}
              />
              <div className="absolute bottom-2 left-2 text-white text-sm">
                <p className="font-semibold">{maverick.name}</p>
                <p>{maverick.title}</p>
                <p>{maverick.tagline}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="w-full py-8 relative"
        style={{ backgroundColor: 'black', color: 'white' }}
      >
        <div className="flex justify-between items-center px-12">
          <p className="text-center flex-1 text-xl leading-relaxed">{texts[currentTextIndex]}</p>
          <div className="flex flex-col items-end">
            <div className="flex space-x-4 mb-2">
              <button onClick={handlePrev} className="text-white focus:outline-none">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              <span className="text-white">{currentTextIndex + 1}/{texts.length}</span>
              <button onClick={handleNext} className="text-white focus:outline-none">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* More Employee Stories Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="w-full py-16"
      >
        <h2 className="text-black text-3xl font-bold mb-10 pl-8">More Employee Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-8">
          {[...mavericks.slice(3), ...additionalImages].map((img, index) => (
            <motion.div
              key={img.alt}
              className={`relative w-full h-64 overflow-hidden ${hoveredImage === img.alt ? 'rounded-lg' : 'rounded-md'}`}
              style={{
                transform: hoveredImage === img.alt ? 'none' : `rotate(${index % 8 === 0 ? -5 : index % 8 === 1 ? 3 : index % 8 === 2 ? -3 : index % 8 === 3 ? 5 : index % 8 === 4 ? -4 : index % 8 === 5 ? 2 : index % 8 === 6 ? -2 : 4}deg)`,
                transition: 'transform 0.3s ease, border-radius 0.3s ease, scale 0.3s ease',
                boxShadow: hoveredImage === img.alt ? '0 0 10px rgba(0,0,0,0.3)' : 'none',
              }}
              onMouseEnter={() => setHoveredImage(img.alt)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={256}
                height={256}
                className={`w-full h-full object-cover ${hoveredImage === img.alt ? 'rounded-lg scale-110' : 'rounded-md scale-100'}`}
                style={{ transition: 'transform 0.3s ease' }}
              />
              <div className="absolute bottom-2 left-2 text-white text-sm">
                {img.title}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Additional Padding/Space */}
      <div className="w-full py-12"></div>
    </div>
  );
};

export default EmployeeStoriesPage;