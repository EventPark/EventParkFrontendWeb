import { MOCK_VENDORS } from "@/app/mock/mock_vendors";
import React from "react";
import VendorCard from "./vendor-card";

const VendorResults = () => {
  return (
    <>
      {MOCK_VENDORS.map((vendor, index) => (
        <VendorCard key={index} {...vendor} />
      ))}
    </>
  );
};

export default VendorResults;
