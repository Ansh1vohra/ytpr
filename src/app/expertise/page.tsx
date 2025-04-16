"use client";

import { FaChess, FaPalette, FaFire, FaChartLine, FaBullhorn, FaLightbulb } from "react-icons/fa";

export default function ExpertisePage() {
  const services = [
    {
      title: "Strategy & Analytics",
      description: "We provide data-driven insights to shape effective strategies for your business and brand.",
      icon: <FaChess className="text-blue-600 text-3xl" />,
      bgColor: "bg-blue-50"
    },
    {
      title: "Creative, Design & Content",
      description: "Our team crafts compelling content and designs that resonate with your audience and elevate your brand.",
      icon: <FaPalette className="text-purple-600 text-3xl" />,
      bgColor: "bg-purple-50"
    },
    {
      title: "Crisis Management",
      description: "Expert guidance in navigating complex reputation challenges effectively.",
      icon: <FaFire className="text-red-600 text-3xl" />,
      bgColor: "bg-red-50"
    },
    {
      title: "Brand Strategy",
      description: "Transforming brands through strategic public relations and marketing.",
      icon: <FaChartLine className="text-emerald-600 text-3xl" />,
      bgColor: "bg-emerald-50"
    },
    {
      title: "Public Relations & Marketing",
      description: "We craft and execute strategic media plans that encompass earned media, public relations, influencer collaborations, digital marketing, social media, and performance-driven campaigns. By adapting to the evolving media landscape, we ensure our clients' narratives gain high-impact visibility and meaningful engagement.",
      icon: <FaBullhorn className="text-amber-600 text-3xl" />,
      bgColor: "bg-amber-50"
    },
    {
      title: "Innovation Consulting",
      description: "Helping brands stay ahead with cutting-edge communication approaches and emerging technologies.",
      icon: <FaLightbulb className="text-indigo-600 text-3xl" />,
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-purple-800 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Comprehensive communication solutions tailored to your brand's unique needs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`${service.bgColor} p-8 rounded-xl hover:shadow-lg transition-all duration-300 h-full`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white p-3 rounded-full">
                      {service.icon}
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">{service.title}</h2>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Approach</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Research & Insights</h3>
                <p className="text-gray-600">
                  Deep dive into your industry, audience, and competitive landscape
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Strategy Development</h3>
                <p className="text-gray-600">
                  Crafting tailored solutions based on data-driven analysis
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-emerald-600 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Execution & Optimization</h3>
                <p className="text-gray-600">
                  Implementing with precision and continuously refining for impact
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">See Our Work in Action</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Explore how we've helped clients achieve measurable results across industries
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              View Case Studies
            </button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Let's discuss how our expertise can drive your communication strategy forward
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Get in Touch
            </button>
          </div>
        </section>
      </main>

    </div>
  );
}