"use client";

import React from "react";
import Filters from "./filters";
import VendorCard from "./vendor-card";
import Image from "next/image";

const MOCK_VENDORS = [
  {
    name: "Glitz & Glam Events",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    tags: [{ label: "Makeup" }, { label: "Nail Fixing" }],
    imageUrl: "/images/home/carousel/02.png",
    logoUrl: "/images/home/mock_vendor_logo.svg",
  },
  {
    name: "Perfect Touch Decor",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    tags: [{ label: "Event Planning" }, { label: "Decoration" }],
    imageUrl: "/images/home/carousel/02.png",
    logoUrl: "/images/home/mock_vendor_logo.svg",
  },
  {
    name: "Dreamscape Planners",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    tags: [{ label: "Event Planning" }, { label: "Decoration" }],
    imageUrl: "/images/home/carousel/02.png",
    logoUrl: "/images/home/mock_vendor_logo.svg",
  },
  {
    name: "Jollof & Beyond",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    tags: [{ label: "Food" }, { label: "Catering" }],
    imageUrl: "/images/home/carousel/02.png",
    logoUrl: "/images/home/mock_vendor_logo.svg",
  },
  {
    name: "Tasty Treats NG",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    tags: [{ label: "Snack" }, { label: "Drinks" }],
    imageUrl: "/images/home/carousel/02.png",
    logoUrl: "/images/home/mock_vendor_logo.svg",
  },
  {
    name: "Naija Bites Catering",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    tags: [{ label: "Pastries" }, { label: "Catering" }],
    imageUrl: "/images/home/carousel/02.png",
    logoUrl: "/images/home/mock_vendor_logo.svg",
  },
  {
    name: "Lens Master Studios",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    tags: [{ label: "Pictures" }, { label: "Photography" }],
    imageUrl: "/images/home/carousel/02.png",
    logoUrl: "/images/home/mock_vendor_logo.svg",
  },
  {
    name: "Golden Frame Visuals",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    tags: [{ label: "Photography" }, { label: "Videography" }],
    imageUrl: "/images/home/carousel/02.png",
    logoUrl: "/images/home/mock_vendor_logo.svg",
  },
  {
    name: "Bella Wears NG",
    location: "Lekki, Lagos Nigeria",
    rating: 4.5,
    tags: [{ label: "Fashion" }, { label: "Shoes" }],
    imageUrl: "/images/home/carousel/02.png",
    logoUrl: "/images/home/mock_vendor_logo.svg",
  },
];

export default function MarketPlaceSection() {
  const [activeTab, setActiveTab] = React.useState("Vendors");

  return (
    <div className="min-h-screen w-full px-0 pb-24">
      <div className="mx-auto ">
        <div className="flex flex-col md:flex-row ">
          {/* Filters */}
          <Filters />

          {/* Vendor Grid */}
          <div className="flex-1 bg-white">
            {/* Tabs */}
            <div className="mx-auto md:mb-8 py-5">
              <div className="flex gap-1 md:gap-4 md:border-b md:border-gray-200 py-2 pl-8 justify-center md:justify-start">
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
                      className={` rounded-full w-1 h-1 md:w-1.5 md:h-1.5 bg-primary transition-opacity duration-300 mt-2 ${
                        activeTab === tab
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="px-4 md:px-8">
              <h1 className="hidden md:block text-2xl font-medium text-black mb-8">
                Explore Vendors
              </h1>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-medium text-black md:hidden">
                    Caterers
                  </h3>
                  <span className="text-sm text-gray-500">(420 Vendors)</span>
                </div>
                <Image
                  src="/icons/filters.svg"
                  alt="filters"
                  width={32}
                  height={32}
                  className="block md:hidden cursor-pointer"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_VENDORS.map((vendor, index) => (
                  <VendorCard key={index} {...vendor} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
