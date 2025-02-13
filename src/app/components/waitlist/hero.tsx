import React from "react";
import WaitlistNavbar from "./navbar";
import { Button } from "../ui/button";
import Image from "next/image";
import { useUserType } from "@/app/context/UserTypeContext";

const Hero = () => {
  const { userType } = useUserType();

  return (
    <div className="bg-[url('/images/waitlist/hero_bg.svg')] bg-cover bg-center bg-no-repeat mb-[93px]  w-full">
      <WaitlistNavbar />
      <div className="w-full flex flex-col text-center justify-center items-center justify-self-center">
        <h1 className=" font-bold flex flex-col">
          {userType == "user" ? (
            <>
              <div className="text-center text-[#d0b2c3] text-[56px] font-bold font-['Rethink Sans'] leading-[56px]">
                Big Plans?
              </div>
              <div className="text-center text-primary text-[64px] font-bold font-['Rethink Sans'] leading-[64px]">
                We got You!
              </div>
            </>
          ) : (
            <>
              <div className="text-center text-[#d6ceb7] text-[56px] font-bold  leading-[48px]">
                Reach More
              </div>
              <div className="text-center text-[#0b0300] text-[64px] font-bold font-['Rethink Sans'] leading-[64px]">
                With Less
              </div>
            </>
          )}
        </h1>
        <p className="max-w-[220px] md:max-w-[392px] py-4 text-sm md:text-[20px] font-normal font-weight-400 leading-[30px] tracking-[-0.6px] text-[#666]">
          Join the waitlist for early access to seamless event planning with
          VendorPerk!
        </p>
        <Button className="bg-primary text-white text-[18px] font-normal leading-[28px] tracking-[-0.54px] px-7 mb-16 mt-4">
          Join Waitlist 🎉
        </Button>
        <div className="flex-1  w-full">
          <Image
            src={
              userType === "user"
                ? "/images/waitlist/hero-image.svg"
                : "/images/waitlist/vendor-hero-image.svg"
            }
            alt=""
            width={1920}
            height={460}
            className="hidden md:flex"
            objectFit="cover"
          />

          <Image
            src={
              userType === "user"
                ? "/images/waitlist/hero-image-mobile.svg"
                : "/images/waitlist/vendor-hero-image-mobile.svg"
            }
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
