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
  const tabs: VendorTab[] = ["Services", "Portfolio", "Reviews"];

  return (
    <div className="flex gap-8 px-40 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`relative px-4 py-4 text-sm transition-colors ${
            activeTab === tab
              ? "text-primary font-medium"
              : "text-[#666666] hover:text-primary"
          }`}
        >
          {tab}
          {activeTab === tab && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
}
