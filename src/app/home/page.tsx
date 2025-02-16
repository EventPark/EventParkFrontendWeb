"use client";

import BudgetSection from "@/app/components/home/budget";
import FAQAccordion from "@/app/components/home/faq";
import Footer from "@/app/components/home/footer";
import GiftSection from "@/app/components/home/gift";
import GuestSection from "@/app/components/home/guest";
import HeroSection from "@/app/components/home/hero";
import PersonalisedWebsitesSection from "@/app/components/home/personalised";
import PlanAnEvent from "@/app/components/home/plan-an-event";
import StatsSection from "@/app/components/home/statistics";
import Steps from "@/app/components/home/steps";
import TestimonialSection from "@/app/components/home/testemonials";
import VendorSection from "@/app/components/home/vendor";
import VendorMessagingSection from "@/app/components/home/vendor-messaging";
import AISection from "@/app/components/home/vendor_perk_ai";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="flex flex-col gap-7">
        <HeroSection openModal={() => setIsModalOpen(true)} />
        <VendorSection />
        <BudgetSection />
        <GuestSection />
        <AISection />
        <VendorMessagingSection />
        <PersonalisedWebsitesSection />
        <GiftSection />
        <StatsSection />
        <Steps />
      </div>
      <TestimonialSection />
      <FAQAccordion />
      <PlanAnEvent />
      <Footer />

    </>
  );
}
