"use client";

import {
  BudgetSection,
  FAQAccordion,
  Footer,
  GiftSection,
  GuestSection,
  HeroSection,
  PersonalisedWebsitesSection,
  PlanAnEvent,
  StatsSection,
  Steps,
  TestimonialSection,
  UserVendorSection,
  VendorMessagingSection,
  AISection,
  OnlineMarketPlaceSection,
  WhyChooseUsSection,
  ChannelSection,
  WalletSystemSection,
  HassleFreeSection,
  VendorSteps,
} from "@/app/components";

import { useUserType } from "../context/UserTypeContext";

export default function Home() {
  const { userType } = useUserType();
  return (
    <div className="w-full ">
      <HeroSection />
      <div className="flex flex-col gap-7 md:max-w-[1920px] w-full mx-auto">
        {userType == "user" ? <UserVendorSection /> : <WhyChooseUsSection />}
        {userType == "user" ? <BudgetSection /> : <ChannelSection />}
        <GuestSection />
        {userType == "user" ? <AISection /> : <OnlineMarketPlaceSection />}

        {userType == "user" ? (
          <VendorMessagingSection />
        ) : (
          <WalletSystemSection />
        )}
        {userType == "user" ? (
          <PersonalisedWebsitesSection />
        ) : (
          <HassleFreeSection />
        )}
        {userType == "user" && (
          <>
            <GiftSection />
            <StatsSection />
          </>
        )}

        {userType == "user" ? <Steps /> : <VendorSteps />}
      </div>
      <TestimonialSection />
      <FAQAccordion />
      <PlanAnEvent />
      <Footer />
    </div>
  );
}
