"use client";

import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import VideoBackground from "./video-background";
import Link from "next/link";
import WaitlistModal from "../../../../public/images/home/waitlist-modal";
import { useState } from "react";

interface HeroSectionProps {
  openModal: () => void;
}

export default function HeroSection({ openModal }: HeroSectionProps) {
  return (
    <div className="relative bg-black h-screen w-full flex items-center justify-center text-white flex-col">
      <VideoBackground />

      <div className="relative z-10 text-center px-6">
        <h1 className="text-center md:text-left font-bold text-transparent bg-clip-text bg-gradient-to-t from-white/100 to-white/37 p-5">
          <span
            className="text-5xl md:text-[110px]"
            style={{ letterSpacing: "-0.06em" }}
          >
            Dream Big,
          </span>{" "}
          <br />
          <span
            className="text-7xl md:text-9xl"
            style={{ letterSpacing: "-0.05em" }}
          >
            Plan Easy.
          </span>
        </h1>

        <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto opacity-85">
          Find the right vendors, create amazing <br /> events, and let us
          handle the rest
        </p>
        <Button
          className="my-6 font-bold bg-white text-black hover:bg-gray-200"
          onClick={openModal}
        >
          Plan an Event 🎉
        </Button>
        {/* Navigation */}
        <div className="pt-16 bottom-6 w-full justify-center hidden md:flex">
          <nav className="  px-6 py-3 rounded-full flex gap-4">
            <div className="flex flex-col gap-3 items-center justify-center">
              <Link
                href="#"
                className="text-white text-sm px-4 py-2 rounded-full bg-[#FFFFFF19]"
              >
                Home
              </Link>

              <div className="rounded-full w-1 h-1 bg-white"></div>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center group cursor-pointer">
              <Link
                href="#"
                className="text-white text-sm px-4 py-2 rounded-full group-hover:bg-[#FFFFFF19] transition-all duration-300 flex gap-2 items-center"
              >
                Company{" "}
                <Image
                  src={"/icons/arrow-down.svg"}
                  alt=""
                  width={12}
                  height={6}
                />
              </Link>

              <div className="rounded-full w-1 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="flex flex-col gap-3 items-center justify-center group cursor-pointer">
              <Link
                href="#"
                className="text-white text-sm px-4 py-2 rounded-full group-hover:bg-[#FFFFFF19] transition-all duration-300"
              >
                For Vendors
              </Link>

              <div className="rounded-full w-1 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col gap-3 items-center justify-center group cursor-pointer">
              <Link
                href="#"
                className="text-white text-sm px-4 py-2 rounded-full group-hover:bg-[#FFFFFF19] transition-all duration-300"
              >
                Marketplace
              </Link>

              <div className="rounded-full w-1 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </nav>
        </div>
      </div>
      {/* <WaitlistModal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
    </div>
  );
}
