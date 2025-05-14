"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CustomCursor from '@/components/CustomCursor'; // Make sure to import your CustomCursor component

const AboutUsPage: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for mobile devices
    const checkIfMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 1024;
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleHover = () => setIsHovered(true);
  const handleHoverEnd = () => setIsHovered(false);

  return (
    <div className="min-h-screen">
      {/* Custom Cursor */}
      {!isMobile && <CustomCursor isHovered={isHovered} />}

      {/* Hero Section - Dark */}
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Young Thames</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto italic text-purple-200">
            &quot;The best marketing doesn&apos;t feel like marketing.&quot; - Tom Fishburne
          </p>
        </div>
      </section>

      {/* About Section - Light */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Young Thames was born out of a vision: to redefine the way businesses communicate with their audiences.
              </p>
              <p className="text-lg text-gray-700">
                Inspired by the vibrant flow of the River Thames—symbolizing constant movement and adaptability—we set out to create an agency that embodies these qualities.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden h-80 relative shadow-lg">
              <Image
                src="/office.jpeg"
                alt="Our team working together"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values - Dark */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <ul className="space-y-3 text-lg text-gray-300">
                {[
                  "To empower brands to communicate authentically",
                  "To craft strategies that resonate deeply with target audiences",
                  "To deliver measurable results that drive growth"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Creativity", desc: "Fresh ideas and innovative solutions" },
                  { name: "Integrity", desc: "Transparency and honesty in everything" },
                  { name: "Collaboration", desc: "Valuing client insights as much as our expertise" },
                  { name: "Excellence", desc: "Striving for perfection in every detail" }
                ].map((value, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-700">
                    <h3 className="font-semibold text-blue-300">{value.name}</h3>
                    <p className="text-gray-300 text-sm">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Light */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Marketing",
                image: "/marketing.jpeg",
                items: [
                  "Strategic planning and execution",
                  "Digital marketing campaigns",
                  "Content creation and storytelling"
                ]
              },
              {
                title: "Communication",
                image: "/communication.jpeg",
                items: [
                  "Brand messaging development",
                  "Internal communication strategies",
                  "Crisis communication management"
                ]
              },
              {
                title: "Public Relations",
                image: "/publicrelation.jpeg",
                items: [
                  "Media relations and press coverage",
                  "Event planning and management",
                  "Influencer partnerships"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="h-48 relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements - Dark */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Successfully launched over 500 marketing campaigns",
                  "Increased client engagement rates by 75%",
                  "Built relationships with top-tier media outlets",
                  "Received industry recognition for innovation"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden h-80 relative">
              <Image
                src="/award.jpg"
                alt="Our awards and recognition"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Light */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Young Thames transformed our brand presence online!",
                author: "Atharv",
                image: "/client1.jpeg"
              },
              {
                quote: "They've helped us build lasting relationships with customers.",
                author: "Anjali",
                image: "/client2.jpeg"
              },
              {
                quote: "Their PR expertise is unmatched!",
                author: "Jiya",
                image: "/client3.jpeg"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="h-32 w-32 mx-auto mb-4 rounded-full overflow-hidden relative">
                  <Image
                    src={item.image}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 italic mb-4 text-center">&quot;{item.quote}&quot;</p>
                <p className="text-gray-900 font-medium text-center">— {item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Dark with Custom Cursor */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let&apos;s Collaborate!</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-blue-100">
            Together, we can create campaigns that inspire action and drive growth.
          </p>
          <Link href="/connect">

            <button
              className="bg-white text-blue-700 cursor-pointer md:cursor-none px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverEnd}
            >
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;