import React from "react";
import { Button } from "../ui/button";

export default function PlanAnEvent() {
  return (
    <div className="relative z-10 text-center px-6 bg-[url('/images/home/plan-as-event.svg')] bg-center bg-cover h-[442px] md:h-[760px] flex flex-col justify-center items-center">
      <h1 className="text-center font-medium text-white from-white/100 to-white/37 ">
        <span
          className="text-[28px] md:text-[56px]"
          style={{ letterSpacing: "-0.06em" }}
        >
          Ready to plan your
        </span>{" "}
        <br />
        <span
          className="text-[56px] md:text-[80px]"
          style={{ letterSpacing: "-0.05em" }}
        >
          Next Event
        </span>
      </h1>

      <Button className="my-6 font-bold bg-white text-black hover:bg-gray-200 max-w-[200px] mx-auto">
        Plan an Event 🎉
      </Button>
    </div>
  );
}
