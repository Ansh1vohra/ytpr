"use client";

import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import CustomCursor from "@/components/CustomCursor";

const advisoryData = {
  tagLine: "Inclusion & belonging",
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

const InclusionPage: React.FC = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <div className="relative min-h-screen text-black">
      {!isTouchDevice && <CustomCursor isHovered={isButtonHovered} />}

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="flex md:-mt-34 -mt-10" // Responsive negative margin
      >
        <motion.div
          variants={itemVariants}
          className="md:w-4/5 flex flex-col items-start px-8 md:px-24 pt-[290px] pb-[100px] border-b-[3px]" // Fixed md:px-25 to md:px-24
        >
          <motion.p
            variants={itemVariants}
            className="text-black max-w-4xl font-semibold tracking-wide text-5xl md:text-6xl mb-2"
          >
            {advisoryData.tagLine}
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

      {/* Top Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative px-6 py-16 md:flex md:flex-row md:px-10"
      >
        <motion.div
          variants={itemVariants}
          className="md:w-1/3 flex flex-col justify-center items-center"
        >
          <h2 className="text-3xl mb-8 text-black font-semibold">
            Advancing our efforts…
          </h2>
          <motion.div
            variants={imageVariants}
            className="w-64 h-48 transform -rotate-12 shadow-lg border border-gray-200 rounded-xl overflow-hidden"
          >
            <Image
              src="/raimg1.jpg"
              alt="Inclusion initiative"
              width={256}
              height={192}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </motion.div>

        <div className="hidden md:block border-l border-black absolute left-1/3 h-[calc(100%-5rem)]" />

        <motion.div variants={itemVariants} className="md:w-2/3 p-4 space-y-6">
          <p className="text-xl text-gray-900 text-justify">
            Inclusion is one of our core values. We foster teams and environments built on belonging and an openness to possibility.
          </p>
          <p className="text-xl text-gray-900 text-justify">
            At Young Thames Public Relations (YTPR), we are deeply committed to creating a culture where every employee feels valued, respected, and empowered to bring their authentic selves to work.
          </p>
          <p className="text-xl text-gray-900 text-justify">
            Our commitment to inclusion guides how we engage with each other, our clients, and our community. It’s part of what drives creativity and bold, unexpected ideas—and it’s an engine of our vibrant culture and performance as a leading agency.
          </p>
          <p className="text-xl font-bold text-gray-900 text-justify">
            We drive growth by embedding belonging in every corner of our culture and inclusion in every aspect of our work.
          </p>
        </motion.div>
      </motion.section>

      <div className="w-full border-t border-black mx-6 md:mx-10" />

      {/* Three Horizontal Blocks */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 py-16 md:px-10"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Operationalizing inclusion on all fronts",
              text: "From sponsorship/mentoring programs to expanding BRGs, fostering a culture of inclusion for all while driving business impact.",
            },
            {
              title: "Creating a sense of belonging in every corner of our culture",
              text: "We’re committed to creating a workplace where all employees feel welcomed, empowered, and invested to stay and grow.",
            },
            {
              title: "Embedding inclusive thinking in our work",
              text: "And using the power of that work across our network to drive change.",
            },
          ].map((block, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col backdrop-blur-sm bg-white/30 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <motion.div variants={imageVariants}>
                <Image
                  src="/raimg1.jpg"
                  alt={block.title}
                  width={400}
                  height={350}
                  className="w-full h-[350px] object-cover rounded-t-xl transition-transform duration-500 group-hover:rotate-[-6deg]"
                  style={{ transformOrigin: "bottom right" }}
                />
              </motion.div>
              <div className="p-6 transition-transform duration-500 group-hover:translate-y-5">
                <h3 className="text-xl font-semibold uppercase text-black">
                  {block.title}
                </h3>
                <p className="mt-2 text-gray-900 text-justify">{block.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Continuation Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 py-16 md:px-10"
      >
        <div className="container mx-auto flex flex-col md:flex-row gap-12">
          <motion.div variants={itemVariants} className="md:w-1/3">
            <h2 className="text-3xl uppercase text-black font-semibold">
              Fostering a culture of inclusion & belonging
            </h2>
          </motion.div>
          <motion.div variants={containerVariants} className="md:w-2/3 flex flex-col gap-8">
            {[
              {
                title: "30+ Local Inclusion Councils",
                text: "Employees in local offices around the globe regularly meet and plan programming to encourage inclusion and engagement – from learning about different lived experiences through cultural celebrations and Brave Spaces to employees providing pro-bono support to local non-profit organizations.",
              },
              {
                title: "Business Resource Groups",
                text: "Our Business Resource Groups (BRGs) are open to all employees. They not only unite and support employees and allies across North America, but also focus on ways to make business impact. They include AFIRE (Asian for Inclusion, Respect and Empowerment), EQUITABLE (employees with disabilities and chronic illness), LIGA (Latino Inclusion & Growth Alliance), NOIR (Nurturing Our Inclusion for Representation), and Q+ (LGBTQIA+ Guidance).",
              },
              {
                title: "C.O.N.N.E.C.T",
                text: "Connecting Our Now and Next Executive and Creative Talent (CONNECT) is a senior-level sponsorship program supporting our high-performing, high-potential leaders focused on inclusion.",
              },
            ].map((block, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="flex flex-col md:flex-row items-center gap-6 backdrop-blur-sm bg-white/30 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                  <motion.div variants={imageVariants}>
                    <Image
                      src="/raimg1.jpg"
                      alt={block.title}
                      width={300}
                      height={300}
                      className="w-[300px] h-[300px] object-cover rounded-xl transition-transform duration-500 hover:rotate-6"
                      style={{ transformOrigin: "0 0" }}
                    />
                  </motion.div>
                  <div className="flex-1 p-6">
                    <h3 className="text-xl font-semibold uppercase text-black">
                      {block.title}
                    </h3>
                    <p className="mt-2 text-gray-900 text-justify">{block.text}</p>
                  </div>
                </div>
                {index < 2 && <hr className="border-t border-gray-300 my-8" />}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-6 text-center"
      >
        <div className="container mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-black"
          >
            Join Our Inclusive Community
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-900 max-w-xl mx-auto mb-8"
          >
            Let’s work together to build a community where everyone thrives.
          </motion.p>
          <Link href="/connect">
            <motion.button
              variants={itemVariants}
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold transition duration-300 hover:bg-gray-100 flex items-center gap-2 mx-auto"
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect with Us <FaArrowRight />
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* Ticker Section */}
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
    </div>
  );
};

export default InclusionPage;