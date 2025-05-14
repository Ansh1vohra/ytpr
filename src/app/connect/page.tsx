"use client";

import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useForm } from "react-hook-form";

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
};

export default function ConnectPage() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data); // Replace with actual form submission logic
        alert("Thank you for your submission! We'll contact you soon.");
        reset();
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20 px-4">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Request for Proposal</h1>
                        <p className="text-xl max-w-2xl mx-auto text-blue-100">
                            Connect with us to discuss innovative public relations solutions for your business challenges and opportunities.
                        </p>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="py-16 px-4 bg-slate-100">
                    <div className="container mx-auto max-w-4xl">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* RFP Form */}
                            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                    <FaPaperPlane className="text-blue-500" />
                                    Submit Your Business RFP
                                </h2>

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                            Your First Name
                                        </label>
                                        <input
                                            id="firstName"
                                            type="text"
                                            placeholder="Enter your first name"
                                            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                                            {...register("firstName", { required: "First name is required" })}
                                        />
                                        {errors.firstName && (
                                            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                            Last Name*
                                        </label>
                                        <input
                                            id="lastName"
                                            type="text"
                                            placeholder="Last Name"
                                            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                                            {...register("lastName", { required: "Last name is required" })}
                                        />
                                        {errors.lastName && (
                                            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Your Email Address*
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address"
                                                }
                                            })}
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Your Message*
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            placeholder="Type your message here"
                                            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                                            spellCheck="false"
                                            {...register("message", { required: "Message is required" })}
                                        ></textarea>
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                                    >
                                        Submit RFP <FaPaperPlane />
                                    </button>
                                </form>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Connect With Us</h2>
                                    <p className="text-gray-600">
                                        Mail us: <a href="mailto:cmo@ytpr.in" className="text-blue-600 hover:underline">cmo@ytpr.in</a>
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <FaMapMarkerAlt className="text-blue-500 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-gray-700">Our Location</h3>
                                            <p className="text-gray-600">
                                                C-84, Sector 2<br />
                                                Noida, Uttar Pradesh<br />
                                                India
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <FaPhone className="text-blue-500 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-gray-700">Phone</h3>
                                            <a href="tel:+919999944807" className="text-gray-600 hover:underline">
                                                +91 99999 44807
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <FaEnvelope className="text-blue-500 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-gray-700">Email</h3>
                                            <a href="mailto:cmo@ytpr.in" className="text-gray-600 hover:underline">
                                                cmo@ytpr.in
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-700 mb-3">Follow Us</h3>
                                    <div className="flex gap-4">
                                        <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-blue-700 transition-colors">
                                            <FaLinkedin size={20} />
                                        </a>
                                        <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-blue-500 transition-colors">
                                            <FaTwitter size={20} />
                                        </a>
                                        <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-pink-600 transition-colors">
                                            <FaInstagram size={20} />
                                        </a>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                                    <h3 className="font-semibold text-gray-800 mb-2">Business Hours</h3>
                                    <p className="text-gray-600">
                                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                                        Saturday: 10:00 AM - 2:00 PM<br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your PR Strategy?</h2>
                        <p className="text-xl max-w-2xl mx-auto mb-8 text-blue-100">
                            Let&apos;s collaborate to create powerful communication strategies that drive results.
                        </p>
                        <a
                            href="mailto:cmo@ytpr.in"
                            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
                        >
                            Contact Our Team
                        </a>
                    </div>
                </section>
                <section>
                    
                </section>
            </main>
        </div>
    );
}