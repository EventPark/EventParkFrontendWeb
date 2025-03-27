"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/ui/button";
import Calendar from "@/app/components/ui/calendar";
import { Vendor } from "../types";
import { useUserType } from "@/app/context/UserTypeContext";

interface VendorHeaderProps {
  vendor: Vendor;
}

export default function VendorHeader({ vendor }: VendorHeaderProps) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [requested, setRequested] = useState<boolean>(false);
  const { setUserType } = useUserType();
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  return (
    <div className="relative w-auto h-[1024px] flex flex-col border-r border-gray-200 ">
      {/* Back Button */}
      <Link
        href="/home"
        onClick={() => setUserType("marketplace")}
        className="absolute flex items-center gap-2 top-4 left-4 z-10 bg-white/80 backdrop-blur-sm p-2 pr-4 rounded-full text-base hover:bg-white transition-colors"
      >
        <Image
          src="/icons/arrow-circle-left.svg"
          alt="Back"
          width={24}
          height={24}
          className="w-6 h-6"
        />
        Back
      </Link>

      <div className="relative h-[23rem]">
        {/* Cover Image */}
        <div className="relative h-[20rem] w-full bg-slate-700 ">
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
      <div>
        <div className="px-6 py-4 gap-1.5">
          <h1 className="text-2xl font-medium">{vendor.name}</h1>
          <span className="text-base text-gray-500 ">{vendor.location}</span>
          <div className="pt-[26px]">
            <div className="flex">
              <Button
                onClick={() => setRequested(!requested)}
                className={`flex items-center gap-2 transition-all duration-300 ${
                  requested
                    ? "text-amber-600 border border-amber-500 bg-white"
                    : "text-primary bg-primary-lightest"
                } `}
              >
                {requested && (
                  <div
                    data-size="md"
                    className="w-2.5 h-2.5 relative overflow-hidden"
                  >
                    <div className="w-2 h-2 left-[1px] top-[1px] absolute bg-[#FF9500] rounded-full" />
                  </div>
                )}
                {requested ? "Request Sent" : "Request Booking"}
              </Button>
              <div className="flex flex-1 justify-end gap-2">
                <Image
                  src={"/icons/circle-heart.svg"}
                  alt="phone"
                  width={44}
                  height={44}
                />{" "}
                <Image
                  src={"/icons/circle-ellipsis-big.svg"}
                  alt="phone"
                  width={44}
                  height={44}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-primary-lightest w-full my-4"></div>
        <div className="px-6 py-4 gap-2 flex flex-col text-gray-500">
          <h3 className=" uppercase text-sm tracking-widest">
            ABOUT {vendor.name}
          </h3>
          <p className="text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            dolores.
          </p>
        </div>
        <Calendar onDateSelect={handleDateSelect} />
      </div>

      {/* Calendar Popup */}
    </div>
  );
}
