import React from "react";
import Image from "next/image";

export default function VendorSteps() {
  return (
    <div className="md:px-40 px-5 md:pt-[96px]  ">
      <div className="max-w-[506px] text-black text-[32px] md:leading-[130%] md:text-5xl md:font-medium mb-8 md:mb-10">
        Join in as a vendor <br /> in 3 easy steps
      </div>
      <div className="gap-5 md:gap-7 flex mx-auto relative overflow-x-scroll transition-all duration-1200 no-scrollbar pb-[46px]">
        <VendorStepsCards />
      </div>
    </div>
  );
}

const VendorStepsCards = () => {
  const steps = [
    {
      title: "Create Your Profile",
      description:
        "Sign up today and create a standout vendor profile to showcase your services, attract clients, and grow your business.",
      backgroundColor: "bg-gradient-to-b from-[#F7F2F5] to-white",
    },
    {
      title: "Showcase Your Services",
      description:
        "Sign up today and create a standout vendor profile to showcase your services, attract clients, and grow your business.",
      backgroundColor: "bg-gradient-to-b from-[#FCFAF6] via-white to-white",
    },
    {
      title: "Start Receiving Bookings",
      description:
        "Sign up today and create a standout vendor profile to showcase your services, attract clients, and grow your business.",
      backgroundColor: "bg-gradient-to-b from-[#F5F4FA] via-white to-white",
    },
  ];

  return (
    <>
      {steps.map((step, index) => (
        <div
          key={index}
          className={`min-w-[330px] h-[23.875rem] md:h-[29rem] flex items-start pt-12 pb-0 justify-start rounded-lg p-6 ${step.backgroundColor}`}
        >
          <div className="flex flex-col items-left gap-y-2.5 md:w-[80%]">
            <h3 className="text-4xl font-medium mb-2 text-[#333333]">
              {step.title}
            </h3>
            <p className="text-[#8E8E93] text-md md:leading-[160%]">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
