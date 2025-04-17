"use client";

import { FaChess, FaPalette, FaFire, FaChartLine, FaBullhorn, FaLightbulb, FaSearch, FaChartBar, FaRocket, FaIndustry, FaMoneyBillWave, FaHeartbeat, FaGraduationCap, FaHandsHelping } from "react-icons/fa";

export default function ExpertisePage() {
  const coreExpertise = [
    {
      title: "Marketing Excellence",
      icon: <FaChartLine className="text-blue-600 text-3xl" />,
      items: [
        "Strategic Planning aligned with business objectives",
        "Digital Marketing (SEO, PPC, social media)",
        "Content Marketing & Storytelling",
        "Brand Development & Identity"
      ],
      bgColor: "bg-blue-50"
    },
    {
      title: "Communication Expertise",
      icon: <FaBullhorn className="text-purple-600 text-3xl" />,
      items: [
        "Messaging Strategy & Brand Voice",
        "Internal Communication Solutions",
        "Crisis Communication Planning",
        "Stakeholder Engagement"
      ],
      bgColor: "bg-purple-50"
    },
    {
      title: "Public Relations Mastery",
      icon: <FaChess className="text-emerald-600 text-3xl" />,
      items: [
        "Media Relations & Press Coverage",
        "Event Management & Launches",
        "Influencer Partnerships",
        "Reputation Management"
      ],
      bgColor: "bg-emerald-50"
    }
  ];

  const industries = [
    { name: "Technology", icon: <FaLightbulb className="text-blue-600" /> },
    { name: "Finance", icon: <FaMoneyBillWave className="text-green-600" /> },
    { name: "Healthcare", icon: <FaHeartbeat className="text-red-600" /> },
    { name: "Education", icon: <FaGraduationCap className="text-indigo-600" /> },
    { name: "Nonprofits", icon: <FaHandsHelping className="text-amber-600" /> },
    { name: "Manufacturing", icon: <FaIndustry className="text-gray-600" /> }
  ];

  const caseStudies = [
    {
      title: "Tech Startup Brand Awareness",
      challenge: "Gaining visibility in crowded market",
      solution: "Digital marketing strategy with SEO, social ads, and influencers",
      result: "150% increase in website traffic, 60% customer growth in 6 months",
      bgColor: "bg-blue-100"
    },
    {
      title: "Healthcare Crisis Management",
      challenge: "Negative publicity during product recall",
      solution: "Crisis communication plan with transparent messaging",
      result: "Regained customer trust, minimized long-term damage",
      bgColor: "bg-purple-100"
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
              Unmatched capabilities across marketing, communication, and public relations to help your brand stand out
            </p>
          </div>
        </section>

        {/* Core Expertise */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Areas of Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {coreExpertise.map((area, index) => (
                <div key={index} className={`${area.bgColor} p-8 rounded-xl h-full`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white p-3 rounded-full">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{area.title}</h3>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gray-600">• {item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Industry-Specific Expertise</h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8">
              We have extensive experience working across diverse sectors:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-2xl mb-2 flex justify-center">
                    {industry.icon}
                  </div>
                  <h3 className="font-medium">{industry.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovative Solutions */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Innovative Solutions That Drive Results</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <FaSearch className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Data-Driven Strategies</h3>
                <p className="text-gray-600">Market trends and audience behavior analytics</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <FaPalette className="text-purple-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Creative Campaigns</h3>
                <p className="text-gray-600">Visually stunning, attention-grabbing designs</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <FaRocket className="text-emerald-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Tech Integration</h3>
                <p className="text-gray-600">AI insights and immersive storytelling</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { step: "Discovery", desc: "Research & consultation", icon: <FaSearch className="text-blue-600" /> },
                { step: "Strategy", desc: "Customized planning", icon: <FaChartBar className="text-purple-600" /> },
                { step: "Execution", desc: "Precision implementation", icon: <FaRocket className="text-emerald-600" /> },
                { step: "Measurement", desc: "KPI analysis & refinement", icon: <FaChartLine className="text-amber-600" /> }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{item.step}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {caseStudies.map((study, index) => (
                <div key={index} className={`${study.bgColor} p-6 rounded-xl`}>
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <div className="mb-3">
                    <h4 className="font-semibold">Challenge:</h4>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  <div className="mb-3">
                    <h4 className="font-semibold">Solution:</h4>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Result:</h4>
                    <p className="text-gray-700">{study.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-blue-200">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-12">Client Testimonials</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Young Thames helped us transform our digital presence! Their innovative strategies drove measurable results.",
                "Their PR expertise saved our brand during a challenging time.",
                "The team's creativity is unmatched—they truly understand how to make brands shine!"
              ].map((quote, index) => (
                <div key={index} className="bg-black/10 p-6 rounded-xl">
                  <p className="italic mb-2">&quot;{quote}&quot;</p>
                  <p className="text-sm">— Client {String.fromCharCode(88 + index)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Let's Elevate Your Brand Together!</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Whether you need marketing brilliance, communication expertise, or PR mastery, we have the skills to help you succeed.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Get Your Consultation
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}