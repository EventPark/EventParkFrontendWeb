import React from "react";
import { Button } from "../../ui";
import Image from "next/image";

const HassleFreeSection = () => {
  return (
    <div className="md:flex-row flex-col px-5 md:px-40 gap-8 flex h-full justify-between  ">
      <div className="w-full md:w-[40%] max-w-3xl order-2 md:order-1">
        <Image
          src="/images/vendor/hassle.png"
          alt="Description"
          width={353}
          height={403}
          layout="responsive"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-full md:w-[60%] md:bg-[url('/images/vendor/hassle_bg.svg')] bg-no-repeat bg-cover rounded-3xl flex flex-col order-1 md:order-2">
        <div className="px-5  md:px-12 py-10 md:py-20 rounded-2xl h-full flex flex-col bg-cover bg-no-repeat">
          <div className="flex flex-col gap-3 md:gap-5 ">
            <h6 className="text-[#3D3D3D] tracking-[1.68px] text-sm md:text-lg">
              AUTOMATED PAYOUTS
            </h6>
            <div className="max-w-[313px] md:max-w-[547px]  tracking-[-2.4px] md:leading-[70px]  text-[28px] md:text-[56px] font-medium leading-0">
              <span className="text-[#090909]">Hassle-Free</span> <br />
              <span className="text-[#8E8E93]">Automated Payouts</span>
            </div>
            <div className="max-w-[435px] md:w-auto text-[#8E8E93] text-base md:text-[24px] tracking-[-0.72px] md:leading-[30px]">
              Receive payments right into your account automatically and right
              on time
            </div>
          </div>
          <div className="hidden md:flex justify-start flex-1 h-full items-end md:items-start md:pt-10 pt-24">
            <Button className="bg-black text-white flex items-center gap-3 p-[14px] w-auto h-[56px]">
              Join as a vendor
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HassleFreeSection;
