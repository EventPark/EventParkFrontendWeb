import React from "react";
import Image from "next/image";

import Link from "next/link";
import { Button } from "../../../ui";
import { Vendor } from "../types";

interface VendorHeaderProps {
  vendor: Vendor;
}

export default function VendorHeader({ vendor }: VendorHeaderProps) {
  console.log(vendor);
  return (
    <div className="relative w-[25.25rem] flex flex-col">
      {/* Back Button */}

      <div className="relative h-[23rem] o-red">
        {/* Cover Image */}
        <div className="relative h-[20rem] w-full bg-slate-700 ">
          {/* <Image
          src={vendor.imageUrl}
          alt={`${vendor.name} cover`}
          fill
          className="object-cover"
          /> */}
          <div className="absolute bottom-4 right-4 h-8 pl-2 pr-3 py-2.5 bg-white bg-opacity-20 rounded-[64px] inline-flex justify-center items-center gap-2">
            <Image
              src="/icons/star_rating.svg"
              alt="rating"
              width={16}
              height={16}
            />
            <div className="justify-start text-Grays-White text-base font-bold  leading-tight">
              4.5
            </div>
          </div>
        </div>
        <div className="absolute h-32 w-32 rounded-full border-4 border-white overflow-hidden bottom-0 left-6 z-50">
          <Image
            src={vendor.imageUrl}
            alt={vendor.name}
            objectFit="cover"
            fill
          />
        </div>
      </div>

      <div className="px-6 py-4 gap-1.5">
        <h1 className="text-2xl font-medium">{vendor.name}</h1>
        <span className="text-base ">{vendor.location}</span>
        <div className="pt-[26px]">
          <Button>Request Booking</Button>
        </div>
      </div>

      {/* Profile Section */}
      <div className=" hidden relative px-40 pb-6 ">
        <div className="flex items-end gap-6 -mt-16 relative z-10">
          {/* Profile Image */}

          {/* Vendor Info */}
          <div className="flex-1 flex justify-between items-end pb-2">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                {vendor.name}
              </h1>
              <div className="flex items-center gap-4 mt-1">
                <div className="flex items-center gap-1">
                  <Image
                    src="/icons/star_rating.svg"
                    alt="rating"
                    width={16}
                    height={16}
                  />
                  <span className="text-sm font-medium">{vendor.rating}</span>
                </div>
                <span className="text-gray-500">•</span>
                <div className="flex items-center gap-1 text-gray-500">
                  <Image
                    src="/icons/location.svg"
                    alt="location"
                    width={16}
                    height={16}
                  />
                  <span className="text-sm">{vendor.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
