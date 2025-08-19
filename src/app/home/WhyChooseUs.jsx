"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    id: "01",
    image: "/assets/home/whyChooseUs/expertise.png",
    title: "Proven Expertise",
  },
  {
    id: "02",
    image: "/assets/home/whyChooseUs/strategies.png",
    title: "Personalized Strategies",
  },
  {
    id: "03",
    image: "/assets/home/whyChooseUs/planning.png",
    title: "Proactive Planning",
  },
  {
    id: "04",
    image: "/assets/home/whyChooseUs/planning.png",
    title: "Technology + Human Touch",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-12 mt-20 ">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div className="">
          <p className="text-md primaryText uppercase tracking-wider font-semibold">
            Why Choose Us
          </p>
          <h2 className="text-4xl font-semibold secondaryText leading-tight">
            Tired Of Late Fees?
          </h2>

          <p className="text-gray-900 mt-6 text-md leading-relaxed">
            Late fees are frustrating, unnecessary, and often completely
            avoidable. Whether it’s a missed tax deadline, overdue GST filing,
            or forgotten ROC compliance, one thing’s for sure: they hurt your
            cash flow and peace of mind.
          </p>

          {/* Feature Points */}
          <div className="mt-2">
            {features.map((feature, index) => (
          <div
            key={feature.id || index}
            className={`flex flex-row items-center mb-4 px-4 bg-gray-100 rounded-l-4xl w-[80%] rounded-r-lg overflow-hidden`}
          >
            {/* Image Left */}
            <div className="flex items-center primaryBg justify-center md:h-auto p-2 rounded-4xl">
              <Image
                src={feature.image}
                alt={feature.title}
                width={30}
                height={30}
                className="object-contain"
              />
            </div>

            {/* Content Right */}
            <div className="p-4">
              <h3 className="text-md font-bold secondaryText mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          </div>
        ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 ">
          <div className="mt-8 ">
            <Image
              src="/assets/home/whyChooseUs/sectionImage.png"
              alt="Who We Are"
              width={350}
              height={525}
              className="rounded-xl bg w-[400px] h-[480px] shadow-md object-cover float-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
