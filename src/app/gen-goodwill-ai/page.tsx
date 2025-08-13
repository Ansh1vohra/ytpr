"use client";

import { useState } from "react";
import { PlusCircle } from "lucide-react";

export default function ReputationCapitalPage() {
 const [open, setOpen] = useState<number | null>(null);

  const links = [
    {
      title: "Press release",
      content: "Link to our latest press release. Click to view.",
      href: "/Newsroom", // Replace with actual link
    },
    {
      title: "More insights",
      content: "Explore additional research, reports, and expert viewpoints.",
      href: "/about/news-and-insights", // Replace with actual link
    },
  ];

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

const [openIndex, setOpenIndex] = useState<number | null>(null);

const faqs = [
  {
    question: "Proactive Crisis Mitigation: See Risks Before They Erupt",
    answer:
      "Identify and address emerging reputational threats before they escalate into full-blown crises. Reputation Capital's predictive AI gives you the foresight to protect your brand and bottom line.",
  },
  {
    question: "Optimize Strategic Investments: Maximize Your Reputation ROI",
    answer:
      "Allocate resources with confidence. Understand which reputation levers deliver the greatest impact on your business outcomes, ensuring every dollar drives measurable results.",
  },
  {
    question: "Amplify Advantage: Outmaneuver the Competition",
    answer:
      "Gain a decisive edge. Monitor competitor reputation, identify vulnerabilities and proactively shape your brand narrative to capture market share and build lasting loyalty.",
  },
];

const toggleIndex = (index: number) => {
  setOpenIndex(openIndex === index ? null : index);
};


  return (
    <div className="bg-black text-white font-sans">

      {/* 1. Heading */}
      <section className="px-4 py-12  bg-neutral-100 text-black">
        <h1 className="text-4xl font-bold">Introducing Reputation Capital</h1>
      </section>

      {/* 2. Brief Description */}
      <section className="px-4 py-6 space-y-4  bg-neutral-100 text-black">
        <p className="text-lg">
        We’ve always believed that reputation drives results – now, we can prove it. Burson's Reputation Capital is the first product to connect what builds reputation to what grows your business. Using cutting-edge technology, we’ve reinvented how to build and protect reputation to deliver smarter advice and bolder ideas. In today's fast-moving world, our global team of creative problem-solvers is helping brands reinvent how reputation is earned, turning reputation into a competitive advantage that directly impacts your bottom line.
        </p>
      </section>

       {/* 3. Full Video Section */}
      <section className="w-full h-[500px] bg-neutral-800 flex items-center justify-center mb-10">
        {/* Replace src with actual video path */}
        <video className="w-full h-full object-cover"  autoPlay loop muted playsInline>
          <source src="/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* 4. What is it? */}
      <section className="flex flex-col lg:flex-row items-center justify-between p-8">
        <div className="lg:w-2/3 space-y-4">
          <h2 className="text-yellow-400 text-3xl font-bold">What is it?</h2>
          <p>
          Reputation Capital is a technology platform and consulting framework that helps clients understand the relationship between proven drivers of reputation and business outcomes such as stock price, sales and purchase intent. Using advanced AI and vast data analysis, this predictive tool helps brands build and protect their reputation in real-time, creating marketing and communications strategies that deliver measurable business results and achieve the cultural influence to lead in today's media.
          </p>
        </div>
        <img
          src="/yellow-lines-1.png"
          alt="What is it visual"
          className="w-full lg:w-1/3 mt-6 lg:mt-0 rounded"
        />
      </section>

      {/* 5. Why is it different? */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between p-8">
        <img
          src="/yellow-lines-2.png"
          alt="Why different visual"
          className="w-full lg:w-1/3 rounded"
        />
        <div className="lg:w-2/3 space-y-4 pl-0 lg:pl-10">
          <h2 className="text-yellow-400 text-3xl font-bold">Why is it different?</h2>
          <p>
            Reputation Capital is the only dynamic and predictive platform that identifies the key factors influencing your reputation, shows you the direct link to business results and provides actionable insights to help you build a stronger, more valuable reputation.

Traditional reputation tracking is static and backward-looking – a survey or an index – and often one-dimensional. Burson’s Reputation Capital gives you a live, forward-looking view of multiple reputation drivers, so you can spot risks and opportunities in a fast-changing world.
          </p>
        </div>
      </section>

      {/* 6. How does it work? */}
      <section className="flex flex-col lg:flex-row items-center justify-between p-8">
        <div className="lg:w-2/3 space-y-4">
          <h2 className="text-yellow-400 text-3xl font-bold">How does it work?</h2>
          <p>
           Reputation Capital analyzes eight key levers – like governance and creativity – to predict outcomes such as stock price, sales and loyalty, giving you actionable insights to drive communications decisions to maximize your brand’s value. Using these drivers, you'll see your live reputation score, spot emerging risks and opportunities and understand the financial impact of your reputation. We help you focus on what delivers the biggest ROI, empowering our experts to create bold ideas and innovative solutions that move the needle.
          </p>
        </div>
        <img
          src="/yellow-lines-3.png"
          alt="How it works visual"
          className="w-full lg:w-1/3 mt-6 lg:mt-0 rounded"
        />
      </section>

       {/* 3. Full Video Section */}
      <section className="w-full h-[500px] bg-neutral-800 flex items-center justify-center mb-10">
        {/* Replace src with actual video path */}
        <video className="w-full h-full object-cover"  autoPlay loop muted playsInline>
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* 8. Interested Section */}
      <section className="p-10 px-6 bg-neutral-100 text-black">
  <h2 className="text-3xl font-bold">Interested in Reputation Capital?</h2>
  <p className="py-4 text-lg">
    In today's dynamic market, a strong reputation is your most valuable asset.
    Schedule a strategy session with our team to explore how Reputation Capital
    can help you forecast the impact of your actions and drive tangible business results.
  </p>
<a
  href="/connect"
  className="inline-block px-6 py-3 mt-2 text-black border border-black rounded hover:bg-yellow-800 transition"
>
  Schedule a Session
</a>
</section>

      {/* 9. C-Suite to Marketers Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between p-10 gap-10">
        <div className="lg:w-1/2 space-y-4">
          <h3 className="text-yellow-400 text-2xl font-semibold">
          Reputation is Currency for Every Leader,
From the C-Suite to Corporate Communicators to Brand Marketers
          </h3>
          <p>
"Our core belief at Burson is that reputation is the most valuable asset that any organization possesses. It’s complex and constantly evolving, influenced by a variety of factors. With Reputation Capital, Burson is turning reputation from an impression or a view or an image into a tangible asset for the business, for the boardroom, for investors."

Corey duBrowa
Global CEO, Burson
          </p>
        </div>
        <img
          src="/c-suite.png"
          alt="C-Suite"
          className="w-full max-w-md lg:w-auto rounded"
        />
      </section>
<hr className="border-t-2 border-yellow-400 my-6 mx-10" />

      {/* 10. Validated by Experts */}
      <section className="flex flex-col lg:flex-row items-center justify-between p-10 gap-10">
        <img
          src="/validated-experts.png"
          alt="Validated by Experts"
          className="w-full max-w-md lg:w-auto rounded"
        />
        <div className="lg:w-1/2 space-y-4">
          <h3 className="text-yellow-400 text-2xl font-semibold">Validated by Experts</h3>
          <p>
           "Burson’s Reputation Capital is an exceptionally advanced platform that takes the most comprehensive view of reputation – and provides the most actionable intelligence – of anything that’s currently on the market. The empirical evidence that Reputation Capital reveals about the attributes that comprise reputation is extraordinarily valuable information that can guide Burson’s counselors and the C-suite."

Dr. Felipe Thomaz
Associate Professor of Marketing, University of Oxford, and Co-Founder and Managing Director of Augmented Intelligence Labs
          </p>
        </div>
      </section>
<hr className="border-t-2 border-yellow-400 my-6 mx-10" />

 {/* 11. Capitalize on Your Capital */}
 <section className="p-10 px-6 bg-black text-white">
        <h2 className="text-yellow-400 text-4xl font-bold">Capitalize on your capital</h2>
        <p className="px-4 mt-4 text-lg">
          Partner with our creative communications experts to put Reputation Capital to work for your business.
        </p>

        <div className="mt-10 space-y-4">
          {faqs.map((item, index) => (
            <div key={index} >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center p-4 hover:bg-neutral-900 text-left"
              >
                <div className="bg-yellow-400 text-black rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  →
                </div>
                <h4 className="ml-4 text-lg font-semibold">{item.question}</h4>
              </button>
              {openIndex === index && (
                <div className="px-12 pb-4 text-neutral-300 text-sm">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>



      {/* 12. Related Links Section */}
  <section className="p-10 border-t border-white bg-black text-white">
      <h3 className="text-2xl font-semibold mb-6">Related Links</h3>

      <div className="divide-y divide-neutral-500">
        {links.map((link, index) => (
          <div key={index}>
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
            >
              <span className="text-lg">{link.title}</span>
              <PlusCircle className="w-5 h-5 text-white" />
            </button>
            {open === index && (
              <div className="pb-4 text-neutral-300 text-sm">
                <a href={link.href} className="hover:underline text-blue-400">
                  {link.content}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

      {/* 13. Quotation Section */}
      <section className="p-10 text-center italic text-lg text-gray-300 border-t border-gray-600">
        <p>“In the beginning, top management used to say to us, ‘Here’s the message, deliver it.’</p>
        <p>Then it became, ‘What should we say?’</p>
        <p>Now, in smart organizations, it’s ‘What should we do?’”</p>
        <p className="mt-4 font-semibold">– Harold Burson</p>
      </section>

    </div>
  );
}
