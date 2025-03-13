import Image from "next/image";
import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
  nature?: "waitlist" | "home";
}

const Logo: React.FC<LogoProps> = ({
  width = 32,
  height = 32,
  nature = "home",
}) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={
          nature == "waitlist"
            ? "/images/brand/waitlist_logo.svg"
            : "/images/brand/navbar_logo.svg"
        }
        alt="Event Park Perk Logo"
        width={width}
        height={height}
      />
      <span
        className={
          nature == "waitlist"
            ? "text-primary md:text-[24px] font-bold tracking-[-0.02em] text-center"
            : "text-white text-[20px] md:text-[24px] font-bold tracking-[-0.02em] text-center"
        }
      >
        EventPark.
      </span>
    </div>
  );
};

export default Logo;
