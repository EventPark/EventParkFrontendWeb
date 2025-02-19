import React from "react";

type Props = {};

const OnlineMarketPlaceSection = (props: Props) => {
  return (
    <div className="px-5 md:px-40 rounded-[16px] md:rounded-[24px]">
      <div className="bg-[url('/images/vendor/online_marketplace_mobile.png')] md:bg-[url('/images/vendor/online_marketplace.png')] md:h-[720px] xl:h-[1024] sm:h-[760px] h-[650px]  md:bg-center flex flex-col items-start md:items-center gap-3 rounded-[16px] py-10 md:py-20 px-5 bg-cover bg-bottom bg-no-repeat">
        <p className="text-black text-sm md:text-[18px] font-normal tracking-[1.68px] md:tracking-[2.16px]">
          ONLINE MARKETPLACE
        </p>
        <h3 className="text-black text-start md:text-center text-[28px] font-medium leading-[132%] tracking-[-1.26px] md:tracking-[-2.8px] md:text-[56px]">
          List Your Business For
          <br />
          <span className="text-[#BDB59E]">Wider Reach</span>
        </h3>
      </div>
    </div>
  );
};

export default OnlineMarketPlaceSection;
