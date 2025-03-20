import React from "react";

type MarketPlaceOptionsTabProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const MarketPlaceOptionsTab = ({
  activeTab,
  setActiveTab,
}: MarketPlaceOptionsTabProps) => {
  return (
    <div>
      <div className="mx-auto md:mb-8 py-5">
        <div className="flex gap-1 md:gap-4 md:border-b md:border-gray-200 py-2 pl-0 md:pl-8 justify-center md:justify-start ">
          {["Vendors", "Items"].map((tab) => (
            <div key={tab} className="flex flex-col items-center">
              <button
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm rounded-3xl ${
                  activeTab === tab
                    ? "text-white font-medium bg-primary"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
              <div
                className={`rounded-full w-1 h-1 md:w-1.5 md:h-1.5 bg-primary transition-opacity duration-300 mt-2 ${
                  activeTab === tab
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketPlaceOptionsTab;
