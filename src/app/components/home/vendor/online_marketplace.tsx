import Image from "next/image";
import React from "react";

type Props = {};

const OnlineMarketPlaceSection = (props: Props) => {
  return (
    <div className="px-5 md:px-40 rounded-[16px] md:rounded-[24px]">
      <div className="bg-[#FCFAF6] flex flex-col items-start md:items-center gap-3 rounded-[16px] pt-10 md:pt-20 px-5 md:px-[76px] ">
        <p className="text-black text-sm md:text-[18px] font-normal tracking-[1.68px] md:tracking-[2.16px]">
          ONLINE MARKETPLACE
        </p>
        <h3 className="text-black text-start md:text-center text-[28px] font-medium leading-[132%] tracking-[-1.26px] md:tracking-[-2.8px] md:text-[56px]">
          List Your Business For
          <br />
          <span className="text-[#BDB59E]">Wider Reach</span>
        </h3>
        <div className=" md:mt-[72px] w-full min-h-[310px] md:min-h-[420px] relative pt-0 ">
          <Image
            alt="Online marketplace illustration"
            src="/images/vendor/online_marketplace.png"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default OnlineMarketPlaceSection;
