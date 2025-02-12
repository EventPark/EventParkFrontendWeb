import React from "react";
import WaitlistNavbar from "./navbar";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[url('/images/waitlist/hero_bg.svg')] bg-cover bg-center bg-no-repeat mb-[93px]  w-full">
      <WaitlistNavbar />
      <div className="w-full flex flex-col text-center justify-center items-center justify-self-center">
        <h1 className=" font-bold flex flex-col">
          <span className="text-[#D0B2C3] -mb-8 md:-mb-12 text-[56px] md:text-[100px]">
            Big Plans,
          </span>
          <span className="text-primary relative text-[64px]  md:text-[100px]">
            We Got You
          </span>
        </h1>
        <p className="max-w-[220px] md:max-w-[392px] pt-0 pb-4 text-sm md:text-[20px] font-normal font-weight-400 leading-[30px] tracking-[-0.6px] text-[#666]">
          Join the waitlist for early access to seamless event planning with
          VendorPerk!
        </p>
        <Button className="bg-primary text-white text-[18px] font-normal leading-[28px] tracking-[-0.54px] px-7 mb-16 mt-7">
          Join Waitlist 🎉
        </Button>
        <div>
          <Image
            src={"/images/waitlist/hero-image.svg"}
            alt=""
            width={1259}
            height={460}
            className="hidden md:flex"
          />

          <Image
            src={"/images/waitlist/hero-image-mobile.svg"}
            alt=""
            width={1259}
            height={310}
            className="md:hidden flex"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
