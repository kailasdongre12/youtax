"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const solutions = [
    {
        id: "01",
        title: "INDIVIDUALS",
        description: "Smart Financial Planning and Compliance for Individuals",
        image: "/assets/solutions/individuals.png"
    },
    {
        id: "02",
        title: "START-UPS",
        description: "Accounting Foundations to Power Your Start-Up Journey",
        image: "/assets/solutions/startUps.png"
    },
    {
        id: "03",
        title: "CORPORATES",
        description: "Robust Audit & Financial Strategy for Growth-Driven Enterprises",
        image: "/assets/solutions/corporates.png"
    },
  ]

export default function ChooseSolution() {
  

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-md primaryText uppercase tracking-wider font-semibold">
          Choose Your Solution
        </p>
        <h2 className="text-4xl font-semibold secondaryText leading-tight">
          Explore Personalized Offerings Crafted To Meet Your Goals
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {solutions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>

              <div className="-mt-6 z-10">
                <div className="bg-white rounded-t-xl border border-gray-200 shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-700 max-h-24 overflow-hidden mb-3">
                    {item.description}
                  </p>

                  <Link href={`/services/${item.slug}`}>
                    <button className="primary-btn px-3 py-1 rounded-lg transition-all flex items-center gap-2 group">
                      Read More
                      <ChevronRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
