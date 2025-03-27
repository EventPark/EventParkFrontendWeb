import { Review } from "../../types";
import Image from "next/image";
import ServiceChip from "./service-chip";

interface ReviewCardProps {
  review: Review;
  isVendorReview?: boolean;
}

export default function ReviewCard({
  review,
  isVendorReview = false,
}: ReviewCardProps) {
  return (
    <div
      className={`${
        isVendorReview ? "min-h-[13.25rem]" : "min-h-[11rem]"
      } self-stretch px-4 py-6 relative bg-white rounded-2xl shadow-[0px_25.465980529785156px_64px_0px_rgba(0,0,0,0.03)] outline outline-1 outline-offset-[-1px] outline-grey-background overflow-hidden`}
    >
      <div className="flex flex-col items-start gap-2 mb-2">
        <h6 className="text-base font-bold">{review.name || "Anonymous"}</h6>
        <div className="flex mb-4">
          {[...Array(review.rating)].map((_, i) => (
            <Image
              key={i}
              src="/icons/star_rating.svg"
              alt="rating"
              width={16}
              height={16}
            />
          ))}
        </div>

        {isVendorReview && <ServiceChip serviceName={"Nail Fixing"} />}
      </div>
      <p className="text-base leading-relaxed text-grey-border font-normal">
        {review.comment}
      </p>
    </div>
  );
}
