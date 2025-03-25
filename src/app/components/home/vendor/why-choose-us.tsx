export default function WhyChooseUsSection() {
  return (
    <div className="md:px-40 px-5 pt-20 md:pb-[91px] pb-[40px]">
      <div className="w-full md:w-[443px] text-center md:mb-20 mb-[20px] text-[32px] md:text-5xl md:font-medium tracking-[-1.44px] md:tracking-[-2.4px] mx-auto">
        Here&apos;s why vendors choose us
      </div>
      <div className="gap-5 md:gap-7 flex mx-auto relative overflow-x-scroll transition-all duration-1200 no-scrollbar pb-[46px]">
        <div className=" min-w-[350px] max-w-[358px] inline-flex h-[497px] flex-col justify-end pb-12 shadow-md rounded-lg flex-shrink-0 bg-cover bg-no-repeat bg-[url('/images/vendor/carousel/bg_one.svg')]">
          <div className="flex flex-col gap-y-4 px-6">
            <div className=" text-[28px] md:text-[32px] font-medium tracking-[-1.28px]w-[259px] ">
              Access Thousands <br />
              of Event Planners all <br />
              in one place
            </div>
            <div className="text-[#8e8e93] text-lg font-medium w-[259px]">
              Gain exposure to a wide audience actively searching for your
              services
            </div>
          </div>
        </div>
        <div className=" min-w-[350px] max-w-[358px] inline-flex h-[497px] flex-col justify-end pb-12 shadow-md rounded-lg flex-shrink-0 bg-cover bg-no-repeat bg-[url('/images/vendor/carousel/bg_two.svg')]">
          <div className="flex flex-col gap-y-4 px-6">
            <div className="w-[259px] text-grey-background text-[28px] md:text-[32px] font-medium tracking-[-1.28px]">
              Superior Online Presence Boost That Attracts Customers With Ease
            </div>
            <div className="text-[#d0b2c3] text-lg font-medium w-[259px]">
              Track your performance and grow your business
            </div>
          </div>
        </div>
        <div className=" min-w-[350px] max-w-[358px] inline-flex h-[497px] flex-col justify-end pb-12 shadow-md rounded-lg flex-shrink-0 bg-cover bg-no-repeat bg-[url('/images/vendor/carousel/bg_three.svg')]">
          <div className="flex flex-col gap-y-4 px-6">
            <div className="w-[259px]  text-[28px] md:text-[32px] font-medium tracking-[-1.28px]">
              Comprehensive Analytics to Track and Grow Your Business
            </div>
            <div className="text-[#8e8e93] text-lg font-medium w-[259px]">
              Track your performance andgrow your business
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
