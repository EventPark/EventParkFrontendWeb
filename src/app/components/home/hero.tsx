"use client";

import Image from "next/image";
import { Button } from "@/app/components";
import VideoBackground from "./video-background";
import Link from "next/link";
import { useUserType } from "@/app/context/UserTypeContext";
import NavBar from "../ui/navbar";

export default function HeroSection() {
  const { userType, setUserType } = useUserType();
  return (
    <div className="">
      <NavBar />

      <div className="relative bg-black  h-screen  w-full flex items-center justify-center text-white flex-col">
        <VideoBackground />

        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <h1 className="text-center md:text-left font-bold text-transparent bg-clip-text bg-gradient-to-t from-white/100 to-white/37 p-5">
            <span
              className="text-5xl md:text-[110px]"
              style={{ letterSpacing: "-0.06em" }}
            >
              {userType == "user" ? " Dream Big" : "Reach More"},
            </span>{" "}
            <br />
            <span
              className="text-7xl md:text-9xl"
              style={{ letterSpacing: "-0.05em" }}
            >
              {userType == "user" ? " Plan Easy" : "With Less"}.
            </span>
          </h1>
          <div className="md:w-[460px] text-center  text-lg   text-white/90 md:text-xl opacity-85  leading-[33.60px]">
            {userType == "user"
              ? "Find the right vendors, create amazing events and trust us to handle the rest."
              : "Join the leading platform connecting vendors with event planners"}
          </div>

          <Button
            className="my-6 font-bold bg-white text-black hover:bg-gray-200"
            onClick={() => {}}
          >
            {userType == "user" ? "Plan an Event 🎉" : "Join as a Vendor"}
          </Button>
          {/* Navigation */}
          <div className="pt-16 bottom-6 w-full justify-center hidden md:flex">
            <nav className="  px-6 py-3 rounded-full flex gap-4 ">
              <div className="flex flex-col gap-3 items-center justify-center">
                <Button
                  onClick={() => setUserType("user")}
                  className={` uppercase font-bold  text-white text-sm px-4 py-2 rounded-full group-hover:bg-[#FFFFFF19] ${
                    userType == "user" && "bg-[#FFFFFF19]"
                  }`}
                >
                  <span className="tracking-[1.12px]">Home</span>
                </Button>

                <div
                  className={`hidden md:flex rounded-full w-1 h-1 bg-white   ${
                    userType == "user" ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
              </div>
              <div className="flex flex-col gap-3 items-center justify-center group cursor-pointer">
                <Button className="uppercase tracking-[1.12px] font-bold  text-white text-sm px-4 py-2 rounded-full group-hover:bg-[#FFFFFF19] transition-all duration-300 flex gap-2 items-center">
                  Company{" "}
                  <Image
                    src={"/icons/arrow-down.svg"}
                    alt=""
                    width={12}
                    height={6}
                  />
                </Button>

                <div className="hidden md:flex rounded-full w-1 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="flex flex-col gap-3 items-center justify-center group cursor-pointer">
                <Button
                  className={`uppercase tracking-[1.12px] font-bold  text-white text-sm px-4 py-2 rounded-full group-hover:bg-[#FFFFFF19] transition-all duration-300 ${
                    userType == "vendor" && "bg-[#FFFFFF19]"
                  }`}
                  onClick={() => {
                    setUserType("vendor");
                  }}
                >
                  For Vendors
                </Button>{" "}
                <div
                  className={`hidden md:flex rounded-full w-1 h-1 bg-white  group-hover:opacity-100 transition-opacity duration-300 ${
                    userType == "vendor" ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
              <div className="flex flex-col gap-3 items-center justify-center group cursor-pointer">
                <Button className="uppercase tracking-[1.12px] font-bold  text-white text-sm px-4 py-2 rounded-full group-hover:bg-[#FFFFFF19] transition-all duration-300">
                  Marketplace
                </Button>

                <div className="hidden md:flex rounded-full w-1 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
