"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const faqData = [
  {
    question: "What services do you provide?",
    answer:
      "We offer a wide range of web development services including React, Next.js, WordPress, and WooCommerce.",
  },
  {
    question: "How can I contact your team?",
    answer:
      "You can reach out via our contact form or directly email us at support@example.com.",
  },
  {
    question: "Do you offer custom website designs?",
    answer:
      "Yes, we specialize in creating custom web solutions tailored to your brand and goals.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-4 gap-8">
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Image
          src="/assets/home/faq.png"
          alt="FAQ Illustration"
          width={400} 
          height={400} 
          className="rounded-2xl shadow-lg w-full max-w-md h-auto object-contain" 
        />
      </div>

      {/* Right side - FAQ content */}
      <div className="w-full md:w-1/2">
        <p className="text-md primaryText uppercase tracking-wider font-semibold">
          Frequently Asked Questions
        </p>
        <h2 className="text-4xl font-semibold secondaryText leading-tight">
          Any Question? Look Here:
        </h2>

        <div className="space-y-4 mt-6">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-[#FFBF00] overflow-hidden ">
              <button
                className="w-full flex justify-between items-center p-4 text-left text-lg font-medium bg-white hover:bg-gray-50 transition-all"
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 primaryBg rounded-full transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out px-4 overflow-hidden ${
                  openIndex === index ? "max-h-40 py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
