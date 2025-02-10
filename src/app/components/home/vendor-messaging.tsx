import Image from "next/image";
import { Button } from "../ui/button";

export default function VendorMessagingSection() {
  return (
    <div className="md:flex-row flex-col px-5 md:px-40 gap-8 flex h-full">
      <div className="w-full md:w-[40%] max-w-3xl order-1 md:order-2 ">
        <Image
          src="/images/home/vendor_chat_mobile.svg"
          alt="Description"
          width={353}
          height={403}
          layout="responsive"
          className="flex md:hidden"
          objectFit="cover"
        />
        <Image
          src="/images/home/vendor_chat.svg"
          alt="Description"
          width={353}
          height={403}
          layout="responsive"
          className=" md:flex hidden"
          objectFit="cover"
        />
      </div>
      <div className="order-2 md:order-1 w-full md:w-[60%]">
        <div className="px-5 md:px-12 py-10 md:py-20 bg-[#F5F4FA] rounded-2xl h-full flex flex-col bg-[url('/images/home/vendor_messaging.svg')] bg-cover bg-no-repeat">
          <div className="flex flex-col gap-3 md:gap-5 ">
            <h6 className="text-[#7f7f7f80] tracking-[1.68px] text-sm md:text-lg">
              VENDOR MESSAGING
            </h6>
            <h3 className="text-[28px] md:text-[56px] text-[#4D4A68]  font-medium md:leading-[60px] leading-[36.96px] tracking-[-1.26px]">
              Connect, chat and <br />
              <span className="text-[#CCC9E7]">Plan Effortlessly</span>
            </h3>
            <p className="text-[16px] md:text-2xl text-[#8E8E93] tracking-[-0.6px] fon-normal">
              Direct messaging with vendors to streamline planning and make your
              event a success.
            </p>
          </div>
          <div className="flex justify-start flex-1 h-full items-end md:items-start md:pt-4 pt-24">
            <Button className="bg-[#00001B] text-white flex items-center gap-3 p-[14px] w-auto h-[56px]">
              🚀 Start Planning Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
