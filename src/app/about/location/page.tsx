'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Locations = () => {
  const [isHovered] = useState(false);
  const isCursorActive = isHovered;
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <div className="bg-white animate-gradient-cycle min-h-screen overflow-hidden">
      {!isTouchDevice && <CustomCursor isHovered={isCursorActive} />}

      {/* Top Section: YT Design Image and Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="flex -mt-34"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="md:w-[80vw] border-b-[3px] flex flex-col items-start px-8 md:px-25 pt-[240px] pb-[100px]"
        >
          <button className="border-2 rounded-full p-4 m-2 mb-4 text-sm">About</button>
          <p className="text-black max-w-4xl font-semibold tracking-wide text-5xl md:text-6xl mb-2">
            YTPR Locations
          </p>
        </motion.div>
        <div className="flex items-end hidden md:flex">
          <Image
            src='/ytdesign4.png'
            alt="YT Design"
            width={400}
            height={400}
            className="max-w-[20vw] brightness-0"
          />
        </div>
      </motion.div>

      {/* Main Content Section */}
      <section className="w-full px-10 py-20">
        <div className="container mx-auto">
          {/* Tagline and Introduction */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Your Story, Our Mission – Wherever You Are
            </h2>
            <p className="text-lg text-gray-900 leading-relaxed">
              At <span className="font-bold">Young Thames Public Relations</span>, we believe powerful stories aren't just told — they're felt. Whether you are launching a healthtech app in Bengaluru or raising awareness for a cause in London, we help you connect with the right people, in the right place, at the right time.
              <br /><br />
              We're a growing team with global vision and local soul — proud to call India home, and excited to work with changemakers around the world.
            </p>
          </div>

          {/* Locations Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              From India to Everywhere: Where You'll Find Us
            </h2>
            <p className="text-lg text-gray-900 leading-relaxed mb-6">
              Our roots are in Delhi, but our reach knows no borders. We work with clients across cities, countries, and continents — thanks to trusted partners and an agile, always-on mindset.
              <br /><br />
              Here's where we show up (and show out):
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-900 leading-relaxed">
              <li className="mb-2">
                <span className="font-bold">Delhi</span> – Our HQ. This is where strategy, storytelling, and soul come together.
              </li>
              <li className="mb-2">
                <span className="font-bold">Mumbai</span> – The media capital where brand narratives become pop culture moments.
              </li>
              <li className="mb-2">
                <span className="font-bold">Bangalore</span> – Where we power bold conversations in tech, startups, and innovation.
              </li>
              <li className="mb-2">
                <span className="font-bold">Hyderabad</span> – Our pulse in the healthcare and pharma space.
              </li>
              <li className="mb-2">
                <span className="font-bold">Global Touchpoints</span> – From Singapore to Dubai, London to New York, we collaborate through partner networks to give your story the global spotlight it deserves.
              </li>
            </ul>
            <p className="text-lg text-gray-900 leading-relaxed mt-6">
              No matter where you are, we bring the same energy, empathy, and excellence.
            </p>
          </div>

          {/* What Makes Us Different Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              What Makes Us Different?
            </h2>
            <p className="text-lg text-gray-900 leading-relaxed">
              We're not your typical PR agency. We're listeners, learners, and launchers. We get to the why behind your brand, and bring it to life with campaigns that move people — not just metrics.
              <br /><br />
              Whether it's building your reputation, navigating a tricky moment, or helping your brand stand out in a noisy world — we're here to make it make sense, and make it matter.
            </p>
          </div>

          {/* Border Line */}
          <div className="mt-12 border-b-2 border-black" style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}></div>

          {/* Let's Start a Conversation Section */}
          <div className="flex flex-col md:flex-row gap-8 mt-20">
            {/* Left Side: Heading and Contact Info */}
            <div className="md:w-1/2">
              <h2 className="text-5xl font-bold text-black mb-4">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Ready to build your brand story with purpose and passion?
              </p>
              <p className="text-lg text-gray-900">
                <span className="font-bold">Office:</span> Noida, India<br />
                <span className="font-bold">Call us:</span> [Your Phone Number]<br />
                <span className="font-bold">Email:</span>{" "}
                <a href="mailto:example@email.com" className="underline text-blue-600 hover:text-blue-800">
                  [Your Email]
                </a><br />
                <span className="font-bold">Website:</span>{" "}
                <a href="https://yourwebsite.com" className="underline text-blue-600 hover:text-blue-800">
                  [Your Website]
                </a>
              </p>
              <p className="text-lg text-gray-900 mt-4">
                Let's go places — together.
              </p>
            </div>

            {/* Right Side: Form */}
            <div className="md:w-1/2">
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="First name*"
                  spellCheck='false'
                  className="border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Last name*"
                  spellCheck='false'
                  className="border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <select
                  className="border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Subject matter*
                  </option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Support</option>
                  <option value="sales">Sales</option>
                </select>
                <select
                  className="border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Region*
                  </option>
                  <option value="north-america">North America</option>
                  <option value="europe">Europe</option>
                  <option value="asia">Asia</option>
                </select>
                <textarea
                  placeholder="What would you like help with?*"
                  className="border border-blue-500 rounded-lg px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  spellCheck='false'
                  required
                ></textarea>
                <button className="self-end bg-transparent border border-gray-300 rounded-full px-6 py-2 flex items-center gap-2 hover:bg-gray-100/10 transition">
                  Send{" "}
                  <span className="text-xl" style={{ 
                    display: 'inline-block', 
                    width: '24px', 
                    height: '24px', 
                    background: 'transparent', 
                    border: '2px solid black', 
                    borderRadius: '50%', 
                    textAlign: 'center', 
                    lineHeight: '20px',
                    fontSize: '16px'
                  }}>
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;