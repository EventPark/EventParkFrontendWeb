import React from "react";
import CopyRight from "../ui/copy-right";
import Logo from "../ui/logo";

const Footer = () => {
  return (
    <div className="w-full bg-black pt-[56px] flex flex-col items-center justify-center">
      <Logo />
      <div className="w-full border-t border-[#1A1A1A] my-5">
        <div className=" justify-center items-center gap-4 inline-flex w-full py-8 flex-wrap gap-y-5">
          <div className="text-center text-[#b3b3b3] text-sm font-medium leading-[14px] tracking-wide cursor-pointer">
            INSTAGRAM
          </div>
          <div className="w-1 h-1 bg-[#f0e8d1] rounded-full" />
          <div className="text-center text-[#b3b3b3] text-sm font-medium leading-[14px] tracking-wide cursor-pointer">
            X(TWITTER)
          </div>
          <div className="w-1 h-1 bg-[#f0e8d1] rounded-full" />
          <div className="text-center text-[#b3b3b3] text-sm font-medium leading-[14px] tracking-wide cursor-pointer">
            TIKTOK
          </div>
          <div className="w-1 h-1 bg-[#f0e8d1] rounded-full" />
          <div className="text-center text-[#b3b3b3] text-sm font-medium leading-[14px] tracking-wide cursor-pointer">
            LINKEDIN
          </div>
        </div>
      </div>
      <CopyRight />
    </div>
  );
};

export default Footer;
