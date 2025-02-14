"use client";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

import { useUserType } from "@/app/context/UserTypeContext";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const { userType } = useUserType();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: userType === "user" ? "event-planner" : "vendor",
  });

  // useEffect(() => {
  //   return () => {
  //     setFormData({
  //       ...formData,
  //       role: userType === "user" ? "event-planner" : "vendor",
  //     });
  //   };
  // }, [formData, userType]);

  return (
    <div
      className={`flex top-0 z-10 fixed inset-0 items-center justify-center bg-black bg-opacity-50 px-5`}
    >
      <div className="flex md:px-0 bg-white rounded-2xl overflow-hidden">
        <Image
          className="hidden md:flex"
          src={
            userType === "user"
              ? "/images/home/waitlist-modal.svg"
              : "/images/home/waitlist-modal-vendor.svg"
          }
          width={300}
          height={500}
          alt="Waitlist"
        />
        <div className="relative bg-white p-6 max-w-md md:w-[30%] ">
          <div className="flex justify-end cursor-pointer" onClick={onClose}>
            <Image
              src={"/icons/close-circle.svg"}
              alt="Close"
              width={40}
              height={40}
            />
          </div>

          <h2 className="text-sm font-normal text-[#808080] uppercase tracking-[2.24px]">
            {userType == "user" ? "Stay Ahead" : "Stand out of the crowd"}
          </h2>
          <h1 className="text-[32px] font-bold text-primary tracking-[-0.96px]">
            Join the Waitlist
          </h1>
          <div onSubmit={() => {}} className="mt-4 space-y-4">
            <div className="flex space-x-2">
              <div className="w-1/2 space-y-12">
                <label htmlFor="firstName" className="text-sm">
                  Firstname
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={(e) => {
                    setFormData({ ...formData, firstName: e.target.value });
                  }}
                  className="w-full p-2 border rounded-[64px] mt-1.5"
                />
              </div>
              <div className="w-1/2 space-y-12">
                <label htmlFor="lastName" className="text-sm">
                  Lastname
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={(e) => {
                    setFormData({ ...formData, lastName: e.target.value });
                  }}
                  className="w-full p-2 border rounded-[64px] mt-1.5"
                />
              </div>
            </div>
            <div>
              <label htmlFor="emai space-y-12l" className="text-sm">
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
            <div className=" waitlist-select">
              <label htmlFor="rol space-y-12" className="text-sm">
                Role
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={(e) => {
                  setFormData({ ...formData, role: e.target.value });
                }}
                className="w-full p-2 border rounded-[64px] mt-1.5 mb-4 pr-10"
              >
                <option value="user">Event Planner</option>
                <option value="vendor">Vendor</option>
              </select>
            </div>
            <button
              type="submit"
              className={`p-2 rounded-[64px] px-5 py-3  ${
                userType === "user"
                  ? "bg-primary text-white "
                  : "bg-[#f0e8d1] text-black"
              }`}
            >
              Be the first to know! 👌
            </button>
            <div className="mb-[32px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
