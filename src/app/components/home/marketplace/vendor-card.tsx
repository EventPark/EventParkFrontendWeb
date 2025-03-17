import Image from "next/image";
import { Button } from "../../ui";

interface Tag {
  label: string;
  className?: string;
}

interface VendorCardProps {
  name: string;
  location: string;
  rating: number;
  tags: Tag[];
  imageUrl: string;
  logoUrl: string;
}

export default function VendorCard({
  name,
  location,
  rating,
  tags,
  imageUrl,
  logoUrl,
}: VendorCardProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer group-hover:h-[26rem] h-[24rem]">
      {/* Main Image */}
      <div className="relative w-full h-[300px]">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Logo */}
        <div className="absolute top-4 left-4 w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-white/20 bg-black/20">
          <Image
            src={logoUrl}
            alt={`${name} logo`}
            fill
            className="object-cover"
          />
        </div>

        {/* Tags */}
        <div className="absolute bottom-8 left-2 flex gap-2 flex-wrap transition-all duration-300 group-hover:bottom-20">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-4 py-1.5 rounded-full text-sm font-medium bg-white/25 backdrop-blur-sm text-white ${tag.className}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
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
    </div>
  );
}
