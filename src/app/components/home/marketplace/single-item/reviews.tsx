import { Review } from "../types";
import ReviewCard from "./reviews/review-card";

interface ReviewsProps {
  reviews: Review[];
  isVendorReview?: boolean;
}

export default function Reviews({
  reviews,
  isVendorReview = false,
}: ReviewsProps) {
  return (
    <div
      className={`${
        isVendorReview ? "px-0" : "px-12"
      } flex flex-col gap-7 h-[1024px] overflow-y-scroll no-scrollbar`}
    >
      <div className="text-3xl font-medium leading-10">Reviews</div>
      <div
        className={
          isVendorReview ? "grid grid-cols-1 md:grid-cols-3 gap-6" : ""
        }
      >
        {reviews.length == 0 ? (
          <div className="text-center text-gray-500 py-12">
            No reviews yet. Be the first to share your experience!
          </div>
        ) : (
          reviews.map((review) => (
            <ReviewCard
              isVendorReview={true}
              key={`review-${review.id}`}
              review={review}
            />
          ))
        )}
      </div>
    </div>
  );
}
