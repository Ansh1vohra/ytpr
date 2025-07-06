"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import CustomCursor from "@/components/CustomCursor";
import Link from "next/link";

const advisoryData = {
  tagLine: "Work at YTPR",
};

// Animation variants
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

// Data for the culture slides section
const cultureSlides = [
  {
    text: "We stay curious – asking questions and welcoming new perspectives",
    image: "/culture-slide-1.jpg",
    alt: "Curiosity at YTPR",
  },
  {
    text: "We lead with empathy – listening deeply and showing up fully",
    image: "/culture-slide-2.jpg",
    alt: "Empathy at YTPR",
  },
  {
    text: "We create with intention – every idea has meaning and impact",
    image: "/culture-slide-3.jpg",
    alt: "Intention at YTPR",
  },
  {
    text: "We act with honesty – integrity isn’t optional, it’s essential",
    image: "/culture-slide-4.jpg",
    alt: "Honesty at YTPR",
  },
  {
    text: "We step up with courage – taking bold steps, even in the unknown",
    image: "/culture-slide-5.jpg",
    alt: "Courage at YTPR",
  },
];

// Data for the employee benefits slides section
const employeeBenefits = [
  {
    text: "Work setups that flex with your life",
    image: "/benefit-slide-1.jpg",
    alt: "Flexible Work Setup",
  },
  {
    text: "Learning paths designed for your growth",
    image: "/benefit-slide-2.jpg",
    alt: "Learning and Growth",
  },
  {
    text: "Wellness tools that support your mind and body",
    image: "/benefit-slide-3.jpg",
    alt: "Wellness Support",
  },
  {
    text: "Recognition that sees and celebrates your effort",
    image: "/benefit-slide-4.jpg",
    alt: "Recognition and Celebration",
  },
  {
    text: "A people-first atmosphere that feels like home",
    image: "/benefit-slide-5.jpg",
    alt: "People-First Atmosphere",
  },
];

// Data for employee stories
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
];

