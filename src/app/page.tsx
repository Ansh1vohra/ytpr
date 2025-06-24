"use client";

import { FaArrowRight, FaLightbulb, FaBullseye } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";
import ImageSlider from "@/components/ImageSlider";
import CustomCursor from "@/components/CustomCursor";
import OurExpertise from "@/components/OurExpertise";
import Image from "next/image";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HomePage() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Hero slides data
  const heroSlides = [
    {
      image: "/home1.avif",
      title: "Crafting Conversations. Shaping Reputations",
      subtitle: "Expert public relations and marketing solutions for diverse industries and impactful organizational change."
    },
    {
      image: "/home4.jpeg",
      title: "Where Strategy Meets Storytelling",
      subtitle: "Cutting-edge strategies to elevate your brand in today's competitive marketplace."
    },
    {
      image: "/home3.png",
      title: "Advising the Bold. Amplifying the Brave",
      subtitle: "Building meaningful connections between brands and their audiences."
    }
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <div className="relative">
      <CustomCursor isHovered={isButtonHovered} />

      <section className="relative text-white pt-[35vh] h-screen">
        {/* Background images with simple fade transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeVariants}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content container */}
        <div className="container mx-auto px-10 pb-20 relative z-10 h-full">
          <div className="space-y-6 max-w-2xl relative h-[50vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={fadeVariants}
                transition={{ duration: 0.4 }}
                className="absolute top-0 left-0 w-full"
              >
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-200 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <Link href="/connect">
                    <button
                      className="bg-white cursor-pointer md:cursor-none text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center gap-2 mt-6"
                      onMouseEnter={() => setIsButtonHovered(true)}
                      onMouseLeave={() => setIsButtonHovered(false)}
                    >
                      Get Started <FaArrowRight />
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <motion.div 
        className="bg-orange-600 animate-gradient-cycle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.section 
          className="py-40 px-10 text-2xl md:text-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>At our core, we believe brands shouldn&apos;t just mirror culture — they should actively shape it. To truly earn loyalty and trust, brands must create and deliver meaningful value. Powered by the <b>Young Thames Public Relations (YTPR)</b>
            — a leading strategic communications and consulting network with a great foundation — our agency is purpose-built to help brands drive cultural impact and achieve measurable results.</p>
        </motion.section>

        <motion.section 
          className="px-10 pb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="text-5xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Our Work
          </motion.h3>
          <div className="py-10">
            <ImageSlider />
          </div>
        </motion.section>

        <OurExpertise />

        <motion.section 
          className="py-16 px-10"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <div className="container mx-auto">
            <motion.h2 
              className="text-5xl mb-12"
              variants={itemVariants}
            >
              Our Vision and Mission
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="backdrop-blur-sm bg-white/10 p-8 rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-shadow"
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                    <FaLightbulb className="text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Vision</h3>
                </div>
                <p className="">
                  To be the most trusted strategic communication partner for brands navigating complex markets and transformative change.
                </p>
              </motion.div>

              <motion.div 
                className="backdrop-blur-sm bg-white/10 p-8 rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-shadow"
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                    <FaBullseye className=" text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                </div>
                <p>
                  We are a public relations agency dedicated to advising brands, fostering innovation, and navigating challenges in sectors like health, technology, and more.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="py-16 px-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              Ready to Transform Your Brand?
            </motion.h2>
            <motion.p 
              className="text-xl max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Let&apos;s collaborate to create powerful communication strategies that drive results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Link href="/connect">
                <button
                  className="bg-white cursor-pointer md:cursor-none text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
                  onMouseEnter={() => setIsButtonHovered(true)}
                  onMouseLeave={() => setIsButtonHovered(false)}
                >
                  Contact Our Team
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* <motion.div 
          className="h-8 bg-gradient-to-b from-animate-gradient-cycle to-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        /> */}

        {/* <motion.section 
          className="relative py-4 bg-black flex overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image 
            src='/ytprr.png' 
            width={500} 
            height={500} 
            alt="Client logo"
            className="hover:scale-105 transition-transform duration-300"
          />
          <Image 
            src='/ytprr.png' 
            className="-ml-[20px] hover:scale-105 transition-transform duration-300" 
            width={500} 
            height={500} 
            alt="Client logo"
          />
          <Image 
            src='/ytprr.png' 
            className="-ml-[20px] hover:scale-105 transition-transform duration-300" 
            width={500} 
            height={500} 
            alt="Client logo"
          />
          <Image 
            src='/ytprr.png' 
            className="-ml-[20px] hover:scale-105 transition-transform duration-300" 
            width={500} 
            height={500} 
            alt="Client logo"
          />
          <Image 
            src='/ytprr.png' 
            className="-ml-[20px] hover:scale-105 transition-transform duration-300" 
            width={500} 
            height={500} 
            alt="Client logo"
          />
          <Image 
            src='/ytprr.png' 
            className="-ml-[20px] hover:scale-105 transition-transform duration-300" 
            width={500} 
            height={500} 
            alt="Client logo"
          />
        </motion.section> */}
      </motion.div>
    </div>
  );
}