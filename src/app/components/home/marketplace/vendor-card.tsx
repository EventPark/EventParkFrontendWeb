import Image from "next/image";
import { Button } from "../../ui";
import { Vendor } from "./types";
import VendorNameWithLogo from "./vendor-name-with-logo";
import Tags from "./tags";
import Link from "next/link";

interface Tag {
  label: string;
  className?: string;
}

export default function VendorCard({
  id,
  name,
  location,
  rating,
  tags,
  imageUrl,
  logoUrl,
}: Vendor) {
  
  return (
    <Link
      href={`/marketplace/vendor/${id}`}
      className="relative rounded-2xl overflow-hidden group cursor-pointer group-hover:h-[26rem] h-[24rem]"
    >
      {/* Main Image */}
      <div className="relative w-full h-[300px]">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Logo */}
        <VendorNameWithLogo vendorName={name} vendorLogo={logoUrl} />

        {/* Tags */}
        <Tags tags={tags} />
      </div>

      {/* Info Section */}
      <div className="p-4 pb-8 bg-white rounded-2xl relative -mt-2.5 transition-transform duration-300 group-hover:-translate-y-12">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-black">{name}</h3>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
          <div className="flex items-center gap-1 bg-[#F2F2F7] p-2 px-2 pr-3 rounded-3xl justify-center">
            <span className="text-sm font-medium">⭐ {rating}</span>
          </div>
        </div>

        {/* View Profile Button */}
        <Button className="flex my-4 gap-4 left-4 right-4 py-2 text-sm font-medium text-white bg-primary rounded-full translate-y-8 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 [transition-property:transform,opacity] [transition-duration:300ms,150ms]">
          View Profile
          <Image
            src={"/icons/arrow-circle-right.svg"}
            alt=""
            height={16}
            width={16}
          />
        </Button>
      </div>
    </Link>
  );
}
