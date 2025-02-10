"use client";

import WaitlistModal from "../../public/images/home/waitlist-modal";
import BudgetSection from "./components/home/budget";
import FAQAccordion from "./components/home/faq";
import Footer from "./components/home/footer";
import GiftSection from "./components/home/gift";
import GuestSection from "./components/home/guest";
import HeroSection from "./components/home/hero";
import PersonalisedWebsitesSection from "./components/home/personalised";
import PlanAnEvent from "./components/home/plan-an-event";
import StatsSection from "./components/home/statistics";
import Steps from "./components/home/steps";
import TestimonialSection from "./components/home/testemonials";
import VendorSection from "./components/home/vendor";
import VendorMessagingSection from "./components/home/vendor-messaging";
import AISection from "./components/home/vendor_perk_ai";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <WaitlistModal isOpen={isModalOpen} onClose={handleCloseModal} />
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

      <WaitlistModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}
