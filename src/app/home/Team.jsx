'use client';

import { Linkedin } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Nandkishor Devadnye",
    position: "CEO & Founder",
    image: "/assets/home/nandkishor.png",
    linkedin: "https://linkedin.com/in/alicejohnson",
  },
  {
    name: "Sonali Devadnye",
    position: "Office Manager",
    image: "/assets/home/sonali.png",
    linkedin: "https://linkedin.com/in/bobsmith",
  },
];

const Team = () => {
  return (
    <section className="py-12">
      <motion.div
        className="max-w-2xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-md primaryText uppercase tracking-wider font-semibold">
          Meet Our Leadership Team
        </p>
        <h2 className="text-4xl font-semibold secondaryText leading-tight">
          Meet The Finance Experts
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mt-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="shadow-lg rounded-2xl w-full sm:w-2/3 flex flex-col pb-8 items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={320}
                height={120}
                className="object-cover mb-4"
              />
              <h3 className="text-xl font-semibold secondaryText">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.position}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-white primaryBg p-2 rounded-full hover:text-blue-800"
              >
                <Linkedin size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Team;
