"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useState, useEffect } from "react";

export default function UserVendorSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [centerItem, setCenterItem] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const carousel = carouselRef.current;
        const items = carousel.querySelectorAll(".carousel-item-p");
        const centerIndex = Math.min(
          Math.round(carousel.scrollLeft / 200),
          items.length - 1
        );
        setCenterItem(items[centerIndex]?.textContent || "");
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <div
      className="pt-[74px] pb-[91px]  bg-center bg-no-repeat   md:bg-[url('/images/home/marketplace_album.png')]"
      style={{
        backgroundSize: "cover",
        backgroundColor: "linear-gradient(180deg, #FBF8F1 0%, #F5EFDF 100%)",
      }}
    >
      <div className="px-5 md:px-40 gap-3">
        <h6 className="text-[#A39B84] tracking-[1.68px] text-sm md:text-lg">
          EXTENSIVE VENDOR MARKETPLACE
        </h6>
        <h3 className="flex flex-col text-[32px] md:text-[56px] tracking-[-1.44px]  md:tracking-[-2.8px] md:font-medium font-normal gap-0 leading-[132%]">
          <span className="text-primary">Access over 13K+</span>{" "}
          <span className="text-[#716952]">
            {" "}
            <span className="md:text-black">Vendors to</span> Make Your{" "}
          </span>
          <span className="text-[#716952] ">Event Unforgettable</span>
        </h3>
        <Button className="my-6 font-bold gap-3 text-white hover:bg-gray-200 flex items-center bg-primary">
          Find Vendors
          <Image
            src="/icons/arrow-circle-right.svg"
            alt="Arrow Right"
            width={20}
            height={20}
          />
        </Button>
      </div>
      <div className="md:h-[540px] 2xl:h-[1024px] w-full flex items-center  justify-start curved-div overflow-hidden mt-4 h-[1024px]">
        <>
          <div
            className="curved-div-top overflow-x-scroll no-scrollbar h-[300px] md:hidden"
            ref={carouselRef}
          >
            <div className="flex w-full space-x-4 px-0 relative z-2">
              {[
                { src: "/images/home/carousel/02.png", title: "PHOTOGRAPHY" },
                { src: "/images/home/carousel/02.png", title: "CARDIO" },
                { src: "/images/home/carousel/02.png", title: "GYM" },
                { src: "/images/home/carousel/02.png", title: "HEALTH " },
              ].map(({ src, title }, index) => (
                <motion.div
                  key={index}
                  className="carousel-item min-w-[330px] h-[20rem] flex items-center justify-center rounded-lg "
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="carousel-item-p hidden">{title}</div>
                  <Image src={src} height={250} width={310} alt="" />
                </motion.div>
              ))}
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-transparent pointer-events-none" />
          </div>
        </>
      </div>

      <div className="flex flex-col items-center md:items-end px-5 md:px-40">
        <p className="text-[#8E8E93] tracking-[-1.2px] text-2xl md:text-[32px] font-medium">
          {centerItem}
        </p>
        <p className="text-[#000] tracking-[-1.2px] text-sm md:text-lg font-medium">
          1,440 VENDORS
        </p>
      </div>
    </div>
  );
}
