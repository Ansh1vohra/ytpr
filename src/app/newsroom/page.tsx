"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import CustomCursor from "@/components/CustomCursor";

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

const NewsroomPage: React.FC = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative animate-gradient-cycle min-h-screen text-black">
      <CustomCursor isHovered={isButtonHovered} />

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
          className="md:w-4/5 flex flex-col items-start px-10 md:px-24 pt-[290px] pb-[100px] border-b-[3px] border-black"
        >
          <button className="border-2 border-black rounded-full p-4 m-2 mb-4 text-sm hover:bg-gray-100 transition duration-300">
            Join us
          </button>
          <motion.p
            variants={itemVariants}
            className="text-black max-w-4xl font-semibold tracking-wide text-5xl md:text-6xl mb-2"
          >
            Newsroom
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

      {/* Section with Three Horizontal Image-Text Blocks */}
      <section className="w-full px-10 py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Block 1 */}
          <div className="flex flex-col backdrop-blur-sm bg-white/30 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow group">
            <Image
              src="/A9A6924WeberPhotography-e1676062876926-1.webp"
              alt="Operationalizing inclusion"
              width={400}
              height={350}
              className="w-full h-[350px] object-cover rounded-t-xl transition-transform duration-500 ease-in-out group-hover:rotate-[-6deg]"
              style={{ transformOrigin: 'bottom right' }}
            />
            <div className="p-6 transition-transform duration-500 ease-in-out group-hover:translate-y-5">
              <h2 className="text-xl font-semibold uppercase text-black">
                Operationalizing inclusion on all fronts
              </h2>
              <p className="mt-2 text-gray-900 text-justify">
                From sponsorship/mentoring programs to expanding BRGs, fostering a culture of inclusion for all while driving business impact.
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col backdrop-blur-sm bg-white/30 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow group">
            <Image
              src="/A9A6924WeberPhotography-e1676062876926-1.webp"
              alt="Sense of belonging"
              width={400}
              height={350}
              className="w-full h-[350px] object-cover rounded-t-xl transition-transform duration-500 ease-in-out group-hover:rotate-[-6deg]"
              style={{ transformOrigin: 'bottom right' }}
            />
            <div className="p-6 transition-transform duration-500 ease-in-out group-hover:translate-y-5">
              <h2 className="text-xl font-semibold uppercase text-black">
                Creating a sense of belonging in every corner of our culture
              </h2>
              <p className="mt-2 text-gray-900 text-justify">
                We’re committed to creating a workplace where all employees feel welcomed, empowered, and invested to stay and grow.
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col backdrop-blur-sm bg-white/30 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow group">
            <Image
              src="/A9A6924WeberPhotography-e1676062876926-1.webp"
              alt="Embedding inclusive thinking"
              width={400}
              height={350}
              className="w-full h-[350px] object-cover rounded-t-xl transition-transform duration-500 ease-in-out group-hover:rotate-[-6deg]"
              style={{ transformOrigin: 'bottom right' }}
            />
            <div className="p-6 transition-transform duration-500 ease-in-out group-hover:translate-y-5">
              <h2 className="text-xl font-semibold uppercase text-black">
                Embedding inclusive thinking in our work
              </h2>
              <p className="mt-2 text-gray-900 text-justify">
                And using the power of that work across our network to drive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Continuation Section - Title on Left, Blocks on Right */}
      <section className="w-full px-10 py-20">
        <div className="container mx-auto flex flex-col md:flex-row gap-12">
          {/* Left Side - Title and Dropdown */}
          <div className="md:w-1/3 flex flex-col items-start">
            <h2 className="text-3xl md:text-3xl uppercase text-black">
              News by category
            </h2>
            <div className="relative mt-4 w-full md:w-48">
              <select
                className="w-full md:w-48 bg-white border border-gray-300 rounded-4xl shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-black [&>option]:bg-white [&>option]:text-black [&>option:checked]:bg-black [&>option:checked]:text-white py-4 px-4 appearance-none custom-select"
                style={{ direction: 'ltr' }}
                onFocus={() => setIsDropdownOpen(true)}
                onBlur={() => setIsDropdownOpen(false)}
                onChange={() => setIsDropdownOpen(false)}
              >
                <option value="view-all">View all</option>
                <option value="announcements">Announcements</option>
                <option value="award-coverage">Awards coverage</option>
                <option value="insights">Insights</option>
                <option value="povs">POVs</option>
              </select>
              <span
                className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                style={{
                  transition: 'transform 0.3s ease',
                  transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Right Side - Vertical Blocks */}
          <div className="md:w-2/3 flex flex-col gap-8">
            {/* Block 1 - 30+ Local Inclusion Councils */}
            <div className="flex flex-col md:flex-row items-center gap-6 backdrop-blur-sm bg-white/30 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/A9A6924WeberPhotography-e1676062876926-1.webp"
                alt="Local Inclusion Councils"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover rounded-xl transition-transform duration-500 ease-in-out transform hover:rotate-6"
                style={{ transformOrigin: '0 0' }}
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold uppercase text-black">
                  30+ Local Inclusion Councils
                </h2>
                <p className="mt-2 text-gray-900 text-justify">
                  Employees in local offices around the globe regularly meet and plan programming to encourage inclusion and engagement – from learning about different lived experiences through cultural celebrations and Brave Spaces to employees providing pro-bono support to local non-profit organizations.
                </p>
              </div>
            </div>

            <hr className="border-t border-black" />

            {/* Block 2 - Business Resource Groups */}
            <div className="flex flex-col md:flex-row items-center gap-6 backdrop-blur-sm bg-white/30 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/A9A6924WeberPhotography-e1676062876926-1.webp"
                alt="Business Resource Groups"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover rounded-xl transition-transform duration-500 ease-in-out transform hover:rotate-6"
                style={{ transformOrigin: '0 0' }}
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold uppercase text-black">
                  Business Resource Groups
                </h2>
                <p className="mt-2 text-gray-900 text-justify">
                  Our Business Resource Groups (BRGs) are open to all employees. They not only unite and support employees and allies across North America, but also focus on ways to make business impact. They include AFIRE (Asian for Inclusion, Respect and Empowerment), EQUITABLE (employees with disabilities and chronic illness), LIGA (Latino Inclusion & Growth Alliance), NOIR (Nurturing Our Inclusion for Representation), and Q+ (LGBTQIA+ Guidance).
                </p>
              </div>
            </div>

            <hr className="border-t border-black" />

            {/* Block 3 - 30+ Local Inclusion Councils */}
            <div className="flex flex-col md:flex-row items-center gap-6 backdrop-blur-sm bg-white/30 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/A9A6924WeberPhotography-e1676062876926-1.webp"
                alt="Local Inclusion Councils"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover rounded-xl transition-transform duration-500 ease-in-out transform hover:rotate-6"
                style={{ transformOrigin: '0 0' }}
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold uppercase text-black">
                  30+ Local Inclusion Councils
                </h2>
                <p className="mt-2 text-gray-900 text-justify">
                  Employees in local offices around the globe regularly meet and plan programming to encourage inclusion and engagement – from learning about different lived experiences through cultural celebrations and Brave Spaces to employees providing pro-bono support to local non-profit organizations.
                </p>
              </div>
            </div>

            <hr className="border-t border-black" />

            {/* Block 4 - 30+ Local Inclusion Councils */}
            <div className="flex flex-col md:flex-row items-center gap-6 backdrop-blur-sm bg-white/30 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/A9A6924WeberPhotography-e1676062876926-1.webp"
                alt="Local Inclusion Councils"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover rounded-xl transition-transform duration-500 ease-in-out transform hover:rotate-6"
                style={{ transformOrigin: '0 0' }}
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold uppercase text-black">
                  30+ Local Inclusion Councils
                </h2>
                <p className="mt-2 text-gray-900 text-justify">
                  Employees in local offices around the globe regularly meet and plan programming to encourage inclusion and engagement – from learning about different lived experiences through cultural celebrations and Brave Spaces to employees providing pro-bono support to local non-profit organizations.
                </p>
              </div>
            </div>

            <hr className="border-t border-black" />

            {/* Block 5 - 30+ Local Inclusion Councils */}
            <div className="flex flex-col md:flex-row items-center gap-6 backdrop-blur-sm bg-white/30 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/A9A6924WeberPhotography-e1676062876926-1.webp"
                alt="Local Inclusion Councils"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover rounded-xl transition-transform duration-500 ease-in-out transform hover:rotate-6"
                style={{ transformOrigin: '0 0' }}
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold uppercase text-black">
                  30+ Local Inclusion Councils
                </h2>
                <p className="mt-2 text-gray-900 text-justify">
                  Employees in local offices around the globe regularly meet and plan programming to encourage inclusion and engagement – from learning about different lived experiences through cultural celebrations and Brave Spaces to employees providing pro-bono support to local non-profit organizations.
                </p>
              </div>
            </div>

            <hr className="border-t border-black" />

            {/* Block 6 - C.O.N.N.E.C.T */}
            <div className="flex flex-col md:flex-row items-center gap-6 backdrop-blur-sm bg-white/30 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/A9A6924WeberPhotography-e1676062876926-1.webp"
                alt="C.O.N.N.E.C.T Program"
                width={300}
                height={300}
                className="w-[300px] h-[300px] object-cover rounded-xl transition-transform duration-500 ease-in-out transform hover:rotate-6"
                style={{ transformOrigin: '0 0' }}
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold uppercase text-black">
                  C.O.N.N.E.C.T
                </h2>
                <p className="mt-2 text-gray-900 text-justify">
                  Connecting Our Now and Next Executive and Creative Talent (CONNECT) is a senior-level sponsorship program supporting our high-performing, high-potential leaders focused on inclusion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-10 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Join Our Inclusive Community
          </h2>
          <p className="text-xl text-gray-900 max-w-xl mx-auto mb-8">
            Let’s work together to build a community where everyone thrives.
          </p>
          <Link href="/connect">
            <button
              className="bg-white cursor-pointer md:cursor-pointer text-black px-5 py-3 rounded-lg font-semibold transition duration-300 hover:bg-gray-100 flex items-center gap-2 mx-auto"
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              Connect with Us <FaArrowRight />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NewsroomPage;