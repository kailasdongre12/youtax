"use client";

import Image from "next/image";

const awards = [
  { src: "/assets/about/awards.png", width: 300, height: 200 },
  { src: "/assets/about/awards.png", width: 200, height: 300 },
  { src: "/assets/about/awards.png", width: 250, height: 250 },
  { src: "/assets/about/awards.png", width: 180, height: 220 },
  { src: "/assets/about/awards.png", width: 300, height: 180 },
  { src: "/assets/about/awards.png", width: 220, height: 220 },
  // Add more images as needed
];

export default function Awards() {
  return (
    <div className="w-full py-12 bg-white overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 secondaryText">Awards & Recognition</h2>

      <div className="flex flex-wrap justify-center gap-4 px-4 max-w-screen-xl mx-auto">
        {awards.map((award, index) => (
          <div
            key={index}
            style={{ width: `${award.width}px`, height: `${award.height}px` }}
            className="relative shadow-lg rounded-lg overflow-hidden"
          >
            <Image
              src={award.src}
              alt={`Award ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
