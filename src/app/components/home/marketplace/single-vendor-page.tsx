"use client";

import React from "react";
import { VendorTab } from "./types/vendor.types";
import VendorHeader from "./single-vendor/vendor-header";
import VendorTabs from "./single-vendor/vendor-tabs";
import ServiceCard from "./single-vendor/service-card";
import Image from "next/image";
import { Vendor } from "./types";

interface SingleVendorPageProps {
  vendor: Vendor;
}

export default function SingleVendorPage({ vendor }: SingleVendorPageProps) {
  const [activeTab, setActiveTab] = React.useState<VendorTab>("Services");

  return (
    <div className="min-h-screen bg-[#ffffff flex] flex">
      <div>
        {/* <div>
          <Image
            src="/icons/arrow-circle-left.svg"
            alt="Back"
            width={20}
            height={20}s
          />
          <div className="justify-start text-black text-sm font-semibold leading-tight">
            Back
          </div>
        </div> */}
        <VendorHeader vendor={vendor} />
      </div>

      {/*
      <VendorTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="px-40 py-8">
        {activeTab === "Services" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vendor.services.map((service) => (
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
          <div className="text-center text-gray-500 py-12">
            Reviews content coming soon...
          </div>
        )}
      </div> */}
    </div>
  );
}
