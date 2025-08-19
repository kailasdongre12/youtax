"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    id: "01",
    title: "Relevance",
    desc: "Generic solutions can miss critical nuances. Customization ensures your unique needs are fully addressed.",
  },
  {
    id: "02",
    title: "Efficiency",
    desc: "You get only what you need—no bloated packages or unnecessary tools.",
  },
  {
    id: "03",
    title: "Confidence",
    desc: "With tailored support, you're always audit-ready, compliant, and well-informed—no matter your stage or size.",
  }
];

export default function HowWeOffer() {
  return (
    <section className="w-full py-12 mt-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Column */}
        <div className="space-y-6">
          <p className="text-md primaryText uppercase tracking-wider font-semibold">
            How We Offer
          </p>
          <h2 className="text-4xl font-semibold secondaryText leading-tight">
            Expert Accounting & Audit Solutions for Every Stage of Growth!
          </h2>
          <div className="mt-6 ">
            <Image
              src="/assets/home/whoWeAre.png"
              alt="Who We Are"
              width={429}
              height={525}
              className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-[90px] bg w-[500px] h-[480px] shadow-md object-cover"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <p className="text-gray-900 text-md leading-relaxed">
            Discover tailored financial solutions designed for Individuals, Start-ups, and Corporates. Whether you're filing taxes, launching a new venture, or scaling operations, our expert-led accounting and audit services ensure accuracy, compliance, and peace of mind. Explore personalized offerings crafted to meet your unique goals. Let’s build your financial success—together.
            <br/>
            Whatever your financial journey, our team of experienced accountants, auditors, and tax advisors is here to help you stay compliant, make informed decisions, and grow confidently.
          </p>
          
          <h3 className="text-lg font-bold secondaryText">Why Customised Solutions Matter</h3>

          {/* Feature Points */}
          <div className="mt-8 space-y-8">
            {features.map((item, index) => (
              <motion.div
                key={item.id}
                className={`flex items-center gap-4 ${ index !== features.length - 1 ? 'border-b border-gray-300 pb-6' : '' }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-5xl mr-2 font-bold secondaryText min-w-[50px]">
                  {item.id}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-md text-gray-800 mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
