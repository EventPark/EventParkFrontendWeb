import Image from "next/image";

export default function StatsSection() {
  const stats = [
    { value: "13K+", label: "Partnering Vendors", textColor: "text-gray-800" },
    { value: "17K", label: "Happy Clients", textColor: "text-purple-800" },
    {
      value: "4.8",
      label: "Overall Ratings",
      textColor: "text-purple-800",
      hasStar: true,
    },
    { value: "6.4K", label: "Events Hosted", textColor: "text-gray-800" },
  ];

  return (
    <div className="text-center px-5 md:px-40 py-16 md:py-[112px]">
      <h2 className="text-sm md:text=[18px] uppercase font-normal tracking-[1.68px] mb-[38px]">
        Let the numbers speak!
      </h2>
      <div className="hidden md:flex flex-wrap ">
        <div className="bg-[url('/images/home/statistics/bg-one.svg')] flex-1 bg-no-repeat bg-cover py-9 px-[28px] rounded-xl flex flex-col items-start justify-end min-h-[695px]  h-full md:w-1/3 shadow-md w-full ">
          <h2
            className={`font-bold flex items-center tracking-[-4.8px] text-[120px] text-[#574F38]`}
          >
            13K+
          </h2>
          <p className="text-[20px] font-normal text-start tracking-[1.44px]">
            PARTNERING VENDORS
          </p>
        </div>
        <div className="gap-6 flex-1 flex-col w-1/3 h-full justify-between  flex mx-6">
          <div className="bg-[#F7F2F5] pt-[64px] pb-[40px] px-6 rounded-xl flex flex-1 flex-col items-start justify-start shadow-md w-full ">
            <div
              className={`font-bold tracking-[-4.8px] text-[120px] text-primary`}
            >
              17K
            </div>
            <p className="text-[20px] font-normal text-start tracking-[1.44px]">
              HAPPY CLIENTEL
            </p>
          </div>
          <div className="bg-[url('/images/home/statistics/bg-two.svg')] bg-cover bg-top bg-no-repeat pt-[64px] pb-[40px] px-6 rounded-xl flex flex-1 flex-col items-start justify-start shadow-md w-full ">
            <div className="w-full flex justify-end">
              <Image alt="" width={40} height={40} src={"/icons/star.svg"} />
            </div>
            <h2
              className={`font-bold tracking-[-4.8px] text-[120px] text-primary`}
            >
              4.8
            </h2>
            <p className="text-[20px] font-normal text-start   tracking-[1.44px]">
              OVERALL RATINGS
            </p>
          </div>
        </div>

        <div className="bg-[url('/images/home/statistics/bg-two.svg')] flex-1 bg-no-repeat bg-cover py-9 px-[28px] rounded-xl flex flex-col items-start justify-end shadow-md w-1/2 h-full md:w-1/3 min-h-[695px] ">
          <h2
            className={`font-bold flex items-center tracking-[-4.8px] text-[120px] text-[#574F38]`}
          >
            6.4K
          </h2>
          <p className="text-[20px] font-normal text-start  tracking-[1.44px]">
            EVENTS HOSTED
          </p>
        </div>
      </div>

      <div className="flex gap-4 flex-wrap md:hidden">
        <div className=" py-9 bg-[url('/images/home/statistics/bg-one.svg')] px-[14px] rounded-xl flex flex-col items-start justify-start shadow-md w-1/2">
          <h2
            className={`font-bold  flex items-center tracking-[-1.92px] text-5xl`}
          >
            13K+
          </h2>
          <p className="text-xs font-normal text-start   tracking-[1.44px]">
            PARTNERING VENDORS
          </p>
        </div>
        <div className="bg-[#F7F2F5] py-9 px-[14px] rounded-xl flex flex-1 flex-col items-start justify-start shadow-md w-1/2">
          <div
            className={`font-bold  flex items-center tracking-[-1.92px] text-5xl`}
          >
            17K
          </div>
          <p className="text-xs font-normal text-start   tracking-[1.44px]">
            HAPPY CLIENTEL
          </p>
        </div>
        <div className="bg-[url('/images/home/statistics/bg-two.svg')] bg-cover bg-top bg-no-repeat  py-9 px-[14px] rounded-xl flex flex-col items-start justify-start shadow-md w-full">
          <h2
            className={`font-bold  flex items-center tracking-[-1.92px] text-5xl`}
          >
            6.4K
          </h2>
          <p className="text-xs font-normal text-start   tracking-[1.44px]">
            EVENTS HOSTED
          </p>
        </div>
        <div className="bg-[#F7F2F5] py-9 px-[14px] rounded-xl flex flex-col items-start justify-start shadow-md w-full">
          <div className="w-full flex justify-end">
            <Image alt="" width={20} height={20} src={"/icons/star.svg"} />
          </div>
          <h2
            className={`font-bold  flex items-center tracking-[-1.92px] text-5xl`}
          >
            4.8
          </h2>
          <p className="text-xs font-normal text-start   tracking-[1.44px]">
            OVERALL RATINGS
          </p>
        </div>
      </div>
    </div>
  );
}
