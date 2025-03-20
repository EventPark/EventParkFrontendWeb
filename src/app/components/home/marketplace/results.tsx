import React from "react";
import MarketPlaceOptionsTab from "./marketplace-tab";
import MobileHeader from "./mobile-header";
import VendorResults from "./vendor-results";
import EmptySearch from "./empty-search";
import ItemsResults from "./items-grid";
import { MOCK_ITEMS } from "@/app/mock/mock_vendors";

type ResultsProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const Results = ({ activeTab, setActiveTab }: ResultsProps) => {
  return (
    <div className="flex-1 bg-white">
      <MarketPlaceOptionsTab
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="px-4 md:px-8">
        <h1 className="hidden md:block text-2xl font-medium text-black mb-8">
          Explore {activeTab === "Vendors" ? "Vendors" : "Items"}
        </h1>
        <MobileHeader
          title={activeTab}
          subtitle={`(${MOCK_ITEMS.length} ${
            activeTab === "Vendors" ? "Vendors" : "Items"
          })`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-40">
          {activeTab === "Vendors" ? <VendorResults /> : <ItemsResults />}
        </div>
      </div>
    </div>
  );
};

export default Results;
