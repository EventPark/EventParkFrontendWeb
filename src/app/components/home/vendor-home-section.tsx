import React from "react";
import WhyChooseUsSection from "./vendor/why-choose-us";
import ChannelSection from "./vendor/channel";
import OnlineMarketPlaceSection from "./vendor/online_marketplace";
import WalletSystemSection from "./vendor/wallet-system";
import HassleFreeSection from "./vendor/hassle_free";
import VendorSteps from "./vendor/steps";
import GuestSection from "./guest";
import TestimonialSection from "./testemonials";
import FAQAccordion from "./faq";
import PlanAnEvent from "./plan-an-event";
import Footer from "./footer";

export default function VendorHomeSection() {
  return (
    <div className="w-full">
      <WhyChooseUsSection />
      <ChannelSection />
      <GuestSection />
      <OnlineMarketPlaceSection />
      <WalletSystemSection />
      <HassleFreeSection />
      <VendorSteps />
    </div>
  );
}
