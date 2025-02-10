import React from "react";
import Logo from "./logo";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="w-full pt-12 px-5 md:pt-16 md:px-40 bg-transparent  absolute inset-0 top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto  flex justify-between">
        {/* Desktop Navigation (3 Items) */}
        <div className="hidden md:flex w-full justify-between font-bold text-white text-sm">
          <div className="px-3 gap-2 justify-between  h-10 backdrop-blur-[24px] bg-[#FFFFFF33] rounded-full flex items-center  ">
            <span>EN</span>
            <Image
              src={"/icons/arrow-circle-down.svg"}
              alt=""
              width={20}
              height={20}
            />
          </div>
          <Logo width={36} height={36} />
          <div className="px-3 gap-2 justify-between  h-10 backdrop-blur-[24px] bg-[#FFFFFF33] rounded-full flex items-center  ">
            <span>My Account</span>
            <Image
              src={"/icons/arrow-circle-down.svg"}
              alt=""
              width={20}
              height={20}
            />
          </div>
        </div>

        {/* Mobile Navigation (2 Items) */}
        <div className="flex md:hidden w-full justify-between text-black text-lg font-medium">
          <Logo />
          <div className="flex gap-2">
            <Image
              src={"/icons/user-circle.svg"}
              alt=""
              width={40}
              height={40}
            />
            <Image
              src={"/icons/menu-circle.svg"}
              alt=""
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
