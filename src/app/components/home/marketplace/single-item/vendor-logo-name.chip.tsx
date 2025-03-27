import Image from "next/image";
import React from "react";

type Props = {
  logoUrl: string;
  vendorName: string;
};

const VendorLogoNameChip = ({ logoUrl, vendorName }: Props) => {
  return (
    <div className="flex bg-[#f5f5f5] rounded-[64px] items-center p-1 gap-1">
      <div className="h-[26px] w-[26px] relative rounded-full overflow-hidden">
        <Image src={logoUrl} alt={vendorName} fill className="object-cover" />
      </div>

      <h3 className="font-medium text-xs pr-4 font-italic"> {vendorName}</h3>
    </div>
  );
};

export default VendorLogoNameChip;
