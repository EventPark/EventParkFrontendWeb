import React from "react";
import Image from "next/image";
import { categories } from "./categories";

interface EmptySearchProps {
  onCategoryClick?: (category: string) => void;
}

export default function EmptySearch({ onCategoryClick }: EmptySearchProps) {
  const suggestedCategories = categories.slice(0, 2);

  return (
    <div className="flex flex-col md:items-start md:justify-start justify-center pb-40">
      <div className="mb-8 mx-auto md:mx-0">
        <Image
          src="/icons/search.svg"
          alt="No results found"
          width={120}
          height={120}
          className="opacity-80"
        />
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-center md:text-left">
        No results for your search
      </h2>
      <p className="text-gray-400 mb-6 text-center md:text-left">
        {`Your search query didn\'t yield any result.`} <br />
        You can try any of the following
      </p>

      <div className="flex flex-wrap gap-4 justify-center ">
        {suggestedCategories.map((category) => (
          <button
            key={category.value}
            onClick={() => onCategoryClick?.(category.value)}
            className="flex gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-black transition-colors duration-200"
          >
            <Image
              src="/icons/search.svg"
              alt="No results found"
              width={20}
              height={20}
              className="opacity-80"
            />
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}
