'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // optional icon library

const banners = [
  {
    id: 1,
    src: '/assets/homeBanner/image1.png',
    alt: 'Banner 1',
  },
  {
    id: 2,
    src: '/assets/homeBanner/image1.png',
    alt: 'Banner 2',
  },
  {
    id: 3,
    src: '/assets/homeBanner/image1.png',
    alt: 'Banner 3',
  },
];

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto change slides
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % banners.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="w-full h-[500px] relative overflow-hidden">
      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Animated Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={banners[activeIndex].id}
          initial={{ opacity: 0.6}}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.1 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <Image
            src={banners[activeIndex].src}
            alt={banners[activeIndex].alt}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
