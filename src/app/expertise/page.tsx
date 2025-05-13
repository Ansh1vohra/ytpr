"use client";

import { FaChess, FaPalette, FaChartLine, FaBullhorn, FaLightbulb, FaSearch, FaChartBar, FaRocket, FaIndustry, FaMoneyBillWave, FaHeartbeat, FaGraduationCap, FaHandsHelping } from "react-icons/fa";

export default function ExpertisePage() {
  const coreExpertise = [
    {
      title: "Marketing Excellence",
      icon: <FaChartLine className="text-blue-400 text-3xl" />,
      items: [
        "Strategic Planning aligned with business objectives",
        "Digital Marketing (SEO, PPC, social media)",
        "Content Marketing & Storytelling",
        "Brand Development & Identity"
      ],
      bgColor: "bg-gray-800"
    },
    {
      title: "Communication Expertise",
      icon: <FaBullhorn className="text-purple-400 text-3xl" />,
      items: [
        "Messaging Strategy & Brand Voice",
        "Internal Communication Solutions",
        "Crisis Communication Planning",
        "Stakeholder Engagement"
      ],
      bgColor: "bg-gray-800"
    },
    {
      title: "Public Relations Mastery",
      icon: <FaChess className="text-emerald-400 text-3xl" />,
      items: [
        "Media Relations & Press Coverage",
        "Event Management & Launches",
        "Influencer Partnerships",
        "Reputation Management"
      ],
      bgColor: "bg-gray-800"
    }
  ];

  const industries = [
    { name: "Technology", icon: <FaLightbulb className="text-blue-400" /> },
    { name: "Finance", icon: <FaMoneyBillWave className="text-green-400" /> },
    { name: "Healthcare", icon: <FaHeartbeat className="text-red-400" /> },
    { name: "Education", icon: <FaGraduationCap className="text-indigo-400" /> },
    { name: "Nonprofits", icon: <FaHandsHelping className="text-amber-400" /> },
    { name: "Manufacturing", icon: <FaIndustry className="text-gray-400" /> }
  ];

  const caseStudies = [
    {
      title: "Tech Startup Brand Awareness",
      challenge: "Gaining visibility in crowded market",
      solution: "Digital marketing strategy with SEO, social ads, and influencers",
      result: "150% increase in website traffic, 60% customer growth in 6 months",
      bgColor: "bg-gray-800"
    },
    {
      title: "Healthcare Crisis Management",
      challenge: "Negative publicity during product recall",
      solution: "Crisis communication plan with transparent messaging",
      result: "Regained customer trust, minimized long-term damage",
      bgColor: "bg-gray-800"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise</h1>
            <p className="text-xl max-w-2xl mx-auto text-purple-200">
              Unmatched capabilities across marketing, communication, and public relations to help your brand stand out
            </p>
          </div>
        </section>

        {/* Core Expertise */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our Core Areas of Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {coreExpertise.map((area, index) => (
                <div key={index} className={`${area.bgColor} p-8 rounded-xl h-full border border-gray-700`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gray-700 p-3 rounded-full">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{area.title}</h3>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gray-300">• {item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Industry-Specific Expertise</h2>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-8">
              We have extensive experience working across diverse sectors:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gray-700 p-4 rounded-lg border border-gray-600 text-center">
                  <div className="text-2xl mb-2 flex justify-center">
                    {industry.icon}
                  </div>
                  <h3 className="font-medium text-white">{industry.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovative Solutions */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Innovative Solutions That Drive Results</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gray-800 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 border border-gray-700">
                  <FaSearch className="text-blue-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Data-Driven Strategies</h3>
                <p className="text-gray-400">Market trends and audience behavior analytics</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 border border-gray-700">
                  <FaPalette className="text-purple-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Creative Campaigns</h3>
                <p className="text-gray-400">Visually stunning, attention-grabbing designs</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 border border-gray-700">
                  <FaRocket className="text-emerald-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Tech Integration</h3>
                <p className="text-gray-400">AI insights and immersive storytelling</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { step: "Discovery", desc: "Research & consultation", icon: <FaSearch className="text-blue-400" /> },
                { step: "Strategy", desc: "Customized planning", icon: <FaChartBar className="text-purple-400" /> },
                { step: "Execution", desc: "Precision implementation", icon: <FaRocket className="text-emerald-400" /> },
                { step: "Measurement", desc: "KPI analysis & refinement", icon: <FaChartLine className="text-amber-400" /> }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-700 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4 border border-gray-600">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.step}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {caseStudies.map((study, index) => (
                <div key={index} className={`${study.bgColor} p-6 rounded-xl border border-gray-700`}>
                  <h3 className="text-xl font-bold mb-2 text-white">{study.title}</h3>
                  <div className="mb-3">
                    <h4 className="font-semibold text-gray-300">Challenge:</h4>
                    <p className="text-gray-400">{study.challenge}</p>
                  </div>
                  <div className="mb-3">
                    <h4 className="font-semibold text-gray-300">Solution:</h4>
                    <p className="text-gray-400">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-300">Result:</h4>
                    <p className="text-gray-400">{study.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-blue-900/50">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-12 text-white">Client Testimonials</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
              {
                quote: "Young Thames transformed our brand presence online! Their innovative strategies helped us connect with our audience like never before.",
                author: "Atharv"
              },
              {
                quote: "The team at Young Thames truly understands the art of storytelling. They've helped us build lasting relationships with customers.",
                author: "Anjali"
              },
              {
                quote: "Their PR expertise is unmatched! Thanks to Young Thames, our brand has been featured in leading publications.",
                author: "Jiya"
              }
            ].map((item, index) => (
              <div key={index} className="bg-black/20 p-6 rounded-xl border border-blue-800/50">
                <p className="text-gray-300 italic mb-4">&quot;{item.quote}&quot;</p>
                <p className="text-gray-400 font-medium">— {item.author}</p>
              </div>
            ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-800 to-purple-900 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Let&apos;s Elevate Your Brand Together!</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-blue-100">
              Whether you need marketing brilliance, communication expertise, or PR mastery, we have the skills to help you succeed.
            </p>
            <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Get Your Consultation
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}