"use client";

import { FaUsers, FaBrain, FaShieldAlt, FaClinicMedical, FaSeedling } from "react-icons/fa";

export default function SolutionsPage() {
  const solutions = [
    {
      id: "ytc",
      name: "Collective (YTC)",
      icon: <FaUsers className="text-blue-600 text-4xl" />,
      tagline: "Strategic communications and consulting network for the new era of engagement",
      description: "Our brand specialists work with clients from every sector to create initiatives that matter to the audiences who matter most—fostering brand growth, business impact, and a sustained reputation.",
      features: [
        "Creative (GTM or Product Launch)",
        "Marketing",
        "Communications",
        "Consulting expertise",
        "New era engagement strategies"
      ],
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: "ytcb",
      name: "Culture Building (YTCB)",
      icon: <FaSeedling className="text-emerald-600 text-4xl" />,
      tagline: "Seamless cross-team solutions for organizational culture",
      description: "YTCB is structured to work seamlessly across teams of advisories firms, manufacturing units, addressing every aspect of our clients' needs.",
      features: [
        "Culture marketing",
        "Public affairs",
        "Advertising",
        "Market research",
        "Executive counsel",
        "Innovation strategy"
      ],
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      id: "ytai",
      name: "Artificial Intelligence (YTAI)",
      icon: <FaBrain className="text-purple-600 text-4xl" />,
      tagline: "AI Accelerator for transformative business solutions",
      description: "We help clients across industries navigate and harness the opportunities of generative Artificial Intelligence with strategic, ethical, and empathetic insight.",
      features: [
        "Healthcare innovators",
        "Professional services firms",
        "Global consumer brands",
        "Nonprofits & social leaders",
        "Ethical AI implementation"
      ],
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      id: "ytdd",
      name: "Disruptions Decode (YTDD)",
      icon: <FaShieldAlt className="text-amber-600 text-4xl" />,
      tagline: "Navigating complexity in an uncertain world",
      description: "We help leaders decode disruptions, clarify complexities, and meet a higher standard of leadership, delivering value across all stakeholder groups.",
      features: [
        "Risk assessment",
        "Opportunity mapping",
        "Stakeholder alignment",
        "Crisis navigation",
        "Future-proofing strategies"
      ],
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    },
    {
      id: "yth",
      name: "Health Sector (YTH)",
      icon: <FaClinicMedical className="text-red-600 text-4xl" />,
      tagline: "Specialized communications for healthcare transformation",
      description: "Our global Health sector team unites diverse talent, empowering clients to shape perceptions, drive meaningful conversations, and influence behavior across the healthcare spectrum.",
      features: [
        "Healthcare communications",
        "Medical brand strategy",
        "Patient engagement",
        "Regulatory navigation",
        "Health policy influence"
      ],
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-purple-800 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Integrated Solutions</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Collective individual talent. Collective strength.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution) => (
                <div 
                  key={solution.id}
                  className={`${solution.bgColor} border ${solution.borderColor} p-8 rounded-xl hover:shadow-lg transition-all duration-300 h-full flex flex-col`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white p-3 rounded-full">
                      {solution.icon}
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">{solution.name}</h2>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{solution.tagline}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{solution.description}</p>
                  <div className="mt-auto">
                    <h4 className="font-medium text-gray-700 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-gray-500 mr-2">+</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unified Approach Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Unified Approach</h2>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                <div className="md:w-1/3 text-center">
                  <div className="bg-blue-100 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4">
                    <FaUsers className="text-blue-600 text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold">Collective Individual Talent</h3>
                </div>
                <div className="md:w-1/3 text-center text-4xl font-bold text-gray-400">
                  +
                </div>
                <div className="md:w-1/3 text-center">
                  <div className="bg-purple-100 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4">
                    <FaUsers className="text-purple-600 text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold">Collective Strength</h3>
                </div>
              </div>
              <p className="text-gray-600 text-center mt-8">
                Our solutions combine specialized individual expertise with the power of integrated teams to deliver comprehensive results that address all aspects of modern business challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Sector-Specific Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Discover how our tailored solutions have driven measurable impact across industries
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Explore Case Studies
            </button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Challenges Into Opportunities?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how our specialized solutions can address your unique needs
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Connect With Our Experts
            </button>
          </div>
        </section>
      </main>

    </div>
  );
}