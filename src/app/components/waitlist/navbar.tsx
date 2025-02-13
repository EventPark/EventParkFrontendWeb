"use client";

import React from "react";

import Logo from "../ui/logo";
import { motion } from "framer-motion";
import { useUserType } from "../../context/UserTypeContext";

const WaitlistNavbar = () => {
  const { userType, setUserType } = useUserType();

  return (
    <nav className="w-full pt-12 px-5 md:pt-16 md:px-40 bg-transparent inset-0 top-0 left-0 z-10 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto flex justify-center">
        {/* Desktop Navigation (3 Items) */}
        <Logo width={36} height={36} nature="waitlist" />
      </div>

      {/* Mobile Navigation (2 Items) */}
      <div
        className={`relative flex ${
          userType === "vendor" ? "bg-[#F6F1E3]" : " bg-[#f5e7ed]"
        } p-1 rounded-full w-64 mx-auto my-8`}
      >
        <motion.div
          className={`absolute top-0 bottom-0 left-0 ${
            userType === "vendor" ? "w-1/2" : " w-1/2"
          } bg-white rounded-full shadow-md`}
          animate={{ x: userType === "vendor" ? "100%" : "0%" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />
        <button
          className={`z-10 flex-1 text-center py-2 rounded-full transition-colors text-sm   ${
            userType === "user"
              ? "text-[#57092b] font-semibold"
              : "text-[#808080]"
          }`}
          onClick={() => setUserType("user")}
        >
          For You
        </button>
        <button
          className={`z-10 flex-1 text-center py-2 rounded-full transition-colors text-sm   ${
            userType === "vendor"
              ? "text-[#716952] font-semibold"
              : "text-[#808080]"
          }`}
          onClick={() => setUserType("vendor")}
        >
          For Vendors
        </button>
      </div>
    </nav>
  );
};

export default WaitlistNavbar;
