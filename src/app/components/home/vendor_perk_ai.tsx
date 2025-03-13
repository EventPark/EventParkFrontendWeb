"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import aiLottieAnimation from "../../../../public/images/home/ai_lottie.json";

export default function AISection() {
  const [Lottie, setLottie] = useState<any>(null);

  useEffect(() => {
    import("lottie-react").then((LottieModule) => {
      setLottie(() => LottieModule.default);
    });
  }, []);

  return (
    <div className="md:flex-row flex-col px-5 md:px-40  flex h-full gap-8">
      <div className="hidden order-2 md:order-1 md:flex w-full md:w-[40%] max-w-3xl ">
        {Lottie && (
          <div className="w-full h-full">
            <Lottie
              animationData={aiLottieAnimation}
              loop={true}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        )}
      </div>

      <div className="w-full md:w-[60%] order-1 md:order-2">
        <div className="px-[5%] md:px-[8%] py-[2.5rem] md:py-[5rem] rounded-2xl h-full flex flex-col bg-[#FCFAF6] bg-cover bg-no-repeat">
          <div className="flex flex-col gap-[0.75rem] md:gap-[1.25rem] text-center md:text-left">
            <h6 className="text-[#716952] tracking-[1.68px] text-sm md:text-lg">
              VENDORPERK AI
            </h6>
            <h3 className="text-[1.75rem] md:text-[3.5rem] text-[#241C05] font-medium md:leading-[3.75rem] leading-[2.31rem] tracking-[-1.26px]">
              AI-powered <br />
              <span className="text-[#BDB59E]">Plan Effortlessly</span>
            </h3>
            <h6 className="text-[#716952] tracking-[-0.48px] text-base md:text-2xl">
              Let AI handle the details! Get smart <br /> reminders, vendor
              suggestions, and <br /> seamless event management.
            </h6>
          </div>

          <Image
            src="/images/home/vendorperk_ai_mobile.svg"
            alt="Description"
            width={353}
            height={403}
            layout="responsive"
            className="flex md:hidden mt-[1.5rem]"
            style={{ objectFit: "cover" }}
          />
          <div className="md:flex justify-center md:justify-start hidden flex-1 h-full items-end md:items-start pt-[1rem] font-medium">
            <Button className="bg-[#F0E8D1] text-[#574F38] items-center gap-[0.75rem] p-[0.875rem] w-auto h-[3.5rem]">
              Try AI Assistant 🚀
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