const WorkAtYTPRPage: React.FC = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentBenefitSlide, setCurrentBenefitSlide] = useState(0);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cultureSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cultureSlides.length) % cultureSlides.length);
  };

  const handleNextBenefitSlide = () => {
    setCurrentBenefitSlide((prev) => (prev + 1) % employeeBenefits.length);
  };

  const handlePrevBenefitSlide = () => {
    setCurrentBenefitSlide((prev) => (prev - 1 + employeeBenefits.length) % employeeBenefits.length);
  };

  return (
    <div className="relative min-h-screen text-black">
      {/* {!isTouchDevice && <CustomCursor />} */}

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
            className="text-black max-w-2xl text-lg mb-4"
          >
            Take on bold ideas with passionate minds. Make real impact, together.
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

      {/* Section with Text and Button Above Border */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="w-full px-8 md:px-24"
      >
        <div className="w-full py-8"></div>
        <motion.p
          variants={itemVariants}
          className="text-black w-full text-4xl mb-8"
        >
          Tackle unique problems alongside talented colleagues and teams. See your work make a true difference in people’s lives.
        </motion.p>
        <motion.button
          variants={itemVariants}
          className="border-2 rounded-full p-4 m-2 mb-8 text-sm"
        >
          View current vacancies
        </motion.button>
        {/* Additional Padding/Space */}
        <div className="w-full py-8"></div>
        {/* Split Section with Vertical Divider */}
        <div className="flex flex-col md:flex-row border-t-[3px] border-b-[3px] border-black -mx-[calc((100vw-100%)/2)]">
          <motion.div
            variants={itemVariants}
            className="md:w-1/2 pr-8 py-8 border-r-[3px] border-black"
          >
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="md:w-1/2 pl-8 py-8"
          >
            <motion.p
              variants={itemVariants}
              className="text-black w-full text-lg"
            >
              At YTPR, we’re more than a team — we’re a creative collective built on trust, ideas, and a drive to shape change. Every voice matters here. Every project is a chance to learn, explore, and push boundaries that matter.
              <br /><br />
              We move with purpose and work with heart. Whether you're writing strategy, designing visuals, or leading conversations, you’ll be surrounded by people who care — about the craft, the outcome, and about each other.
              <br /><br />
              Here, growth isn’t a buzzword. It’s real. We nurture your talent, encourage your individuality, and give you room to thrive in your own way.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Culture Slides Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="w-full px-8 md:px-24 py-16 border-b-[3px] border-black -mx-[calc((100vw-100%)/2)]"
      >
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Image */}
          <motion.div
            variants={imageVariants}
            className="md:w-1/2 pr-8 py-8"
          >
            <Image
              src={cultureSlides[currentSlide].image}
              alt={cultureSlides[currentSlide].alt}
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-md"
            />
          </motion.div>
          {/* Right Side - Text and Navigation */}
          <motion.div
            variants={itemVariants}
            className="md:w-1/2 pl-8 py-8 flex flex-col justify-center items-center"
          >
            <motion.p
              variants={itemVariants}
              className="text-black text-2xl font-bold text-center mb-4"
            >
              {cultureSlides[currentSlide].text}
            </motion.p>
            <div className="flex items-center">
              <button
                onClick={handlePrevSlide}
                className="border-2 rounded-full p-2 m-2 text-sm"
              >
                ←
              </button>
              <span className="text-sm">
                {currentSlide + 1}/{cultureSlides.length}
              </span>
              <button
                onClick={handleNextSlide}
                className="border-2 rounded-full p-2 m-2 text-sm"
              >
                →
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* More Employee Stories Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="w-full py-16 border-t-[3px] border-black -mx-[calc((100vw-100%)/2)]"
      >
        <h2 className="text-black text-3xl font-bold mb-10 pl-8">More Employee Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-8">
          {mavericks.slice(0, 4).map((employee, index) => (
            <motion.div
              key={employee.alt}
              className={`relative w-full h-64 overflow-hidden ${hoveredImage === employee.alt ? 'rounded-lg' : 'rounded-md'}`}
              style={{
                transform: hoveredImage === employee.alt ? 'none' : `rotate(${index % 4 === 0 ? -5 : index % 4 === 1 ? 3 : index % 4 === 2 ? -3 : 5}deg)`,
                transition: 'transform 0.3s ease, border-radius 0.3s ease, scale 0.3s ease',
                boxShadow: hoveredImage === employee.alt ? '0 0 10px rgba(0,0,0,0.3)' : 'none',
              }}
              onMouseEnter={() => setHoveredImage(employee.alt)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <Image
                src={employee.src}
                alt={employee.alt}
                width={256}
                height={256}
                className={`w-full h-full object-cover ${hoveredImage === employee.alt ? 'rounded-lg scale-110' : 'rounded-md scale-100'}`}
                style={{ transition: 'transform 0.3s ease' }}
              />
              <div className="absolute bottom-2 left-2 text-white text-sm">
                {employee.title}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-8"
        >
          <Link href="/careers/employee-stories">
            <button className="border-2 rounded-full p-4 m-2 text-sm">
              View all
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Employee Benefits Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="w-full px-8 md:px-24 py-16 border-t-[3px] border-black -mx-[calc((100vw-100%)/2)]"
      >
        <h2 className="text-black text-3xl font-bold mb-10">Why Work With Us</h2>
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Benefit Image */}
          <motion.div
            variants={imageVariants}
            className="md:w-1/4 pr-8 py-8"
          >
            <Image
              src={employeeBenefits[currentBenefitSlide].image}
              alt={employeeBenefits[currentBenefitSlide].alt}
              width={300}
              height={300}
              className="w-full h-auto object-cover rounded-md"
            />
          </motion.div>
          {/* Right Side - Benefit Text and Navigation */}
          <motion.div
            variants={itemVariants}
            className="md:w-3/4 pl-8 py-8 flex flex-col justify-center"
          >
            <motion.p
              variants={itemVariants}
              className="text-black text-2xl font-bold mb-4"
            >
              {employeeBenefits[currentBenefitSlide].text}
            </motion.p>
            <div className="flex items-center mt-4">
              <button
                onClick={handlePrevBenefitSlide}
                className="border-2 rounded-full p-2 m-2 text-sm"
              >
                ←
              </button>
              <span className="text-sm">
                {currentBenefitSlide + 1}/{employeeBenefits.length}
              </span>
              <button
                onClick={handleNextBenefitSlide}
                className="border-2 rounded-full p-2 m-2 text-sm"
              >
                →
              </button>
            </div>
            <motion.div
              variants={itemVariants}
              className="mt-4"
            >
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 overflow-hidden"
      >
        <motion.div
          variants={itemVariants}
          className="relative w-[110%] mx-[-5%] bg-white py-12 transform -rotate-4"
        >
          <div className="animate-ticker-cycle whitespace-nowrap inline-block">
            {Array(50)
              .fill(null)
              .map((_, index) => (
                <span
                  key={index}
                  className="text-5xl md:text-7xl font-bold text-black uppercase mx-4"
                >
                  Work at Young Thames
                </span>
              ))}
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="relative w-[110%] mx-[-5%] bg-black py-12 transform -rotate-4"
        >
          <div className="animate-ticker-cycle-reverse whitespace-nowrap inline-block">
            {Array(50)
              .fill(null)
              .map((_, index) => (
                <span
                  key={index}
                  className="text-5xl md:text-7xl font-bold text-white uppercase mx-4"
                >
                  Work at Young Thames
                </span>
              ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Additional Padding/Space */}
      <div className="w-full py-12"></div>
    </div>
  );
};

export default WorkAtYTPRPage;