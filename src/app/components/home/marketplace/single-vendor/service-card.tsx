import React from "react";
import Image from "next/image";
import { VendorService } from "../types/vendor.types";
import { Button } from "../../../ui";

interface ServiceCardProps {
  service: VendorService;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden">
      <div className="relative h-[240px]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              {service.title}
            </h3>
            <p className="text-sm text-gray-500">{service.description}</p>
          </div>
          <div className="flex items-center gap-1 bg-[#F2F2F7] px-3 py-1.5 rounded-full">
            <Image
              src="/icons/star_rating.svg"
              alt="rating"
              width={16}
              height={16}
            />
            <span className="text-sm font-medium">
              {service.rating} ({service.reviewCount})
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-lg font-semibold">
            {typeof service.price === "number" ? (
              <>₦{service.price.toLocaleString()}</>
            ) : (
              <>
                ₦{service.price.min.toLocaleString()} - ₦
                {service.price.max.toLocaleString()}
              </>
            )}
          </div>
          <div className="flex gap-2">
            <Button className="px-6 py-2 text-sm">Request to Book</Button>
            <Button className="p-2 border border-gray-200 bg-transparent">
              <Image
                src="/icons/add-to-registry.svg"
                alt="Add to Registry"
                width={20}
                height={20}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
