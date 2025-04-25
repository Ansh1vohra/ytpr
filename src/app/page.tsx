"use client";

import { FaArrowRight, FaLightbulb, FaBullseye, FaChartLine } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Import useState
import CustomCursor from "@/components/CustomCursor"; // Import the CustomCursor component

export default function HomePage() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);  // State for button hover

  return (
    <div>
      <CustomCursor isHovered={isButtonHovered} />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20 px-10">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Transforming Brands <br />
                Through <br />
                Strategic Communication
              </h1>
              <p className="text-xl text-gray-200">
                Expert public relations and marketing solutions for diverse industries and impactful organizational change.
              </p>
              <Link href="/connect">
                <button
                  className="bg-white cursor-pointer text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center gap-2"
                  onMouseEnter={() => setIsButtonHovered(true)} // Set hover state on mouse enter
                  onMouseLeave={() => setIsButtonHovered(false)} // Reset hover state on mouse leave
                >
                  Get Started <FaArrowRight />
                </button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-80 md:h-96 w-full bg-gray-200 rounded-xl overflow-hidden">
                {/* Replace with your actual hero image */}
                <Image
                  src="/home1.avif"
                  alt="Strategic Communication"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-10">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-white">About Young Thames</h2>
                <p className="text-lg text-gray-100">
                  At Young Thames, we empower businesses with strategic public relations, creative solutions, and transformative insights across diverse industries to drive meaningful change.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="backdrop-blur-sm bg-white/30 p-4 rounded-lg border border-white/20 shadow-sm">
                    <h3 className="font-semibold text-white">15+ Years</h3>
                    <p className="text-sm text-gray-200">Industry Experience</p>
                  </div>
                  <div className="backdrop-blur-sm bg-white/30 p-4 rounded-lg border border-white/20 shadow-sm">
                    <h3 className="font-semibold text-white">120+</h3>
                    <p className="text-sm text-gray-200">Satisfied Clients</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden">
                  {/* Award image */}
                  <Image
                    src="/award.jpg"
                    alt="Marketing award"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden">
                  {/* Neon sign image */}
                  <Image
                    src="/business.jpg"
                    alt="Neon sign"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden col-span-2">
                  {/* Office image */}
                  <Image
                    src="/office.jpg"
                    alt="Modern office"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-16 px-10 bg-gray-700">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our Vision and Mission</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="backdrop-blur-sm bg-white/10 p-8 rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                    <FaLightbulb className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Our Vision</h3>
                </div>
                <p className="text-gray-200">
                  To be the most trusted strategic communication partner for brands navigating complex markets and transformative change.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/10 p-8 rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                    <FaBullseye className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-200">
                  We are a public relations agency dedicated to advising brands, fostering innovation, and navigating challenges in sectors like health, technology, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-10 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our Expertise</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Strategic PR",
                  description: "Comprehensive public relations strategies tailored to your brand objectives.",
                  icon: <FaChartLine className="text-blue-400 text-2xl" />
                },
                {
                  title: "Creative Solutions",
                  description: "Innovative campaigns that capture attention and drive engagement.",
                  icon: <FaLightbulb className="text-purple-400 text-2xl" />
                },
                {
                  title: "Industry Insights",
                  description: "Deep sector knowledge across health, tech, finance and more.",
                  icon: <FaBullseye className="text-emerald-400 text-2xl" />
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm bg-white/10 p-8 rounded-xl border border-white/20 hover:shadow-xl transition-shadow"
                >
                  <div className="bg-white/20 p-4 rounded-full w-12 h-12 flex items-center justify-center mb-4 backdrop-blur-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-200">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-10 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Brand?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Let&apos;s collaborate to create powerful communication strategies that drive results.
            </p>
            <Link href="/connect">
              <button
                className="bg-white cursor-pointer text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
                onMouseEnter={() => setIsButtonHovered(true)} // Set hover state on mouse enter
                onMouseLeave={() => setIsButtonHovered(false)} // Reset hover state on mouse leave
              >
                Contact Our Team
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
