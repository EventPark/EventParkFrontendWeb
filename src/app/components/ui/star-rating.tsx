import React from "react";
import Image from "next/image";

interface StarRatingProps {
  rating: number;
  selectedRating?: number;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  onChange?: (rating: number) => void;
  showLabel?: boolean;
}

export default function StarRating({
  rating,
  selectedRating,
  size = "md",
  interactive = false,
  onChange,
  showLabel = false,
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = React.useState(0);

  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const isSelected = selectedRating === rating;

  return (
    <div
      className={`flex items-center gap-2 ${
        interactive ? "cursor-pointer" : ""
      } group`}
      onClick={() => interactive && onChange?.(rating)}
      onMouseEnter={() => interactive && setHoverRating(rating)}
      onMouseLeave={() => interactive && setHoverRating(0)}
    >
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Image
            key={star}
            src={
              star <= (hoverRating || rating)
                ? "/icons/star_rating.svg"
                : "/icons/star_rating_empty.svg"
            }
            alt="star"
            width={32}
            height={32}
            className={`transition-colors duration-200 ${sizes[size]}`}
          />
        ))}
      </div>
      {showLabel && (
        <span
          className={`text-sm transition-colors duration-200 ${
            isSelected || hoverRating === rating
              ? "text-gray-900"
              : "text-gray-500"
          }`}
        >
          & up
        </span>
      )}
    </div>
  );
}
