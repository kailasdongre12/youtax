"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certificates = [
  "/assets/logo/youtaxLogo.png",
  "/assets/logo/youtaxLogo.png",
  "/assets/logo/youtaxLogo.png",
  "/assets/logo/youtaxLogo.png",
  "/assets/logo/youtaxLogo.png",
  // Add more if needed
];

export default function Cert() {
  const loopCertificates = [...certificates, ...certificates]; // duplicate for seamless loop

  return (
    <div className="overflow-hidden py-10 bg-white text-center">
        <p className="text-xl primaryText uppercase tracking-wider font-semibold">
         CERTIFICATIONS & ASSOCIATIONS
        </p>
        
      <motion.div
        className="flex w-max mt-6 gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {loopCertificates.map((src, index) => (
          <div key={index} className="min-w-[200px] h-[120px] relative">
            <Image
              src={src}
              alt={`Certificate ${index + 1}`}
              layout="fill"
              objectFit="contain"
              className="rounded-md shadow-md"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
