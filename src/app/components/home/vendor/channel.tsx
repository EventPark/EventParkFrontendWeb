import Image from "next/image";
import React from "react";
import { Button } from "../../ui/button";

const ChannelSection = () => {
  return (
    <div className="md:flex-row flex-col px-5 md:px-40 gap-8 flex h-full bg-[#fbf9fa] justify-between py-16 md:py-[114px]">
      <div className=" w-full md:w-[60%]">
        <div className="  md:px-12 py-10 md:py-20 rounded-2xl h-full flex flex-col bg-cover bg-no-repeat">
          <div className="flex flex-col gap-3 md:gap-5 ">
            <h6 className="text-[#7f7f7f80] tracking-[1.68px] text-sm md:text-lg">
              COMMUNICATION CHANNEL
            </h6>
            <div className="max-w-[313px] md:w-[547px] tracking-[-2.4px] md:leading-[70px]  text-[28px] md:text-[56px] font-medium leading-0">
              <span className="text-[#610037]">Communicate</span> <br />
              <span className="text-[#b0809b]">seamlessly with Clients</span>
            </div>
            <div className="max-w-[435px] md:w-auto text-[#666666] text-base md:text-[24px] tracking-[-0.72px] md:leading-[30px]">
              Direct messaging with Event Planners to streamline planning and
              make your event a success.
            </div>
          </div>
          <div className="hidden md:flex justify-start flex-1 h-full items-end md:items-start md:pt-10 pt-24">
            <Button className="bg-primary text-white flex items-center gap-3 p-[14px] w-auto h-[56px]">
              Join as a vendor now
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[40%] max-w-3xl">
        <Image
          src="/images/vendor/channel.png"
          alt="Description"
          width={353}
          height={403}
          layout="responsive"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default ChannelSection;
