"use client";

import {
  FAQAccordion,
  Footer,
  HeroSection,
  PlanAnEvent,
  TestimonialSection,
} from "@/app/components";

import { useUserType } from "../context/UserTypeContext";
import MarketPlaceSection from "../components/home/marketplace/marketplace";
import UserHomeSection from "../components/home/user-home-section";
import VendorHomeSection from "../components/home/vendor-home-section";

export default function Home() {
  const { userType } = useUserType();

  return (
    <div className="w-full">
      <HeroSection />

      <div className="flex flex-col gap-7 md:max-w-[1920px] w-full mx-auto">
        {userType === "user" ? (
          <UserHomeSection />
        ) : userType === "marketplace" ? (
          <MarketPlaceSection />
        ) : (
          <VendorHomeSection />
        )}
      </div>
      {userType !== "marketplace" && (
        <>
          <TestimonialSection />
          <FAQAccordion />
        </>
      )}
      <PlanAnEvent />
      <Footer />
    </div>
  );
}
