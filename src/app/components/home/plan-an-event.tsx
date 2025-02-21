import React from "react";
import { Button } from "../ui/button";
import { useUserType } from "@/app/context/UserTypeContext";

export default function PlanAnEvent() {
  const { userType } = useUserType();
  return (
    <div
      className={`${
        userType == "user"
          ? "bg-[url('/images/home/plan-as-event.svg')]"
          : "bg-[url('/images/vendor/plan-as-event-vendor-mobile.svg')] md:bg-[url('/images/vendor/plan-as-event-vendor.svg')]"
      } relative z-10 text-center px-6  bg-center bg-cover h-[442px] md:h-[760px] flex flex-col justify-center items-center md:max-w-[1920px] mx-auto`}
    >
      <h1 className="text-center font-medium text-white from-white/100 to-white/37 ">
        <span
          className="text-[28px] md:text-[56px]"
          style={{ letterSpacing: "-0.06em" }}
        >
          {userType == "user" ? "  Ready to plan your" : "Ready to grow your"}
        </span>{" "}
        <br />
        <span
          className="text-[56px] md:text-[80px]"
          style={{ letterSpacing: "-0.05em" }}
        >
          {userType == "user" ? "Next Event" : "Your Business"}
        </span>
      </h1>

      <Button className="my-6 font-bold bg-white text-black hover:bg-gray-200 max-w-[200px] mx-auto">
        {userType == "user" ? "Plan an Event 🎉" : "Get Started Now"}
      </Button>
    </div>
  );
}
