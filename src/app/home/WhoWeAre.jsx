"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    id: "01",
    title: "Automated Compliance Calendar",
    desc: "This handy tool helps you create dummy text for all your layout needs. We are gradually adding new",
  },
  {
    id: "02",
    title: "Proactive Alerts",
    desc: "This handy tool helps you create dummy text for all your layout needs. We are gradually adding new",
  },
  {
    id: "03",
    title: "Personalized Compliance Plans",
    desc: "This handy tool helps you create dummy text for all your layout needs. We are gradually adding new",
  },
  {
    id: "04",
    title: "Penalty Protection",
    desc: "This handy tool helps you create dummy text for all your layout needs. We are gradually adding new",
  },
];

export default function WhoWeAre() {
  return (
    <section className="w-full py-12 mt-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div className="space-y-6">
          <p className="text-md primaryText uppercase tracking-wider font-semibold">
            Who We Are
          </p>
          <h2 className="text-4xl font-semibold secondaryText leading-tight">
            Simplifying Your Finances, <br className="hidden md:block" />{" "}
            Empowering Your Growth!
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
            Welcome to YOUTAX INDIA CONSULTING PRIVATE LIMITED, your number one
            source for all types of taxation services. We're dedicated to giving
            you the very best of service for the growth of your business, with a
            professional team. The team at the firm has dedicated and
            experienced professionals and associates like Chartered Accountants,
            Company Secretary and Consultants to provide end to end services to
            your business.
          </p>
          <button className="primary-btn px-3 py-1 rounded-lg transition-all flex items-center gap-2 group">
            Know More
            <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
          </button>

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
