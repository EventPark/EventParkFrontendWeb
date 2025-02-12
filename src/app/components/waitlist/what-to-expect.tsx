import Image from "next/image";

const WhatToExpect = () => {
  return (
    <div className="pt-0 md:pt-[72px] flex flex-col flex-1 gap-6 items-start md:items-center justify-center md:px-40 px-5">
      <h6 className="text-sm md:text-[20px] font-medium leading-[20px] tracking-[2.4px] md:tracking-[3.2px] text-[#8E8E93]">
        VENDORPERK • WHAT TO EXPECT!
      </h6>
      <p className="text-[22px] md:max-w-[740px]  text-left md:text-center md:text-[28px] font-normal leading-[50.4px] md:tracking-[-0.84px] tracking-[-0.66px]">
        <span className="hidden md:flex">
          VendorPerk is your go-to platform for effortless event planning.
          Discover top vendors, manage budgets, and book seamlessly. Join the
          waitlist for early access!
        </span>{" "}
        <span className="md:hidden flex">
          VendorPerk is your go-to platform for effortless event planning.
          <br />
          Discover top vendors, manage budgets, and book seamlessly. Join the
          waitlist for early access!
        </span>{" "}
      </p>

      <div className="flex flex-col md:flex-row pt-16 w-full gap-y-5 max-w-[1120px] flex-wrap">
        <div className="bg-[#FBF8F1] rounded-[14px] px-5 pt-7 pb-10 flex flex-col gap-y-14 w-full md:w-[calc(33.333%-20px)] md:mr-5 md:mb-0">
          <Image src={"/icons/stats.svg"} alt="" width={56} height={56} />
          <div>
            <h4 className="text-[28px] font-medium text-black">
              Budget Planner
            </h4>
            <p className="text-[#8E8E93] text-[16px] tracking-[-0.48px] ">
              Stay on top of your event expenses with smart, stress-free
              budgeting.
            </p>
          </div>
        </div>
        <div className="bg-[#F7F2F5] rounded-[14px] px-5 pt-7 pb-10 flex flex-col gap-y-14 w-full md:w-[calc(33.333%-20px)] md:mr-5 md:mb-0">
          <Image
            src={"/icons/users-circle.svg"}
            alt=""
            width={56}
            height={56}
          />
          <div>
            <h4 className="text-[28px] font-medium text-black">
              Guest Management
            </h4>
            <p className="text-[#8E8E93] text-[16px] tracking-[-0.48px]">
              Easily track RSVPs, send invites, and manage your guest list in
              one place.
            </p>
          </div>
        </div>
        <div className="bg-[#F7F2F5] rounded-[14px] px-5 pt-7 pb-10 flex flex-col gap-y-14 w-full md:w-[calc(33.333%-20px)] md:mb-0">
          <Image src={"/icons/wand.svg"} alt="" width={56} height={56} />
          <div>
            <h4 className="text-[28px] font-medium text-black">
              AI Event Planning Partner
            </h4>
            <p className="text-[#8E8E93] text-[16px] tracking-[-0.48px]">
              Smart recommendations for effortless planning
            </p>
          </div>
        </div>
        <div className="bg-[#FBF8F1] rounded-[14px] px-5 pt-7 pb-10 flex flex-col gap-y-14 w-full md:w-[calc(33.333%-20px)] md:mr-5  md:mb-0">
          <Image src={"/icons/grid.svg"} alt="" width={56} height={56} />
          <div>
            <h4 className="text-[28px] font-medium text-black">
              Event Websites
            </h4>
            <p className="text-[#8E8E93] text-[16px] tracking-[-0.48px]"></p>
            <p className="text-[#8E8E93] text-[16px] tracking-[-0.48px]">
              Create a stunning, shareable event page for seamless coordination.
            </p>
          </div>
        </div>
        <div className="bg-[#F7F2F5] rounded-[14px] px-5 pt-7 pb-10  flex flex-col gap-y-14 w-full   md:w-[calc(33.333%-20px)] md:mr-5">
          <Image src={"/icons/gift.svg"} alt="" width={56} height={56} />
          <div>
            <h4 className="text-[28px] font-medium text-black">
              Gifting registry
            </h4>
            <p className="text-[#8E8E93] text-[16px] tracking-[-0.48px]">
              Let guests celebrate you with the perfect gifts, hassle-free.
            </p>
          </div>
        </div>
        <div className="bg-[#F7F2F5] rounded-[14px] px-5 pt-7 pb-10  flex flex-col gap-y-14 w-full   md:w-[calc(33.333%-20px)]  ">
          <Image src={"/icons/misc.svg"} alt="" width={56} height={56} />
          <div>
            <h4 className="text-[28px] font-medium text-black">
              So much more...
            </h4>
            <p className="text-[#8E8E93] text-[16px] tracking-[-0.48px]">
              Everything you need for stress-free event planning!
            </p>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row pb-16 w-full gap-x-5 max-w-[1120px]">
        <div className="bg-[#FBF8F1] rounded-[14px] px-5 pt-7 pb-10  flex flex-col gap-y-14  w-1/2">
          <Image src={"/icons/grid.svg"} alt="" width={56} height={56} />
          <div>
            <h4 className="text-[28px] font-medium text-black">
              Event Websites
            </h4>
            <p className="text-[#8E8E93] text-[16px] tracking-[-0.48px]">
              Create a stunning, shareable event page for seamless coordination.
            </p>
          </div>
        </div>
        <div className="bg-[#F7F2F5] rounded-[14px] px-5 pt-7 pb-10  flex flex-col gap-y-14 w-1/2">
          <Image src={"/icons/gift.svg"} alt="" width={56} height={56} />
          <div>
            <h4 className="text-[28px] font-medium text-black">
              Gifting registry
            </h4>
            <p className="text-[#8E8E93] text-[16px] tracking-[-0.48px]">
              Let guests celebrate you with the perfect gifts, hassle-free.
            </p>
          </div>
        </div>
        <div className="bg-[#F7F2F5] rounded-[14px] px-5 pt-7 pb-10  flex flex-col gap-y-14 w-1/2">
          <Image src={"/icons/misc.svg"} alt="" width={56} height={56} />
          <div>
            <h4 className="text-[28px] font-medium text-black">
              Budget Planner
            </h4>
            <p className="text-[#8E8E93] text-[16px] tracking-[-0.48px]">
              Everything you need for stress-free event planning!
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default WhatToExpect;
