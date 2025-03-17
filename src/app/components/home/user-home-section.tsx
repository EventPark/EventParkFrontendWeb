import React from "react";
import BudgetSection from "./budget";
import GiftSection from "./gift";
import GuestSection from "./guest";
import AISection from "./vendor_perk_ai";
import VendorMessagingSection from "./vendor-messaging";
import PersonalisedWebsitesSection from "./personalised";
import StatsSection from "./statistics";
import Steps from "./steps";
import TestimonialSection from "./testemonials";
import FAQAccordion from "./faq";
import PlanAnEvent from "./plan-an-event";
import Footer from "./footer";
import UserVendorSection from "./vendor";

export default function UserHomeSection() {
  return (
    <div className="w-full">
      <UserVendorSection />
      <BudgetSection />
      <GuestSection />
      <AISection />
      <VendorMessagingSection />
      <PersonalisedWebsitesSection />
      <GiftSection />
      <StatsSection />
      <Steps />
    </div>
  );
}
