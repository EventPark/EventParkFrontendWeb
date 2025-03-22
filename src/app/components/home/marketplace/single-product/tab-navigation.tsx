import React from "react";

type Tab = "Item Details" | "Reviews";

interface TabNavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function TabNavigation({
  activeTab,
  onTabChange,
}: TabNavigationProps) {
  return (
    <div className="flex items-center gap-2 flex-1 border-l border-gray-200 py-7">
      <button
        onClick={() => onTabChange("Item Details")}
        className={`text-sm relative px-4 py-[9px] rounded-full transition-colors ml-12 ${
          activeTab === "Item Details"
            ? "bg-primary text-white font-medium"
            : "text-[#666666] hover:text-primary"
        }`}
      >
        Item Details
        {activeTab === "Item Details" && (
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
          </div>
        )}
      </button>
      <button
        onClick={() => onTabChange("Reviews")}
        className={`relative px-4 py-[9px] rounded-full text-sm transition-colors ${
          activeTab === "Reviews"
            ? "bg-primary text-white font-medium"
            : "text-[#666666] hover:text-primary"
        }`}
      >
        Reviews
        {activeTab === "Reviews" && (
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
          </div>
        )}
      </button>
    </div>
  );
}
