import Image from "next/image";
import React from "react";

type MobileHeaderProps = {
  title: string;
  subtitle: string;
};

function MobileHeader({ title, subtitle }: MobileHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6 md:hidden">
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-medium text-black md:hidden">{title}</h3>
        <span className="text-sm text-gray-500">{subtitle}</span>
      </div>
      <Image
        src="/icons/filters.svg"
        alt="filters"
        width={32}
        height={32}
        className="block md:hidden cursor-pointer"
      />
    </div>
  );
}

export default MobileHeader;
