import Image from "next/image";
import Banner from "./home/Banner";
import Counter from "./home/Counter";
import WhoWeAre from "./home/WhoWeAre";
import WhatWeOffer from "./home/WhatWeOffer";
import WhyChooseUs from "./home/WhyChooseUs";
import HowItWorks from "./home/HowItWorks";
import Team from "./home/Team";
import Testimonials from "./home/Testimonials";
import Blogs from "./home/Blogs";
import Faq from "./home/Faq";

export default function Home() {
  return (
    <>
      <Banner/>
      <Counter/>
      <WhoWeAre/>
      <WhatWeOffer/>
      <WhyChooseUs/>
      <HowItWorks/>
      <Team/>
      <Testimonials/>
      <Blogs/>
      <Faq/>
    </>
  );
}
