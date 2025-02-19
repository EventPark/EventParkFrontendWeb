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
import UserVendorSection from "@/app/components/home/vendor";
import VendorMessagingSection from "@/app/components/home/vendor-messaging";
import AISection from "@/app/components/home/vendor_perk_ai";
import { useUserType } from "../context/UserTypeContext";
import WhyChooseUsSection from "../components/home/vendor/why-choose-us";
import ChannelSection from "../components/home/vendor/channel";
import OnlineMarketPlaceSection from "../components/home/vendor/online_marketplace";
import WalletSystemSection from "../components/home/vendor/wallet-system";
import HassleFreeSection from "../components/home/vendor/hassle_free";
import VendorSteps from "../components/home/vendor/steps";

export default function Home() {
  const { userType } = useUserType();
  return (
    <div className="w-full o-red">
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
