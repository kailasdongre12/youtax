"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    title: "Vision",
    image: "/assets/about/vision.png", // Replace with your actual image path
    description:
      "To Become India's Best association by providing the quality Business services in the aria of Taxes and finance matters.We aim to provide all the business related professional services under one roof.",
  },
  {
    title: "Mission",
    image: "/assets/about/mission.png",
    description:
      "Our mission is to provide fully complete services as per the standards based on industries with the team of professional.To provide reliable and affordable services to our client and enhancing the benefit and value for their financial and tax planning.",
  },
  {
    title: "Purpose",
    image: "/assets/about/purpose.png",
    description:
      "Our Purpose is to provide best service to our client's for their Business Growth as well as growth of Nation.",
  },
];

export default function Vmp() {
  return (
    <section className="bg-[#F8F8F8] py-14 px-6 md:px-16">
      <div className="grid md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative overflow-hidden px-4 flex flex-col justify-start text-center ${index === 1 ? "md:border-l md:border-r md:border-gray-300" : ""} `}
          >
            {/* Background Image */}
            <div className="relative z-10 px-4 rounded-xl">
            <Image
              src={card.image}
              alt={card.title}
              width={30}
              height={30}
              className="w-20 h-20 rounded-2xl mx-auto"
            />
            
              <h3 className="text-2xl font-semibold mb-4 mt-4 primaryText"><span className="secondaryText">Our</span> {card.title}</h3>
              <p className="text-md leading-relaxed">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
