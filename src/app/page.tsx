"use client";

import FAQAccordion from "./components/home/faq";
import CopyRight from "./components/ui/copy-right";
import Footer from "./components/waitlist/footer";
import Hero from "./components/waitlist/hero";
import WhatToExpect from "./components/waitlist/what-to-expect";

export default function Home() {
  return (
    <div className="max-w-[1920px] flex flex-col items-center justify-center mx-auto">
      <Hero />
      <WhatToExpect />
      <FAQAccordion />
      <Footer />
    </div>
  );
}
