import Image from "next/image";
import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 32, height = 32 }) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={"/images/brand/navbar_logo.svg"}
        alt="Vendor Perk Logo"
        width={width}
        height={height}
      />
      <span className=" text-white text-[20px] md:text-[24px]  font-bold   tracking-[-0.02em] text-center  ">
        VendorPerk.
      </span>
    </div>
  );
};

export default Logo;
