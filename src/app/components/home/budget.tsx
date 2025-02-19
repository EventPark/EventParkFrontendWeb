import Image from "next/image";
import { Button } from "../ui/button";

export default function BudgetSection() {
  return (
    <div className="px-5 md:px-40 pt-18 md:pt-[140px] ">
      <p className="pb-0 md:pb-8 text-[#7f7f7f80] tracking-[1.68px] text-sm md:text-lg">
        AWESOME FEATURES
      </p>
      <div className="md:flex-row flex-col gap-8 flex h-full">
        <div className="w-full md:w-[40%] max-w-3xl order-1 md:order-2 ">
          <Image
            src="/images/home/budget_sample.svg"
            alt="Description"
            width={353}
            height={403}
            layout="responsive"
            className="md:flex hidden"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="order-2 md:order-1 w-full md:w-[60%]">
          <div className="px-5 md:px-12 py-10 md:py-20 bg-[#F5F4FA] rounded-2xl h-full flex flex-col bg-[url('/images/home/budget.svg')] md:bg-[url('/images/home/budget_web.svg')] bg-cover bg-no-repeat">
            <div className="flex flex-col gap-3 md:gap-5 ">
              <h6 className="text-[#7f7f7f80] tracking-[1.68px] text-sm md:text-lg">
                BUDGET PLANNER
              </h6>
              <h3 className="text-[28px] md:text-[56px] text-primary   font-medium md:leading-[60px] leading-[36.96px] tracking-[-1.26px]">
                Stay on Budget,{" "}
                <span className="text-primary-lighter">
                  Plan <br /> with Confidence.
                </span>
              </h3>
              <p className="text-base md:text-2xl text-[#7f7f7f] tracking-[-0.6px] fon-normal">
                There&apos;s always a vendor that meets <br /> your needs.
              </p>
              <Image
                src="/images/home/budget_sample-cropped.png"
                alt="Description"
                width={353}
                height={290}
                layout="responsive"
                style={{ objectFit: "cover" }}
                className="flex md:hidden"
              />
              <div className="flex justify-start flex-1 h-full items-end md:items-start pt-4">
                <Button className="bg-primary text-white flex items-center gap-3 p-[14px] w-auto h-[56px]">
                  <Image
                    src={"/icons/calculator.svg"}
                    alt=""
                    height={20}
                    width={20}
                  />
                  Try Budget Planning
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="py-[72px] flex flex-col gap-7 ">
    //   <p className="text-[14px] px-5 font-bold leading-[14px] tracking-[2.24px] text-[#8E8E93]">
    //     AWESOME FEATURES
    //   </p>
    //   <div
    //     style={{
    //       backgroundSize: "cover",
    //       backgroundPosition: "bottom center",
    //       backgroundRepeat: "no-repeat",
    //     }}
    //     className="relative h-[640px] bg-[url('/images/home/budget.svg')] flex flex-col py-10"
    //   >
    //     <div className="px-5 gap-3 ">
    //       <p className="text-sm font-medium text-[#7F7F7F80] tracking-[1.68px]">
    //         BUDGET PLANNER
    //       </p>
    //       <p className="text-[28px] text-primary font-medium leading-[36.96px] tracking-[-1.26px]">
    //         Stay on Budget,{" "}
    //         <span className="text-primary-lighter">
    //           Plan <br /> with Confidence.
    //         </span>
    //       </p>
    //       <p className="text-[#7f7f7f] text-sm">
    //         Find the right vendors, create amazing <br /> events, and let us
    //         handle the rest
    //       </p>
    //     </div>
    //     <div className="py-0 px-2.5 pt-12">
    //       <div
    //         className="px-[14px] py-[16px] relative flex flex-col bg-white "
    //         style={{
    //           borderRadius: 12,
    //           boxShadow:
    //             "0px 39.684px 198.422px 0px rgba(0, 0, 0, 0.06), 0px 67.494px 84.368px 0px rgba(166, 166, 166, 0.10), 0px 33.747px 33.747px 0px rgba(166, 166, 166, 0.04)",
    //         }}
    //       >
    //         <span className="text-[#808080] py-2 text-[10px] font-medium leading-normal tracking-[1px] ">
    //           💍 THE OLADELE’S WEDDING BUDGET
    //         </span>
    //         <span className="font-bold text-[28px]">
    //           ₦10,000,000<span className="text-primary-lighter">.00</span>
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
