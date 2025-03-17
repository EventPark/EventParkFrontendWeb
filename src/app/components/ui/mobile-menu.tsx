import { slide as Menu } from "react-burger-menu";
import Image from "next/image";
import Logo from "./logo";
import { Button } from ".";
import { UserType, useUserType } from "@/app/context/UserTypeContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { userType, setUserType } = useUserType();

  const updateUserType = (type: UserType) => {
    onClose();
    setUserType(type);
  };

  return (
    <Menu
      right
      isOpen={isOpen}
      className="bg-[url('/images/home/mobile_nav_bg.svg')] bg-cover bg-no-repeat top-0"
      menuClassName="w-full"
      styles={{
        bmMenuWrap: {
          width: "100%",
        },
      }}
      customCrossIcon={false}
    >
      <div className="space-y-32 text-center px-5 py-4 flex flex-col items-center justify-between h-full">
        <div className="space-y-2 text-center py-4 flex flex-col items-center justify-center">
          <div
            className="mx-auto text-center flex items-center justify-end w-full"
            onClick={onClose}
          >
            <Image
              src="/icons/close-circle-mobile.svg"
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
            className={`max-w-[203px] mx-auto text-[#c099af] py-4 text-xl font-normal block w-full ${
              userType == "user" &&
              "max-w-[300px] text-[40px] font-bold text-white px-8 py-6 bg-white/10 rounded-[64px] backdrop-blur-xl justify-center items-center"
            }`}
          >
            Home
          </div>
          <div
            className={`max-w-[203px] mx-auto text-[#c099af] py-4 text-xl font-normal block w-full`}
          >
            Company
          </div>
          <div
            onClick={() => updateUserType("vendor")}
            className={`max-w-[203px] mx-auto text-[#c099af] py-4 text-xl font-normal block w-full ${
              userType == "vendor" &&
              "max-w-[300px] text-[40px] font-bold text-white px-8 py-6 bg-white/10 rounded-[64px] backdrop-blur-xl justify-center items-center"
            }`}
          >
            For Vendors
          </div>
          <div
            onClick={() => updateUserType("marketplace")}
            className={`max-w-[203px] mx-auto text-[#c099af] py-4 text-xl font-normal block w-full flex-1 ${
              userType == "marketplace" &&
              "max-w-[300px] text-[40px] font-bold text-white px-8 py-6 bg-white/10 rounded-[64px] backdrop-blur-xl justify-center items-center"
            }`}
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
  );
}
