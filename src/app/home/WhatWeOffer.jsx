"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function WhatWeOffer() {
  const [services, setServices] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const nextSlide = () => {
    const nextIndex =
      currentIndex + itemsPerPage >= services.length
        ? 0
        : currentIndex + itemsPerPage;
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex =
      currentIndex - itemsPerPage < 0
        ? Math.max(0, services.length - itemsPerPage)
        : currentIndex - itemsPerPage;
    setCurrentIndex(prevIndex);
  };

  const visibleServices = services.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="w-full py-16 ">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-md primaryText uppercase tracking-wider font-semibold">
            What We Offer
          </p>
          <h2 className="text-4xl font-semibold secondaryText leading-tight">
            Finance Services Designed to Meet Every Need!
          </h2>

        <div className="relative mt-12 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
            {visibleServices.map((item, index) => (
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

                <div className="-mt-6 z-10 ">
                  <div className="bg-white rounded-t-xl border border-gray-200 shadow-md p-6">
                    <h3 className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-700 max-h-24 overflow-hidden mb-3">
                      {item.description.content}
                    </p>

                    <Link href={`/services/${item.slug}`}><button className="primary-btn px-3 py-1 rounded-lg transition-all flex items-center gap-2 group">
                      Read More
                      <ChevronRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-30 pointer-events-none">
            <button
              onClick={prevSlide}
              className="absolute -left-6 md:-left-14 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition pointer-events-auto"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="absolute -right-6 md:-right-14 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition pointer-events-auto"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
