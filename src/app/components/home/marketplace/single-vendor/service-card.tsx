import React from "react";
import Image from "next/image";
import { VendorService } from "../types/vendor.types";
import { Button } from "../../../ui";

interface ServiceCardProps {
  service: VendorService;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden flex w-auto border border-grey-lightest">
      <div className="relative h-[15rem] w-[10rem]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 px-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              {service.title}
            </h3>
            <p className="text-sm text-grey-border">{service.description}</p>
          </div>
        </div>

        <div className="flex flex-col justify-between items-start mt-4 p-0 gap-7">
          <div className="px-2.5 py-1.5 bg-violet-50 rounded-2xl inline-flex justify-center items-center gap-1">
            <Image
              src="/icons/tag.svg"
              alt="arrow-left"
              width={12}
              height={12}
            />

            <div className="text-center justify-start text-violet-700 text-xs font-medium leading-tight">
              ₦{service.price.toLocaleString()}
            </div>
          </div>

          <div className="flex gap-2 text-xs">
            <Button className="shadow-none text-primary bg-primary-lightest py-2 px-[14px]">
              Request Booking
            </Button>
            <Button className="shadow-none border border-grey-lightest py-2 px-[14px]">
              View Service
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
