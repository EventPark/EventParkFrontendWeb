"use client";

import React, { useEffect, useRef, useState, Suspense, lazy } from "react";
import { Button } from "../ui";
import TailoredLottie from "../../../../public/images/home/steps/tailored_lottie.json";
import BookLottie from "../../../../public/images/home/steps/book_lottie.json";
import ConverseLottie from "../../../../public/images/home/steps/converse_lotttie.json";
import DiscoverVendors from "../../../../public/images/home/steps/discover_vendors_lottie.json";
import { motion } from "framer-motion";

const Lottie = lazy(() => import("lottie-react"));

export default function Steps() {
  type VendorFeature = {
    heading: string;
    description: string;
    lottiePath: any;
    headingClasses?: string;
    mobileBgImage: string;
  };

  const vendorFeatures: VendorFeature[] = [
    {
      heading: "Discover Vendors",
      description: `Explore 200+ services and filter vendors to match  your event’s style, needs, and budget. `,
      lottiePath: DiscoverVendors,
      headingClasses: "text-primary",
      mobileBgImage: "bg-[url('/images/home/steps/discover_vendors.svg')]",
    },
    {
      heading: "Get Tailored Matches",
      description:
        "Let our AI-powered matchmaker recommend the best vendors for your event, saving you time and effort.",
      lottiePath: TailoredLottie,
      headingClasses: "text-[#716952]",
      mobileBgImage: "bg-[url('/images/home/steps/tailored_matches.svg')]",
    },
    {
      heading: "Converse with Vendors",
      description:
        "Compare vendors with reviews, ratings, and portfolios to choose confidently.",
      lottiePath: ConverseLottie,
      headingClasses: "text-[#666381]",
      mobileBgImage: "bg-[url('/images/home/steps/converse.svg')]",
    },
    {
      heading: "Book and Pay Seamlessly",
      description:
        "Book vendors directly through our platform with secure payment options.",
      lottiePath: BookLottie,
      mobileBgImage: "bg-[url('/images/home/steps/book.svg')]",
    },
  ];

  const [selectedVendorFeature, setSelectedVendorFeature] =
    useState<VendorFeature>(vendorFeatures[0]);

  const carouselItems = [
    "Discover Vendors",
    "Get Tailored Matches",
    "Converse with Vendors",
    "Book Seamlessly",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % vendorFeatures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [vendorFeatures.length]);

  const handleDragEnd = (event: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -50 || velocity < -500) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % vendorFeatures.length);
    } else if (offset > 50 || velocity > 500) {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + vendorFeatures.length) % vendorFeatures.length
      );
    }
  };

  return (
    <div>
      <div className="px-5 md:px-40 md:pt-24">
        <div className="flex items-center justify-between">
          <h2 className="md:text-[56px] text-[32px] font-medium tracking-[-1.4px] md:tracking-[-2.4px]">
            Plan your big event <br />
            <span className="text-[#8E8E93]">in 4 easy steps!</span>
          </h2>
          <Button className="bg-black text-white hidden md:block">
            Find Vendors Nearby
          </Button>
        </div>
        <div className="hidden rounded-3xl md:flex flex-col items-start md:flex-row md:gap-6 mt-12 p-3 bg-[#FBF9FA]">
          {/* Left Side - Text Content */}
          <div className="md:w-1/2 space-y-6">
            {vendorFeatures?.map((vendorFeature, index) => (
              <div
                onClick={() => setSelectedVendorFeature(vendorFeature)}
                key={index}
                className={`cursor-pointer p-6  rounded-xl flex gap-2 flex-col ${
                  selectedVendorFeature.heading === vendorFeature?.heading
                    ? "bg-white shadow-md "
                    : ""
                } `}
              >
                <h3
                  className={`text-lg md:text-[28px] tracking-[-1.12px]  ${
                    selectedVendorFeature.heading === vendorFeature?.heading
                      ? `${selectedVendorFeature.headingClasses} font-medium`
                      : ""
                  }`}
                >
                  {vendorFeature?.heading}
                </h3>
                <p className="text-gray-500 md:max-w-[359px]">
                  {vendorFeature?.description}
                </p>
              </div>
            ))}
          </div>
          <div className="md:w-1/2">
            <Suspense fallback={<div>Loading...</div>}>
              <Lottie
                animationData={selectedVendorFeature.lottiePath}
                loop={false}
              />
            </Suspense>
          </div>
        </div>
      </div>
      <div
        ref={carouselRef}
        className="overflow-hidden relative w-full pl-4 mt-4 flex flex-col md:hidden"
      >
        <motion.div
          className="flex cursor-grab"
          drag="x"
          onDragEnd={handleDragEnd}
          animate={{ x: `-${currentIndex * 90}%` }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          {[...vendorFeatures, ...vendorFeatures].map((item, index) => (
            <div
              key={index}
              className={`max-w-[330px] pt-8 ${item.mobileBgImage} bg-cover bg-no-repeat min-w-[90%] bg-gray-200 p-6 rounded-2xl shadow-md flex flex-col items-start justify-start text-lg mr-4 h-[520px]`}
            >
              <h3
                className={`font-semibold text-2xl ${
                  item.headingClasses || ""
                }`}
              >
                {item.heading}
              </h3>
              <p className="text-base mt-2 w-[270px] text-[#8E8E93]">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
