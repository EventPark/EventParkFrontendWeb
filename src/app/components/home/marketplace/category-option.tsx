import React from "react";
import Image from "next/image";

interface CategoryOptionProps {
  label: string;
  value: string;
  isSelected: boolean;
  onToggle: (value: string) => void;
}

export default function CategoryOption({
  label,
  value,
  isSelected,
  onToggle,
}: CategoryOptionProps) {
  return (
    <div className="relative">
      <div
        className="flex items-center gap-3 px-6 py-4 hover:bg-gray-50 rounded-lg cursor-pointer group transition-colors duration-200"
        onClick={() => onToggle(value)}
      >
        <div
          className={`w-[22px] h-[22px] border rounded-full flex items-center justify-center transition-colors duration-200 ${
            isSelected
              ? "bg-primary border-primary"
              : "border-gray-300 group-hover:border-primary/50"
          }`}
        >
          {isSelected && (
            <Image
              src="/icons/checked.svg"
              alt="check"
              width={22}
              height={22}
              className="text-white"
            />
          )}
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-200 ${
              isSelected ? "font-medium" : ""
            }`}
          >
            {label}
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 left-[-24px] right-[-24px] h-[1px] bg-gray-200 w-screen" />
    </div>
  );
}
