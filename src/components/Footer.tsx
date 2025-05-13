"use client";

import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 rounded-t-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Connect and Collaborate</h3>
            <p className="text-gray-300">
              Empowering brands through strategic public relations solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaEnvelope className="mt-1 text-emerald-400" />
                <a href="mailto:cmo@ytpr.in" className="hover:text-emerald-400 transition-colors">
                  cmo@ytpr.in
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <FaPhone className="mt-1 text-emerald-400" />
                <a href="tel:+919999944807" className="hover:text-emerald-400 transition-colors">
                  +91 99999 44807
                </a>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Our Location</h3>
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="mt-1 text-emerald-400" />
              <address className="not-italic">
                C-84, Sector 2<br />
                Noida, Uttar Pradesh<br />
                India
              </address>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 YT PR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}