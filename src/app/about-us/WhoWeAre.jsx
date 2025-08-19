"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  const features = [
    {
      id: "01",
      title: "Consistency",
      description:
        "This handy tool helps you create dummy text for all your layout needs. We are gradually adding new",
    },
    {
      id: "02",
      title: "Strategy",
      description:
        "This handy tool helps you create dummy text for all your layout needs. We are gradually adding new",
    },
    {
      id: "03",
      title: "Investment",
      description:
        "This handy tool helps you create dummy text for all your layout needs. We are gradually adding new",
    },
  ];

  return (
    <>
      <div className="py-12 text-center">
        <p className="text-md primaryText uppercase font-semibold">Who We Are</p>
        <h2 className="text-4xl font-semibold secondaryText leading-tight">
          Grow Your Business with us!
        </h2>
        <p className="w-320 mt-6 mx-auto">
          Welcome to YOUTAX INDIA CONSULTING PRIVATE LIMITED, your number one source...
        </p>
      </div>

      <div className="px-6 md:px-36">
        <h4 className="text-2xl secondaryText font-semibold text-center mb-8">
          What Sets Us Apart
        </h4>
        <div className="flex flex-col text-center md:flex-row gap-12 justify-center">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex-1 space-y-4 bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <h2 className="text-5xl font-bold primaryText">{feature.id}</h2>
              <h5 className="text-xl font-semibold mb-2 secondaryText">
                {feature.title}
              </h5>
              <hr className="mt-4 mb-4 border-gray-300" />
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full mt-12 mb-12 h-[550px] relative overflow-hidden">
        <Image
          src="/assets/about/aboutUs.png"
          alt="About Us Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </>
  );
}
