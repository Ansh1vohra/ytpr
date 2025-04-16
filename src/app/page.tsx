"use client";

import { FaArrowRight, FaLightbulb, FaBullseye, FaChartLine } from "react-icons/fa";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-purple-800 text-white py-20 px-4">
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
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center gap-2">
                Get Started <FaArrowRight />
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-80 md:h-96 w-full bg-gray-200 rounded-xl overflow-hidden">
                {/* Replace with your actual hero image */}
                <Image 
                  src="/hero-image.jpg" 
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
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">About Young Thames</h2>
                <p className="text-lg text-gray-600">
                  At Young Thames, we empower businesses with strategic public relations, creative solutions, and transformative insights across diverse industries to drive meaningful change.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800">15+ Years</h3>
                    <p className="text-sm text-gray-600">Industry Experience</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800">120+</h3>
                    <p className="text-sm text-gray-600">Satisfied Clients</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden">
                  {/* Award image */}
                  <Image 
                    src="/award-image.jpg" 
                    alt="Marketing award"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden">
                  {/* Neon sign image */}
                  <Image 
                    src="/neon-sign.jpg" 
                    alt="Neon sign"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden col-span-2">
                  {/* Office image */}
                  <Image 
                    src="/office-image.jpg" 
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
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Vision and Mission</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaLightbulb className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Vision</h3>
                </div>
                <p className="text-gray-600">
                  To be the most trusted strategic communication partner for brands navigating complex markets and transformative change.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <FaBullseye className="text-purple-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                </div>
                <p className="text-gray-600">
                  We are a public relations agency dedicated to advising brands, fostering innovation, and navigating challenges in sectors like health, technology, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Expertise</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Strategic PR",
                  description: "Comprehensive public relations strategies tailored to your brand objectives.",
                  icon: <FaChartLine className="text-blue-600 text-2xl" />
                },
                {
                  title: "Creative Solutions",
                  description: "Innovative campaigns that capture attention and drive engagement.",
                  icon: <FaLightbulb className="text-purple-600 text-2xl" />
                },
                {
                  title: "Industry Insights",
                  description: "Deep sector knowledge across health, tech, finance and more.",
                  icon: <FaBullseye className="text-emerald-600 text-2xl" />
                }
              ].map((service, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                  <div className="bg-white p-4 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Brand?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Let&apos;s collaborate to create powerful communication strategies that drive results.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Contact Our Team
            </button>
          </div>
        </section>
      </main>

    </div>
  );
}