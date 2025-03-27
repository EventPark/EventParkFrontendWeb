import React from "react";
import { VendorTab } from "../types/vendor.types";

interface VendorTabsProps {
  activeTab: VendorTab;
  onTabChange: (tab: VendorTab) => void;
}

export default function VendorTabs({
  activeTab,
  onTabChange,
}: VendorTabsProps) {
  const tabs: VendorTab[] = ["Services", "Products", "Portfolio", "Reviews"];

  return (
    <div className="inline-flex px-2 border-b py-1.5 border-gray-200 bg-grey-background h-[3rem] rounded-full">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`relative px-5 flex items-center justify-center p-4 text-sm transition-colors rounded-full  ${
            activeTab === tab
              ? "text-primary font-medium bg-white"
              : "text-grey-border hover:text-primary"
          }`}
        >
          {tab}
          {activeTab === tab && (
            <div
              className={`absolute -bottom-4  md:flex rounded-full w-1 h-1 bg-primary transition-opacity duration-300 ${
                activeTab === tab
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            />
          )}
        </button>
      ))}
    </div>
  );
}
