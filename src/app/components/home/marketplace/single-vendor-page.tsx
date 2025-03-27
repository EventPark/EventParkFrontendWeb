"use client";

import React from "react";
import { VendorTab } from "./types/vendor.types";
import VendorHeader from "./single-vendor/vendor-header";
import VendorTabs from "./single-vendor/vendor-tabs";
import ServiceCard from "./single-vendor/service-card";
import Image from "next/image";
import { Vendor } from "./types";
import Reviews from "./single-item/reviews";

interface SingleVendorPageProps {
  vendor: Vendor;
}

export default function SingleVendorPage({ vendor }: SingleVendorPageProps) {
  const [activeTab, setActiveTab] = React.useState<VendorTab>("Services");

  return (
    <div className="min-h-screen bg-[#ffffff] flex gap-0">
      <div className="w-[32rem]">
        <VendorHeader vendor={vendor} />
      </div>

      <div className="flex flex-col p-16 w-full o-red">
        <div>
          <VendorTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
        <div className="py-8">
          {activeTab === "Services" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vendor?.services?.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}

          {activeTab === "Portfolio" && (
            <div className="text-center text-gray-500 py-12">
              Portfolio content coming soon...
            </div>
          )}

          {activeTab === "Reviews" && (
            <div className="w-full">
              <Reviews isVendorReview={true} reviews={vendor.reviews || []} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
