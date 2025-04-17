import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Young Thames</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto italic">
            &quot;The best marketing doesn&apos;t feel like marketing.&quot; – Tom Fishburne
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Young Thames was born out of a vision: to redefine the way businesses communicate with their audiences. Our journey began with a small team of passionate marketers who believed in the power of storytelling and the impact of meaningful connections.
              </p>
              <p className="text-lg text-gray-600">
                Inspired by the vibrant flow of the River Thames—symbolizing constant movement and adaptability—we set out to create an agency that embodies these qualities. From our first campaign to our most recent success story, we have grown into a trusted partner for businesses across industries.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl h-full flex items-center justify-center">
              <span className="text-gray-400">Team photo or office image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Young Thames, our mission is simple yet profound:
              </p>
              <ul className="space-y-3 text-lg text-gray-600">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>To empower brands to communicate authentically</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>To craft strategies that resonate deeply with target audiences</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>To deliver measurable results that drive growth and foster long-term success</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Values</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Creativity", desc: "Fresh ideas and innovative solutions" },
                  { name: "Integrity", desc: "Transparency and honesty in everything" },
                  { name: "Collaboration", desc: "Valuing client insights as much as our expertise" },
                  { name: "Excellence", desc: "Striving for perfection in every detail" },
                  { name: "Adaptability", desc: "Embracing change and evolving constantly" }
                ].map((value, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-blue-600">{value.name}</h3>
                    <p className="text-gray-600 text-sm">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Marketing",
                items: [
                  "Strategic planning and execution",
                  "Digital marketing campaigns (SEO, PPC, social media)",
                  "Content creation and storytelling"
                ]
              },
              {
                title: "Communication",
                items: [
                  "Brand messaging development",
                  "Internal communication strategies",
                  "Crisis communication management"
                ]
              },
              {
                title: "Public Relations",
                items: [
                  "Media relations and press coverage",
                  "Event planning and management",
                  "Influencer partnerships"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "A Personalized Approach: Customized strategies aligned with your goals",
              "Proven Expertise: Years of experience across diverse industries",
              "Results-Oriented: Focus on tangible outcomes and ROI",
              "Passionate Team: Creative thinkers and problem solvers"
            ].map((item, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-xl">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, Young Thames has worked with a variety of clients—from startups to established corporations—and achieved remarkable milestones:
              </p>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Successfully launched over 500 marketing campaigns",
                  "Increased client engagement rates by an average of 75%",
                  "Built lasting relationships with top-tier media outlets",
                  "Received industry recognition for innovative PR strategies"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl flex items-center justify-center">
              <span className="text-gray-400">Awards or recognition images</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Vision for the Future</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            To become a global leader in marketing and communication while staying true to our roots—helping businesses navigate their unique journeys with confidence and creativity through cutting-edge technology and immersive storytelling.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Young Thames transformed our brand presence online! Their innovative strategies helped us connect with our audience like never before.",
                author: "Client A"
              },
              {
                quote: "The team at Young Thames truly understands the art of storytelling. They've helped us build lasting relationships with customers.",
                author: "Client B"
              },
              {
                quote: "Their PR expertise is unmatched! Thanks to Young Thames, our brand has been featured in leading publications.",
                author: "Client C"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-700 italic mb-4">&quot;{item.quote}&quot;</p>
                <p className="text-gray-600 font-medium">— {item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let&apos;s Collaborate!</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            At Young Thames, we don&apos;t just work for you—we work with you. Together, we can create campaigns that inspire action, drive growth, and make an impact.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;