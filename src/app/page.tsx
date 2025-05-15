"use client";

import { FaArrowRight, FaLightbulb, FaBullseye } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";
import ImageSlider from "@/components/ImageSlider";
import CustomCursor from "@/components/CustomCursor";
import Image from "next/image";

export default function HomePage() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const expertiseItems = [
    "Creative, design and content",
    "Public relations and Marketing",
    "Strategy planning and reputation",
    "Transaction and Transformation",
    "Crises and issues",
    "Public Affairs and impact"
  ];


  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="relative">
      <CustomCursor isHovered={isButtonHovered} />

      <section className="relative text-white pt-[35vh] -mt-[95px]">
        {/* Background images with fade transition */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-no-repeat bg-cover bg-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content container */}
        <div className="container mx-auto px-10 pb-20 relative z-10 h-full">
          <div className="space-y-6 max-w-2xl relative h-[50vh]">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full transition-all duration-1000 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl text-gray-200 mt-4">
                  {slide.subtitle}
                </p>
                <Link href="/connect">
                  <button
                    className="bg-white cursor-pointer md:cursor-none text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center gap-2 mt-6"
                    onMouseEnter={() => setIsButtonHovered(true)}
                    onMouseLeave={() => setIsButtonHovered(false)}
                  >
                    Get Started <FaArrowRight />
                  </button>
                </Link>
              </div>
            ))}
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

      <div className="bg-orange-600 animate-gradient-cycle">
        <section className="py-40 px-10 text-2xl md:text-3xl image.png">
          <p>At our core, we believe brands shouldn&apos;t just mirror culture — they should actively shape it. To truly earn loyalty and trust, brands must create and deliver meaningful value. Powered by the <b>Young Thames Public Relations (YTPR)</b>
            — a leading strategic communications and consulting network with a great foundation — our agency is purpose-built to help brands drive cultural impact and achieve measurable results.</p>
        </section>

        <section className="px-10 pb-20">
          <h3 className="text-5xl">Our Work</h3>
          <div className="py-10">
            <ImageSlider />
          </div>
        </section>

        <section className="py-30 px-10 bg-black">
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


        <section className="py-16 px-10">
          <div className="container mx-auto">
            <h2 className="text-5xl mb-12">Our Vision and Mission</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="backdrop-blur-sm bg-white/10 p-8 rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-shadow"
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
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
              </div>

              <div className="backdrop-blur-sm bg-white/10 p-8 rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-shadow"
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
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
              </div>
            </div>
          </div>
        </section>


        <section className="py-16 px-10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Brand?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Let&apos;s collaborate to create powerful communication strategies that drive results.
            </p>
            <Link href="/connect">
              <button
                className="bg-white cursor-pointer md:cursor-none text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
                onMouseEnter={() => setIsButtonHovered(true)} // Set hover state on mouse enter
                onMouseLeave={() => setIsButtonHovered(false)} // Reset hover state on mouse leave
              >
                Contact Our Team
              </button>
            </Link>
          </div>
        </section>
        <div className="h-8 bg-gradient-to-b from-animate-gradient-cycle to-black"></div>
        <section className="relative py-4 bg-black flex overflow-hidden">
          {/* Add a fading overlay at the top */}
          {/* <div className="absolute inset-0 top-0 h-20 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" /> */}

          {/* Your images */}
          <Image src='/ytprr.png' width={500} height={500} alt="Picture of the author" />
          <Image src='/ytprr.png' className="-ml-[20px]" width={500} height={500} alt="Picture of the author" />
          <Image src='/ytprr.png' className="-ml-[20px]" width={500} height={500} alt="Picture of the author" />
          <Image src='/ytprr.png' className="-ml-[20px]" width={500} height={500} alt="Picture of the author" />
          <Image src='/ytprr.png' className="-ml-[20px]" width={500} height={500} alt="Picture of the author" />
          <Image src='/ytprr.png' className="-ml-[20px]" width={500} height={500} alt="Picture of the author" />
        </section>
      </div>


    </div>
  );
}
