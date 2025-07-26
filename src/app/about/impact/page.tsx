'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";

const advisoryData = {
  tagLine: "United in purpose",
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const impact = () => {
  const [isHovered, setIsHovered] = useState(false); // Fixed: Added setIsHovered to useState
  const isCursorActive = isHovered;
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <div className="bg-white animate-gradient-cycle min-h-screen overflow-hidden">
      {!isTouchDevice && <CustomCursor isHovered={isCursorActive} />}

      {/* Existing border + image + text block */}
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
            {advisoryData.tagLine}
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

      {/* New paragraph below with spacing */}
      <div className="w-full px-10 mt-20 mb-16 text-black text-4xl leading-relaxed">
        At <span className="font-bold">Young Thames Public Relations</span>, we believe that real impact comes from doing more than just business as usual. Every project we take on, every partnership we build, is guided by a simple but powerful idea: <span className="font-bold">How can we help make the world better?</span><br />
        We know that today’s brands have a unique opportunity—and responsibility—to spark change, inspire communities, and stand for something meaningful. That’s why <span className="font-bold">purpose isn’t just a buzzword for us—it’s the heart of everything we do.</span><br />
        Here’s how we bring our purpose to life every day:
      </div>

      {/* Section with Three Horizontal Image-Text Blocks */}
      <section className="w-full px-10 py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Block 1 */}
          <div className="flex flex-col backdrop-blur-sm bg-white/30 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow group">
            <Image
              src="/impact-1.jpeg"
              alt="Operationalizing inclusion"
              width={400}
              height={350}
              className="w-full h-[350px] object-cover rounded-t-xl transition-transform duration-500 ease-in-out group-hover:rotate-[-6deg]"
              style={{ transformOrigin: 'bottom right' }}
            />
            <div className="p-6 transition-transform duration-500 ease-in-out group-hover:translate-y-5">
              <h2 className="text-xl font-semibold uppercase text-black">
                Inclusion That Feels Like Home
              </h2>
              <p className="mt-2 text-gray-900 text-justify">
                Innovation and creativity flourish when everyone’s voice is truly heard and valued. We’re passionate about creating an environment where diversity is celebrated, perspectives are welcomed, and everyone feels they belong. Whether it’s within our team or through the stories we help share, we’re committed to lifting up real voices from every walk of life.
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col backdrop-blur-sm bg-white/30 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow group">
            <Image
              src="/impact-2.jpeg"
              alt="Sense of belonging"
              width={400}
              height={350}
              className="w-full h-[350px] object-cover rounded-t-xl transition-transform duration-500 ease-in-out group-hover:rotate-[-6deg]"
              style={{ transformOrigin: 'bottom right' }}
            />
            <div className="p-6 transition-transform duration-500 ease-in-out group-hover:translate-y-5">
              <h2 className="text-xl font-semibold uppercase text-black">
                Sustainability with Real Action
              </h2>
              <p className="mt-2 text-gray-900 text-justify">
                There’s no time to waste when it comes to our planet. We’re proud to partner with clients who aren’t just talking about sustainability—they’re living it. From eco-friendly campaigns to supporting long-term commitments to the environment, we help brands turn promises into meaningful change.
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col backdrop-blur-sm bg-white/30 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow group">
            <Image
              src="/impact-4.jpeg"
              alt="Embedding inclusive thinking"
              width={400}
              height={350}
              className="w-full h-[350px] object-cover rounded-t-xl transition-transform duration-500 ease-in-out group-hover:rotate-[-6deg]"
              style={{ transformOrigin: 'bottom right' }}
            />
            <div className="p-6 transition-transform duration-500 ease-in-out group-hover:translate-y-5">
              <h2 className="text-xl font-semibold uppercase text-black">
                Prioritizing Mental Health
              </h2>
              <p className="mt-2 text-gray-900 text-justify">
                We believe that creativity thrives when people feel supported and cared for. Mental health is a priority here—not just a box to check. We nurture a culture where it’s safe to speak openly, take care of yourself, and find balance. Our partnerships and programs reflect that commitment, helping both our team and our clients to stay well and resilient.
              </p>
            </div>
          </div>

          {/* Block 4 */}
          <div className="flex flex-col backdrop-blur-sm bg-white/30 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow group">
            <Image
              src="/impact-3.jpeg"
              alt="Sense of belonging"
              width={400}
              height={350}
              className="w-full h-[350px] object-cover rounded-t-xl transition-transform duration-500 ease-in-out group-hover:rotate-[-6deg]"
              style={{ transformOrigin: 'bottom right' }}
            />
            <div className="p-6 transition-transform duration-500 ease-in-out group-hover:translate-y-5">
              <h2 className="text-xl font-semibold uppercase text-black">
                Giving Back Because It Matters
              </h2>
              <p className="mt-2 text-gray-900 text-justify">
                Making an impact means giving back. That’s why we dedicate time and resources to pro bono work with organizations that are making a difference but need a louder voice. Whether it’s a nonprofit, a community cause, or a social initiative, we’re here to help tell their stories with passion and purpose.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-b-2 border-black" style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}></div>

        {/* Contact Form Section */}
        <section className="w-full px-10 py-20">
          <div className="container mx-auto flex flex-col md:flex-row gap-8">
            {/* Left Side: Heading and Text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold text-black mb-4">Let’s Make a Difference Together</h1>
              <p className="text-lg text-gray-700 mb-2">
                Got a project or idea that’s close to your heart? We’d love to hear from you.{" "}
                <a href="mailto:example@email.com" className="underline text-blue-600 hover:text-blue-800">
                  email us
                </a>{" "}
                to get started.
              </p>
              <p className="text-sm text-gray-500">*Fields are required.</p>
            </div>

            {/* Right Side: Form */}
            <div className="md:w-1/2">
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="First name*"
                  className="border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Last name*"
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
                  defaultValue=""
                  className="border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="" disabled>
                    Subject matter*
                  </option>
                  <option value="general">General Inquiry</option>
                  <option value="New Business">New Business</option>
                  <option value="Media and Marketing">Media and Marketing</option>
                  <option value="Crisis Management">Crisis Management</option>
                </select>
                <textarea
                  placeholder="What would you like help with?*"
                  className="border border-blue-500 rounded-lg px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
                <button className="self-end bg-transparent border border-gray-300 rounded-full px-6 py-2 flex items-center gap-2 hover:bg-gray-100/10 transition">
                  Send{" "}
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default impact;