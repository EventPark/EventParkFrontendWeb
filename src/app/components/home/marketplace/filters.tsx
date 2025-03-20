import Image from "next/image";
import React from "react";
import StarRating from "../../ui/star-rating";
import CategoryOption from "./category-option";
import { categories } from "./categories";

interface FilterSectionProps {
  title: string;
  children?: React.ReactNode;
  showPadding?: boolean;
}

function FilterSection({
  title,
  children,
  showPadding = true,
}: FilterSectionProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div
      className={`border-b border-gray-200 ${
        isExpanded ? "bg-[#00000005]" : ""
      } ${showPadding ? "py-5" : ""}`}
    >
      <div className={`${showPadding ? "px-6" : "px-0"} flex flex-col gap-2`}>
        <div
          className={`${
            showPadding ? "px-0" : "px-6 py-5"
          }  flex justify-between items-center cursor-pointer`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h3
            className={`text-base font-medium ${
              isExpanded ? "text-black" : "text-[#AEAEB2]"
            } uppercase tracking-[0.125rem]`}
          >
            {title}
          </h3>
          <Image
            src="/icons/right-chevron.svg"
            alt="filter-arrow"
            width={16}
            height={16}
            className={`transition-transform duration-200 ${
              isExpanded ? "rotate-90" : ""
            }`}
          />
        </div>

        <div
          className={`transition-all duration-200 ${
            isExpanded ? "min-h-24" : "max-h-0"
          } overflow-hidden rounded-lg`}
        >
          <div className={`${showPadding ? "p-3" : "p-0"}`}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function Filters() {
  const [isOpen, setIsOpen] = React.useState(true);
  const [selectedRating, setSelectedRating] = React.useState<
    number | undefined
  >();
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    []
  );

  const toggleCategory = (value: string) => {
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((cat) => cat !== value)
        : [...prev, value]
    );
  };

  return (
    <div
      className={`transition-all duration-500 ${
        isOpen ? "md:w-[280px] w-full" : "md:w-[80px] w-full"
      } bg-gradient-to-b from-[#FCFCFD] via-[#F8F8FA] to-[#F6F6F9] hidden md:block`}
    >
      {isOpen ? (
        <div className="p-6 px-0 space-y-2">
          <Image
            src="/icons/close-filters.svg"
            alt="close-filters"
            className="mx-6 mb-4 cursor-pointer"
            width={48}
            height={48}
            onClick={() => setIsOpen(false)}
          />
          <FilterSection title="CATEGORY" showPadding={false}>
            <div className="space-y-1">
              {categories.map((category) => (
                <CategoryOption
                  key={category.value}
                  {...category}
                  isSelected={selectedCategories.includes(category.value)}
                  onToggle={toggleCategory}
                />
              ))}
              <div className="w-full mt-2 text-sm text-black font-medium  px-6 transition-colors duration-200 flex items-center justify-start gap-3 py-4">
                <Image
                  src="/icons/add-circle-grey.svg"
                  alt="view more"
                  width={24}
                  height={24}
                />{" "}
                <span className="text-base">View More</span>
              </div>
            </div>
          </FilterSection>

          <FilterSection title="LOCATION"></FilterSection>

          <FilterSection title="PRICE RANGE">
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">Minimum Amount</label>
                <input
                  type="number"
                  placeholder="Enter minimum amount"
                  className="w-full mt-1 p-2 px-3 border rounded-3xl text-sm"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Maximum Amount</label>
                <input
                  type="number"
                  placeholder="Enter maximum amount"
                  className="w-full mt-1 p-2 px-3 border rounded-3xl text-sm"
                />
              </div>
            </div>
          </FilterSection>

          <FilterSection title="RATINGS">
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div
                  key={rating}
                  className="p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <StarRating
                    rating={rating}
                    selectedRating={selectedRating}
                    interactive
                    onChange={(r) =>
                      setSelectedRating(r === selectedRating ? undefined : r)
                    }
                    size="sm"
                    showLabel
                  />
                </div>
              ))}
            </div>
          </FilterSection>
        </div>
      ) : (
        <div
          className="h-full flex flex-row px-4 md:px-0 md:flex-col items-center py-6 cursor-pointer justify-between w-full"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src="/icons/filters.svg"
            alt="open-filters"
            width={48}
            height={48}
          />
        </div>
      )}
    </div>
  );
}
