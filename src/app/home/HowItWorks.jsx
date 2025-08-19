"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react"; // Lucide or use your own SVG

const steps = [
  { id: "01", title: "Consult" },
  { id: "02", title: "Document Collection" },
  { id: "03", title: "Filing" },
  { id: "04", title: "Delivery" },
];

const boxVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.05,
    borderColor: "#FACC15",
    boxShadow: "0 0 18px #FACC15",
    transition: { duration: 0.3 },
  },
};

const arrowVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.25 + 0.2,
      duration: 0.5,
    },
  }),
};

const HowItWorks = () => {
  return (
    <section className=" py-20 w-full">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-xl primaryText uppercase tracking-wider font-semibold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
           How It Works
               </motion.h2>

        <div className="flex items-center justify-center flex-wrap gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step Box */}
              <motion.div
                className="w-46 h-36 border-2 border-gray-300 bg-white text-yellow-600 font-bold shadow-md flex flex-col items-center justify-center text-center rounded-xl transition-all hover:shadow-yellow-400/50"
                custom={index}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.5 }}
                variants={boxVariants}
              >
                <span className="text-5xl primaryText opacity-40 px-4">{step.id}</span>
  <hr className="w-20 border-gray-300 my-4" />
  <span className="text-md font-semibold secondaryText">{step.title}</span>
                
              </motion.div>

              {/* Arrow - skip after last step */}
              {index < steps.length - 1 && (
                <motion.div
                  className="flex items-center justify-center"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={arrowVariants}
                  viewport={{ once: true }}
                >
                  <ArrowRight className="w-8 h-8 text-yellow-500 animate-pulse" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
