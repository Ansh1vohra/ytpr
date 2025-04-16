import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Transforming Brands Through Strategic Communication</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Data-driven insights powered by the industry's leading earned-first network
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-5xl font-bold text-blue-600 mb-2">150+</h3>
            <p className="text-gray-600 text-lg">Successful Campaigns</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-5xl font-bold text-blue-600 mb-2">120+</h3>
            <p className="text-gray-600 text-lg">Satisfied Clients</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-5xl font-bold text-blue-600 mb-2">100%</h3>
            <p className="text-gray-600 text-lg">Commitment to Excellence</p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Value Proposition</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                We integrate advanced analytics, stakeholder insights, and agile methodologies to deliver scalable, high-performance campaigns that maximize brand equity and business growth.
              </p>
              <p className="text-lg text-gray-600">
                Our omnichannel approach, cutting-edge methodologies, and commitment to measurable ROI ensure that we consistently deliver impact across diverse sectors.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Data-driven strategic communications</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Holistic consulting approach</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Creative and marketing solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Proven results across diverse sectors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Executive Leadership</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-12">
            Our diverse leadership team combines decades of industry expertise with a forward-thinking mindset, leveraging emerging technologies and best practices to guide clients to success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="h-40 w-40 mx-auto bg-gray-200 rounded-full mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Leadership Member {item}</h3>
                <p className="text-gray-500 mb-4">Position Title</p>
                <p className="text-gray-600">
                  Brief bio about the leadership member and their expertise.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footprint */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Global Footprint</h2>
              <p className="text-lg text-gray-600 mb-6">
                With offices and affiliates across major markets worldwide, we help organizations navigate cultural nuances, regulatory environments, and evolving consumer behaviors to drive international expansion.
              </p>
              <div className="flex flex-wrap gap-2">
                {['North America', 'Europe', 'Asia', 'Africa', 'South America', 'Australia'].map((region) => (
                  <span key={region} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">
                    {region}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 h-80 rounded-xl flex items-center justify-center">
              <span className="text-gray-400">World Map Visualization</span>
            </div>
          </div>
        </div>
      </section>

      {/* DEI Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Diversity, Equity & Inclusion</h2>
          <p className="text-xl max-w-4xl mx-auto mb-8">
            We recognize that a culture of true belonging fosters innovation and growth. By championing diverse perspectives and inclusive leadership, we create solutions that resonate with real-world audiences.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white bg-opacity-10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Diverse Teams</h3>
              <p>We cultivate teams with varied backgrounds and perspectives to drive innovation.</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Equitable Practices</h3>
              <p>Our policies ensure fair opportunities for all employees and partners.</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Inclusive Culture</h3>
              <p>We foster an environment where every voice is heard and valued.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Measurable Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Measurable Impact</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-12">
            Our success is measured by quantifiable business outcomes—from accelerating customer acquisition to enhancing stakeholder engagement—ensuring we deliver optimal value for every initiative.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Performance Metrics</h3>
              <div className="space-y-4">
                {[
                  { metric: 'Customer Acquisition Growth', value: '75%' },
                  { metric: 'Brand Awareness Increase', value: '120%' },
                  { metric: 'Engagement Rate Improvement', value: '90%' },
                  { metric: 'ROI on Campaigns', value: '3.5x' },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between border-b pb-2">
                    <span className="text-gray-700">{item.metric}</span>
                    <span className="font-bold text-blue-600">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Client Testimonials</h3>
              <div className="space-y-6">
                {[
                  {
                    quote: "YT teams transformed our brand perception in just six months with their strategic approach.",
                    author: "CEO, Tech Startup"
                  },
                  {
                    quote: "The measurable results from their campaigns exceeded all our expectations.",
                    author: "CMO, Fortune 500 Company"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 italic mb-2">"{item.quote}"</p>
                    <p className="text-gray-500 text-sm">— {item.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Insights CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">News & Insights</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Stay informed on our latest case studies, thought leadership pieces, and emerging trends. Discover how we leverage advanced analytics, AI-driven strategies, and collaborative methodologies to shape the future of strategic communications.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Explore Our Insights
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;