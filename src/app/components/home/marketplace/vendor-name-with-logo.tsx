import Image from "next/image";
import React from "react";

type Props = {
  vendorName: string;
  vendorLogo: string;
};

const VendorNameWithLogo = ({ vendorName, vendorLogo }: Props) => {
  return (
    <div className="absolute top-4 left-4 flex items-center gap-2">
      <div className="h-8 w-8 rounded-full overflow-hidden relative">
        <Image
          src={vendorLogo}
          alt={vendorName}
          fill
          className="object-cover"
        />
      </div>
      <span className="text-white font-medium text-sm">{vendorName}</span>
    </div>
  );
};

export default VendorNameWithLogo;
