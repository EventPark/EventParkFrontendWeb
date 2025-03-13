import Image from "next/image";
import { Button } from "../ui/button";

export default function VendorMessagingSection() {
  return (
    <div className="md:flex-row flex-col px-[1.25rem] md:px-[10rem] gap-[2rem] flex h-full">
      <div className="w-full md:w-[40%] max-w-3xl order-1 md:order-2 ">
        <Image
          src="/images/home/vendor_chat_mobile.svg"
          alt="Description"
          width={353}
          height={403}
          layout="responsive"
          className="flex md:hidden"
          style={{ objectFit: "cover" }}
        />
        <Image
          src="/images/home/vendor_chat.svg"
          alt="Description"
          width={353}
          height={403}
          layout="responsive"
          className=" md:flex hidden"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="order-2 md:order-1 w-full md:w-[60%]">
        <div className="relative px-[1.25rem] md:px-[3rem] py-[2.5rem] md:py-[5rem] bg-[#F5F4FA] rounded-2xl h-full flex flex-col bg-[##F5F4FA] bg-cover bg-no-repeat">
          <div className="flex flex-col gap-[0.75rem] md:gap-[1.25rem]">
            <h6 className="text-[#7f7f7f80] tracking-[1.68px] text-[0.875rem] md:text-[1.125rem]">
              VENDOR MESSAGING
            </h6>
            <h3 className="text-[1.75rem] md:text-[3.5rem] text-[#4D4A68] font-medium md:leading-[3.75rem] leading-[2.31rem] tracking-[-0.0788rem]">
              Connect, chat and <br />
              <span className="text-[#CCC9E7]">Plan Effortlessly</span>
            </h3>
            <p className="text-[1rem] md:text-[1.5rem] text-[#8E8E93] tracking-[-0.0375rem] fon-normal">
              Direct messaging with vendors to streamline planning and make your
              event a success.
            </p>
          </div>
          <div className="flex justify-start flex-1 h-full items-end md:items-start md:pt-[1rem] pt-[6rem]">
            <Button className="bg-[#00001B] text-white flex items-center gap-[0.75rem] p-[0.875rem] w-auto h-[3.5rem]">
              🚀 Start Planning Now
            </Button>
          </div>

          <div className="absolute bottom-0 right-0 hidden md:block 2xl:w-[28rem] 2xl:h-[28rem] w-[15rem] h-[15rem]">
            <Image src="images/home/vendor_messaging.svg" fill alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
