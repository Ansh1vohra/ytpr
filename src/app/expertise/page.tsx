"use client";

import React from 'react';
import Image from 'next/image';

const OurExpertise = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Expertise</h1>
          <p className="text-xl md:text-2xl max-w-3xl leading-relaxed">
            From innovative concept development to high-quality production, we craft campaigns that capture attention and fuel real business growth.
          </p>
        </div>
      </section>

      {/* Creative Section */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-900">Creative, Design, Content</h2>
              <p className="text-lg mb-6 leading-relaxed">
                From innovative concept development and compelling content creation to high-quality production, creative technology solutions, and user experience (UX) design, we craft campaigns that capture attention and fuel real business growth. As a full-service PR and marketing agency, we turn bold ideas into impactful results.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                Our earned-first, culture-driven strategies are thoughtfully designed to inspire authentic engagement between brands and their audiences. We help brands build trust and lasting connections through ideas that resonate deeply with culture.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-4">What we're known for</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    Creative concepting
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    Creative development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    Creative technology
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    User experience and design
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-100 overflow-hidden rounded-xl">
              <Image
                src="/creativedesign.jpeg"
                width={700}
                height={500}
                alt='creative'
              />
            </div>
          </div>
        </div>
      </section>

      {/* PR & Marketing Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gray-100 overflow-hidden rounded-xl">
                <Image
                  src="/publicrelation.jpeg"
                  width={700}
                  height={500}
                  alt='creative'
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Public Relations and Marketing</h2>
              <p className="text-lg mb-6 leading-relaxed">
                From strategic earned media planning and media relations to influencer partnerships, digital marketing, social media strategy, and performance-driven campaigns — we expertly navigate the evolving media landscape to secure high-impact visibility for our clients' stories.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                If storytelling is part creativity and part precision, we've perfected the balance. Our integrated media experts work seamlessly across paid, owned, and earned channels to ensure your brand connects with the right audience, in the right place, at the right moment.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-4">What we're known for</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Earned media strategy & media relations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Influencer engagement
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Digital & social strategy
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Paid and performance media
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-900">Strategy and Reputation</h2>
              <p className="text-lg mb-6 leading-relaxed">
                At the heart of our advisory practice lies strategic reputation management and impactful communications. We specialize in developing effective corporate positioning, enhancing executive visibility, navigating policy shifts and crises, and delivering board-level insights.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                We help brands shape, strengthen, and safeguard their reputations while driving measurable business outcomes. Our strategic communications approach blends planning, execution, predictive insights, and data-driven analytics to deliver long-term value.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-4">What we're great at</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    Corporate positioning & brand
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    Executive positioning
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    Business marketing
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    Corporate reputation
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-100 overflow-hidden rounded-xl">
              <Image
                src="/home1.avif"
                width={700}
                height={500}
                alt='creative'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transactions Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gray-100 overflow-hidden rounded-xl">
                <Image
                  src="/marketing.jpeg"
                  width={700}
                  height={500}
                  alt='creative'
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Transactions and Transformation</h2>
              <p className="text-lg mb-6 leading-relaxed">
                In today's evolving workplace, culture plays a critical role in shaping business outcomes. We advise companies through high-stakes transactions, mergers, and acquisitions, while offering robust financial communications and investor relations support.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                We help organizations unlock growth and enhance performance by making business more human—especially during periods of transformation and change. Our strategic communications support is designed to help companies balance short-term results with long-term reputation.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-4">What we're great at</h3>
                <ul className="grid grid-cols-1 gap-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Financial Communications
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Business Transformation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Section */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-900">Crisis and Issues</h2>
              <p className="text-lg mb-6 leading-relaxed">
                We help leaders effectively navigate crises and complex challenges by combining strategic communications expertise with real-time intelligence and AI-driven tools.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                We specialize in guiding organizations through geopolitical shifts, crises, and policy changes across global markets. Leveraging AI-powered data monitoring, real-time scenario planning, and deep regional expertise, we help brands stay ahead of rapidly evolving challenges.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-4">What we're great at</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    Crisis analytics & issues forecasting
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    Crisis simulation drills
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    Labor relations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    Misinformation defense
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    Social issues navigation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    Cyber/data security
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-100 overflow-hidden rounded-xl">
              <Image
                src="/crises.jpeg"
                width={700}
                height={500}
                alt='creative'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Public Affairs Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gray-100 overflow-hidden rounded-xl">
                <Image
                  src="/business.jpg"
                  width={700}
                  height={500}
                  alt='creative'
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Public Affairs and Impact</h2>
              <p className="text-lg mb-6 leading-relaxed">
                We help businesses lead with confidence in a polarized and fast-evolving world by blending public policy expertise, cultural intelligence, and data-driven communication strategies.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                In today's increasingly complex global policy environment, businesses face growing challenges in making informed, confident decisions. We help leadership teams navigate the intersection of geopolitics, regulation, culture, and corporate reputation.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-4">What we're great at</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Sustainability and ESG consulting
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Executive leadership
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Public affairs
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Crisis & reputation defense
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurExpertise;