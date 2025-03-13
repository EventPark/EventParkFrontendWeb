import Image from "next/image";
import { Button } from "../ui";

export default function BudgetSection() {
  return (
    <div className="px-5 md:px-40 pt-18 md:pt-[140px]">
      <p className="pb-0 md:pb-8 text-[#7f7f7f80] tracking-[1.68px] text-sm md:text-lg">
        AWESOME FEATURES
      </p>
      <div className="md:flex-row flex-col gap-8 flex h-full">
        <div className="w-full md:w-[40%] max-w-3xl order-1 md:order-2 ">
          <Image
            src="/images/home/budget_sample.png"
            alt="Description"
            width={353}
            height={403}
            layout="responsive"
            className="md:flex hidden"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="order-2 md:order-1 w-full md:w-[60%] overflow-hidden">
          <div className="px-5 md:px-12 py-10 md:py-20 bg-[#F7f2f5] rounded-2xl h-full flex flex-col bg-cover bg-no-repeat relative">
            <div className="flex flex-col gap-3 md:gap-5 ">
              <h6 className="text-[#7f7f7f80] tracking-[1.68px] text-sm md:text-lg">
                BUDGET PLANNER
              </h6>
              <h3 className="text-[28px] md:text-[56px] text-primary font-medium md:leading-[60px] leading-[36.96px] tracking-[-1.26px]">
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
            <div className="absolute bottom-0 right-0 hidden md:block 2xl:w-[28rem] 2xl:h-[28rem] w-[15rem] h-[15rem]">
              <Image src="images/home/budget_vector.svg" fill alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
