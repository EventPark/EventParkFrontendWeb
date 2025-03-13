import React, { useState } from "react";
import Logo from "./logo";
import Image from "next/image";
import { slide as Menu } from "react-burger-menu";
import { UserType, useUserType } from "@/app/context/UserTypeContext";
import { Button } from "./button";

const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const { userType, setUserType } = useUserType();

  const updateUserType = (userType: UserType) => {
    setIsMobileNavOpen(false);
    setUserType(userType);
  };
  return (
    <div id="outer-container" className="bg-slate-400 w-full ">
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
                onClick={() => setIsMobileNavOpen(true)}
                src={"/icons/menu-circle.svg"}
                alt=""
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </nav>
      <Menu
        right
        isOpen={isMobileNavOpen}
        className="bg-[url('/images/home/mobile_nav_bg.svg')] bg-cover bg-no-repeat top-0 "
        menuClassName=" w-full"
        styles={{
          bmMenuWrap: {
            width: "100%",
          },
        }}
        customCrossIcon={false}
      >
        <div
          id="page-wrap"
          className="space-y-64 text-center px-5 py-4 flex flex-col items-center justify-between h-full "
        >
          <div className="space-y-4 text-center px-5 py-4 flex flex-col items-center justify-center">
            <div
              className="mx-auto text-center flex items-center justify-end w-full"
              onClick={() => setIsMobileNavOpen(false)}
            >
              <Image
                src={"/icons/close-circle-mobile.svg"}
                width={36}
                height={36}
                alt=""
              />
            </div>
            <div className="mx-auto text-center flex items-center justify-center pb-10">
              <Logo />
            </div>
            <div
              onClick={() => updateUserType("user")}
              className={`max-w-[203px] mx-auto text-[#c099af] py-4 text-2xl font-normal block w-full ${
                userType == "user" &&
                "max-w-[300px] text-[40px] font-bold text-white px-8 py-6 bg-white/10 rounded-[64px] backdrop-blur-xl justify-center items-center "
              }`}
            >
              Home
            </div>
            <div
              className={`max-w-[203px] mx-auto text-[#c099af] py-4 text-2xl font-normal block w-full`}
            >
              Company
            </div>
            <div
              onClick={() => updateUserType("vendor")}
              className={`max-w-[203px] mx-auto text-[#c099af] py-4 text-2xl font-normal block w-full ${
                userType == "vendor" &&
                "max-w-[300px] text-[40px] font-bold text-white px-8 py-6 bg-white/10 rounded-[64px] backdrop-blur-xl justify-center items-center "
              }`}
            >
              For Vendors
            </div>
            <div
              className={`max-w-[203px] mx-auto text-[#c099af] py-4 text-2xl font-normal block w-full flex-1`}
            >
              Marketplace
            </div>
          </div>
          <div className="gap-y-4 flex flex-col px-2">
            <Button className="py-5 bg-[#F0E8D1] text-lg font-bold">
              Create an Account
            </Button>
            <Button className="py-5 bg-primary text-white text-lg font-bold">
              Sign in to your account
            </Button>
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default NavBar;
