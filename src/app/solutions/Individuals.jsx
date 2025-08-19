"use client";
import Image from "next/image";

const Individuals = () => {
  return (
    <>
      <section className="w-full py-12 text-center">
        <p className="text-md primaryText uppercase tracking-wider font-semibold">
          Individuals
        </p>
        <h2 className="text-4xl font-semibold secondaryText leading-tight">
          Smart Financial Planning & Hassle-Free Compliance for Individuals
        </h2>
        <p className="w-[70%] mx-auto mt-4">
          Whether you're a salaried professional, a freelancer, or a
          non-resident Indian, managing personal finances and tax compliance can
          feel overwhelming. At [Your Company Name], we offer personalized,
          transparent, and expert-driven services to help you take control of
          your financial journey — with confidence, accuracy, and peace of mind.
        </p>
        <Image
          src="/assets/home/whoWeAre.png"
          alt="individuals"
          width={1400}
          height={525}
          className="bg w-full h-[480px] shadow-md mt-8 object-cover"
        />
      </section>
    </>
  );
};

export default Individuals;
