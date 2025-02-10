import Image from "next/image";
import { Button } from "../ui/button";

export default function VendorSection() {
  return (
    <div
      className="pt-[74px] pb-[91px]  bg-center bg-no-repeat bg-[url('/images/home/marketplace_album_mobile.png')] md:bg-[url('/images/home/marketplace_album.png')]"
      style={{
        backgroundSize: "cover",
        backgroundColor: "linear-gradient(180deg, #FBF8F1 0%, #F5EFDF 100%)",
      }}
    >
      <div className="px-5 md:px-40 gap-3">
        <h6 className="text-[#A39B84] tracking-[1.68px] text-sm md:text-lg">
          EXTENSIVE VENDOR MARKETPLACE
        </h6>
        <h3 className="flex flex-col text-[32px] md:text-[56px] tracking-[-1.44px]  md:tracking-[-2.8px] md:font-medium font-normal gap-0 leading-[132%]">
          <span className="text-primary">Access over 13K+</span>{" "}
          <span className="text-[#716952]">
            {" "}
            <span className="md:text-black">Vendors to</span> Make Your{" "}
          </span>
          <span className="text-[#716952] ">Event Unforgettable</span>
        </h3>
        <Button className="my-6 font-bold gap-3 text-white hover:bg-gray-200 flex items-center bg-primary">
          Find Vendors
          <Image
            src="/icons/arrow-circle-right.svg"
            alt="Arrow Right"
            width={20}
            height={20}
          />
        </Button>
      </div>

      <div className="h-[540px] 2xl:h-[1024px]" />

      <div className="flex flex-col items-end px-5 md:px-40">
        <p className="text-[#8E8E93] tracking-[-1.2px] text-2xl md:text-[32px] font-medium">
          PHOTOGRAPHY
        </p>
        <p className="text-[#000] tracking-[-1.2px] text-sm md:text-lg font-medium">
          1,440 VENDORS
        </p>
      </div>
    </div>
  );
}
