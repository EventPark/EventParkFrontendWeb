"use client";

import React from "react";
import Filters from "./filters";
import Results from "./results";

export default function MarketPlaceSection() {
  const [activeTab, setActiveTab] = React.useState("Vendors");

  return (
    <div className="w-full">
      <div className="mx-auto ">
        <div className="flex flex-col md:flex-row">
          <Filters />
          <Results activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </div>
  );
}
