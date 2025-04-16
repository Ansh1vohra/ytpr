"use client";

import { FaUsers, FaHandshake, FaChartLine, FaLightbulb } from "react-icons/fa";
import Image from "next/image";

export default function CareersPage() {
  const benefits = [
    {
      title: "Collaborative Culture",
      description: "Work with industry experts in a supportive team environment",
      icon: <FaUsers className="text-blue-600 text-2xl" />
    },
    {
      title: "Career Growth",
      description: "Professional development opportunities and mentorship programs",
      icon: <FaChartLine className="text-purple-600 text-2xl" />
    },
    {
      title: "Innovative Projects",
      description: "Work on cutting-edge PR campaigns for diverse clients",
      icon: <FaLightbulb className="text-emerald-600 text-2xl" />
    },
    {
      title: "Competitive Benefits",
      description: "Comprehensive health coverage and wellness programs",
      icon: <FaHandshake className="text-amber-600 text-2xl" />
    }
  ];

  const openPositions = [
    {
      title: "PR Account Executive",
      department: "Public Relations",
      location: "Noida",
      type: "Full-time"
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Content Strategist",
      department: "Creative",
      location: "Noida",
      type: "Full-time"
    },
    {
      title: "Crisis Communications Manager",
      department: "Strategic Communications",
      location: "Noida",
      type: "Full-time"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-purple-800 text-white py-20 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold">Join Our Team</h1>
                <p className="text-xl">
                  Collaborate with experts to drive change in public relations and make a meaningful impact.
                </p>
                <a 
                  href="mailto:Hr@ytpr.in" 
                  className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
                >
                  Hr@ytpr.in
                </a>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-80 md:h-96 w-full bg-gray-200 rounded-xl overflow-hidden">
                  <Image
                    src="/careers-hero.jpg"
                    alt="We Are Social building sign"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Careers */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Build Your Career at Young Thames</h2>
            <p className="text-xl text-gray-600 mb-12">
              Explore exciting career opportunities where creativity meets public relations and strategic expertise.
            </p>
            
            <div className="relative h-96 w-full bg-gray-100 rounded-xl overflow-hidden mb-12">
              <Image
                src="/careers-interview.jpg"
                alt="Interview process at Young Thames"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Join Us?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-50 p-4 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Current Openings</h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                          {position.department}
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                          {position.location}
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <a 
                      href={`mailto:Hr@ytpr.in?subject=Application for ${position.title} position`}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Don't see your perfect role? We're always looking for talented individuals.
              </p>
              <a 
                href="mailto:Hr@ytpr.in?subject=General Application" 
                className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
              >
                Submit General Application
              </a>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
            <p className="text-xl mb-12">
              At Young Thames, we foster an environment of collaboration, innovation, and continuous learning. 
              Our team is our greatest asset, and we're committed to creating opportunities for everyone to thrive.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Diversity</h3>
                <p>We celebrate different perspectives and backgrounds</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p>We encourage creative thinking and new approaches</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Impact</h3>
                <p>We measure success by the change we create</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey With Us?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Send us your resume and let's explore how you can contribute to our team.
            </p>
            <a 
              href="mailto:Hr@ytpr.in" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Contact HR Team
            </a>
          </div>
        </section>
      </main>

    </div>
  );
}