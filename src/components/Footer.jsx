"use client";
import Image from "next/image";
import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="secondaryBg text-white pt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1: About */}
        <div>
          <Image
            src="/assets/logo/footerLogo.png"
            width={150}
            height={90}
            alt="youtax"
            className="mb-4"
          />

          <p className="text-sm text-gray-200">
            We are a web development agency specializing in React, Next.js,
            WordPress, and eCommerce solutions.
          </p>
        </div>
        {/* Column 2: Services */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">About Us </a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Other Links</h4>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Case Studies</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          {" "}
          <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>{" "}
          <ul className="space-y-2 text-gray-200 text-sm mb-4">
            {" "}
            <li>Email: info@example.com</li> 
            <li>Phone: +91 98765 43210</li>{" "}
            <li>Address: Pune, India</li>{" "}
          </ul>{" "}
          <div className="flex space-x-4">
            {" "}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 primaryBg p-1 text-black rounded-full transition"
            >
              {" "}
              <Facebook size={20} />{" "}
            </a>{" "}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 primaryBg p-1 text-black rounded-full transition"
            >
              {" "}
              <Twitter size={20} />{" "}
            </a>{" "}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 primaryBg p-1 text-black rounded-full transition"
            >
              {" "}
              <Linkedin size={20} />{" "}
            </a>{" "}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 primaryBg p-1 text-black rounded-full transition"
            >
              {" "}
              <Instagram size={20} />{" "}
            </a>{" "}
          </div>{" "}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black mt-8 py-2 text-center text-gray-200 text-sm">
        © {new Date().getFullYear()} Youtax India. All rights reserved. Designed & Developed by <a href="https://vm3techsolution.com/" className="primaryText">VM3 Tech Solutions LLP</a>
      </div>
    </footer>
  );
}
