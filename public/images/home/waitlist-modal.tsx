"use client";

interface WaitlistModalProps {
  onClose: () => void;
}

import { useUserType } from "@/app/context/UserTypeContext";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useSnackbar } from "notistack";
import { useState } from "react";

export default function WaitlistModal({ onClose }: WaitlistModalProps) {
  const { enqueueSnackbar } = useSnackbar();
  const { userType } = useUserType();
  const [isWaitlistRequestAccepted, setIsWaitlistRequestAccepted] =
    useState<boolean>(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    joining_as: userType === "user" ? "user" : "vendor",
  });
  const [submittingForm, setSubmittingForm] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.first_name || !formData.last_name || !formData.email) {
      enqueueSnackbar("All fields are required", {
        variant: "warning",
      });
      return;
    }

    enqueueSnackbar("Adding you to the Vendorperk waitlist...", {
      variant: "info",
    });

    setSubmittingForm(true);
    try {
      const response = await axios.post(
        `https://dev-api.vendorperk.com/v1/waitlist`,
        formData,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      enqueueSnackbar("You have been successfully added to waitlist", {
        variant: "success",
      });
      setIsWaitlistRequestAccepted(true);
    } catch (error) {
      enqueueSnackbar("Something went wrong, try again later", {
        variant: "error",
      });
      console.error(error);
    } finally {
      setSubmittingForm(false);
    }
  };

  return (
    <div
      className={`flex top-0 z-10 fixed inset-0 items-center justify-center bg-black bg-opacity-50 px-5 `}
    >
      <div
        className={`flex md:px-0 bg-white rounded-2xl overflow-hidden ${
          isWaitlistRequestAccepted ? "w-full md:w-1/2" : ""
        }  `}
      >
        <div>
          <Image
            placeholder="blur"
            blurDataURL="/images/home/waitlist-modal.png"
            className="hidden md:flex"
            src={
              userType === "user"
                ? "/images/home/waitlist-modal.png"
                : "/images/home/waitlist-modal-vendor.png"
            }
            width={isWaitlistRequestAccepted ? 500 : 300}
            height={isWaitlistRequestAccepted ? 600 : 600}
            alt="Waitlist"
            objectFit="contain"
          />
        </div>
        <div className="relative bg-white p-6 max-w-md md:w-[30%]">
          <div className="flex justify-end cursor-pointer" onClick={onClose}>
            <Image
              src={"/icons/close-circle.svg"}
              alt="Close"
              width={40}
              height={40}
            />
          </div>

          {isWaitlistRequestAccepted ? (
            <>
              <div className="flex  mt-4 items-center justify-center">
                <Image
                  src={"/icons/waitlist-accepted.png"}
                  width={120}
                  height={120}
                  alt=""
                />
              </div>
              <p className="text-center text-black text-[28px] font-medium leading-[36.96px] py-4 tracking-[-1.26px]">
                You&apos;re on the List! 🥳
              </p>
              <p className=" flex justify-center text-[#808080] w-full px-3 leading-normal text-center mx-auto tracking-[-0.48px]">
                You&apos;re now on the waitlist for early access to VendorPerk.
                Stay tuned for updates and exclusive perks!
              </p>
              <p className="text-center text-[#808080] text-xs font-normal leading-[18px] tracking-[1.44px] mt-12 ">
                SHARE TO FRIENDS
              </p>
              <div className="flex gap-2 justify-center mt-4">
                <Image alt="" src={"/icons/fb.svg"} width={36} height={36} />
                <Link
                  href={
                    "https://www.instagram.com/vendorperk?igsh=cHE4OXNvdXRocmhz"
                  }
                  target="_blank"
                >
                  <Image
                    alt=""
                    src={"/icons/instagram.svg"}
                    width={36}
                    height={36}
                  />{" "}
                </Link>
                <Image
                  alt=""
                  src={"/icons/tiktok.svg"}
                  width={36}
                  height={36}
                />
                <Link
                  href={"https://www.linkedin.com/company/vendorperk/"}
                  target="_blank"
                >
                  <Image
                    alt=""
                    src={"/icons/linkedin.svg"}
                    width={36}
                    height={36}
                  />
                </Link>
                <Image alt="" src={"/icons/x.svg"} width={36} height={36} />
              </div>
              <div className="mb-10" />
            </>
          ) : (
            <>
              <h2 className="text-sm font-normal text-[#808080] uppercase tracking-[2.24px]">
                {userType == "user" ? "Stay Ahead" : "Stand out of the crowd"}
              </h2>
              <h1 className="text-[32px] font-bold text-primary tracking-[-0.96px]">
                Join the Waitlist
              </h1>
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
                className="mt-4 space-y-4"
              >
                <div className="flex space-x-2">
                  <div className="w-1/2 space-y-12">
                    <label htmlFor="first_name" className="text-sm">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      value={formData.first_name}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          first_name: e.target.value,
                        });
                      }}
                      className="w-full p-2 border rounded-[64px] mt-1.5"
                    />
                  </div>
                  <div className="w-1/2 space-y-12">
                    <label htmlFor="last_name" className="text-sm">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      value={formData.last_name}
                      onChange={(e) => {
                        setFormData({ ...formData, last_name: e.target.value });
                      }}
                      className="w-full p-2 border rounded-[64px] mt-1.5"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                    }}
                    className="w-full p-2 border rounded-[64px] mt-1.5"
                  />
                </div>
                <div className="waitlist-select">
                  <label htmlFor="joining_as" className="text-sm">
                    Role
                  </label>
                  <select
                    id="joining_as"
                    name="joining_as"
                    value={formData.joining_as}
                    onChange={(e) => {
                      setFormData({ ...formData, joining_as: e.target.value });
                    }}
                    className="w-full p-2 border rounded-[64px] mt-1.5 mb-4 pr-10"
                  >
                    <option value="user">Event Planner</option>
                    <option value="vendor">Vendor</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className={`p-2 rounded-[64px] px-5 py-3 flex items-center justify-center ${
                    userType === "user"
                      ? "bg-primary text-white "
                      : "bg-[#f0e8d1] text-black"
                  }`}
                  disabled={submittingForm}
                >
                  Be the first to know! 👌
                </button>
                <div className="mb-[32px]" />
              </form>
            </>
          )}
        </div>
        {/* )} */}
      </div>
    </div>
  );
}
