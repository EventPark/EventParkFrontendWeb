import React from "react";
import Image from "next/image";

export default function VendorSteps() {
  return (
    <div className="md:px-40 px-5">
      <div className="max-w-[506px] text-black text-[32px] md:text-5xl font-medium mb-20">
        Join in as a vendor <br /> in 3 easy steps
      </div>
      <div className="gap-5 md:gap-7 flex mx-auto relative overflow-x-scroll transition-all duration-1200 no-scrollbar">
        <VendorStepsCards />
      </div>
    </div>
  );
}

const VendorStepsCards = () => {
  const steps = [
    {
      title: "Create Account",
      description: "Sign up and create your vendor profile",
      icon: "/icons/account.svg",
    },
    {
      title: "List Services",
      description: "Add your services and set pricing",
      icon: "/icons/services.svg",
    },
    {
      title: "Start Selling",
      description: "Get discovered and start receiving orders",
      icon: "/icons/selling.svg",
    },
  ];

  return (
    <>
      {steps.map((step, index) => (
        <div
          key={index}
          className="min-w-[330px] h-[20rem] flex items-center justify-center rounded-lg bg-white p-6 shadow-md"
        >
          <div className="flex flex-col items-center text-center">
            <Image
              src={step.icon}
              alt={step.title}
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-xl font-medium mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};
