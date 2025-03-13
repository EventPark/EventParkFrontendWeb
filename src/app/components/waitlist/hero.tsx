import React from "react";
import WaitlistNavbar from "./navbar";
import { Button } from "../ui";
import Image from "next/image";
import { useUserType } from "@/app/context/UserTypeContext";
import { useModal } from "@/app/context/ModalContext";
import Modal from "@/app/components/ui/modal";
import WaitlistModal from "../../../../public/images/home/waitlist-modal";
const Hero = () => {
  const { userType } = useUserType();
  const { openModal, isOpen, closeModal } = useModal();

  return (
    <div className="bg-[url('/images/waitlist/hero_bg.svg')] bg-cover bg-center bg-no-repeat mb-[93px]  w-full">
      <WaitlistNavbar />
      <div className="w-full flex flex-col text-center justify-center items-center justify-self-center">
        <h1 className=" font-bold flex flex-col">
          {userType == "user" ? (
            <>
              <div className="text-center text-[#d0b2c3] text-[56px] font-bold leading-[56px] tracking-[-4px]">
                Big Plans?
              </div>
              <div className="text-center text-primary text-[64px] font-bold leading-[64px] tracking-[-4px]">
                We got You!
              </div>
            </>
          ) : (
            <>
              <div className="text-center text-[#d6ceb7] text-[56px] font-bold leading-[48px] tracking-[-4px]">
                Reach More
              </div>
              <div className="text-center text-[#0b0300] text-[64px] font-bold leading-[64px] tracking-[-4px]">
                With Less
              </div>
            </>
          )}
        </h1>
        <p className="max-w-[220px] md:max-w-[392px] py-4 text-sm md:text-[20px] font-normal font-weight-400 leading-[30px] tracking-[-0.6px] text-[#666]">
          Join the waitlist for early access to seamless event planning with
          VendorPerk!
        </p>
        <Button
          onClick={openModal}
          className={`${
            userType === "user"
              ? "bg-primary text-white"
              : "bg-[#f0e8d1] text-[#3e361f]"
          } text-[18px] font-medium leading-[28px] tracking-[-0.54px] px-7 mb-16 mt-4`}
        >
          {userType === "user" ? " Join Waitlist 🎉" : "🚀 Get Early Access"}
        </Button>
        <div className="flex-1  w-full">
          <Image
            src={
              userType === "user"
                ? "/images/waitlist/hero-image.png"
                : "/images/waitlist/vendor-hero-image.png"
            }
            alt=""
            width={1920}
            height={460}
            className="hidden md:flex"
            style={{ objectFit: "cover" }}
          />

          <Image
            src={
              userType === "user"
                ? "/images/waitlist/hero-image-mobile.png"
                : "/images/waitlist/vendor-hero-image-mobile.png"
            }
            alt=""
            width={1259}
            height={310}
            className="md:hidden flex"
          />
        </div>
      </div>
      <Modal>
        {isOpen && (
          <React.Suspense
            fallback={
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
              </div>
            }
          >
            <WaitlistModal onClose={closeModal} />
          </React.Suspense>
        )}
      </Modal>
    </div>
  );
};

export default Hero;
