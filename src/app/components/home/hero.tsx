"use client";

import Image from "next/image";
import { Button } from "@/app/components";
import VideoBackground from "./video-background";
import Link from "next/link";
import { useUserType } from "@/app/context/UserTypeContext";
import NavBar from "../ui/navbar";
import { heroContent } from "./hero-content";
import HeroNavigation from "./hero-navigation";

export default function HeroSection() {
  const { userType } = useUserType();
  const content = heroContent[userType] || heroContent.user;

  return (
    <div>
      <NavBar />

      <div className="relative bg-black h-screen w-full flex items-center justify-center text-white flex-col">
        <VideoBackground />

        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <h1 className="text-center font-bold text-transparent bg-clip-text bg-gradient-to-t from-white/100 to-white/37 md:p-5 py-5">
            <span
              className={`text-5xl md:text-[110px] ${
                userType == "marketplace" ? "text-center" : "md:text-left "
              }`}
              style={{ letterSpacing: "-0.06em" }}
            >
              {content.title}
            </span>{" "}
            <br />
            <span
              className="text-6xl md:text-9xl"
              style={{ letterSpacing: "-0.05em" }}
            >
              {content.subtitle}
            </span>
          </h1>
          <div className="md:w-[460px] w-full text-center text-lg text-white/90 md:text-xl opacity-85 leading-[33.60px]">
            {content.description}
          </div>

          {userType != "marketplace" && (
            <Button
              className="my-6 font-bold bg-white text-black hover:bg-gray-200"
              onClick={() => {}}
            >
              {content.ctaText}
            </Button>
          )}

          <HeroNavigation />
        </div>
      </div>
    </div>
  );
}
