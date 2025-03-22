import React from "react";
import Image from "next/image";
import { Item } from "./types";
import StarRating from "../../ui/star-rating";
import VendorNameWithLogo from "./vendor-name-with-logo";
import Tags from "./tags";
import { Button } from "../../ui";
import { useRouter } from "next/navigation";

interface ItemCardProps {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  const router = useRouter();

  const handleViewItem = () => {
    router.push(`/marketplace/${item.id}`);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer group-hover:h-[26rem] h-[24rem]">
      <div className="relative w-full h-[300px]" onClick={handleViewItem}>
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <VendorNameWithLogo
          vendorName={item.vendorName}
          vendorLogo={item.logoUrl}
        />
        <Tags tags={item.categories.map((category) => ({ label: category }))} />
      </div>

      <div className="p-4 pb-8 bg-white rounded-2xl relative -mt-2.5 transition-transform duration-300 group-hover:-translate-y-12">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-black">{item.name}</h3>
            <p className="text-sm text-gray-500">
              ₦{item.price.toLocaleString()}.00
            </p>
          </div>
          <div className="flex items-center gap-1 bg-[#F2F2F7] p-2 px-2 pr-3 rounded-3xl justify-center">
            <span className="text-sm font-medium">⭐ {item.rating}</span>
          </div>
        </div>

        {/* View Profile Button */}
        <div className="flex gap-2 py-4">
          <Button
            onClick={handleViewItem}
            className="flex gap-2 py-2 text-xs font-medium text-white bg-primary rounded-full translate-y-8 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 [transition-property:transform,opacity] items-center [transition-duration:300ms,150ms]"
          >
            View Item
            <Image
              src={"/icons/arrow-circle-right.svg"}
              alt=""
              height={20}
              width={20}
            />
          </Button>
          <Button className="flex gap-2 py-2 text-xs font-medium text-black border border-gray-200 rounded-full translate-y-8 opacity-0 transition-all items-center group-hover:translate-y-0 group-hover:opacity-100 [transition-property:transform,opacity] [transition-duration:300ms,150ms]">
            <Image
              src="/icons/gift.svg"
              alt="Add to Registry"
              width={20}
              height={20}
            />
            Add to Registry
          </Button>
        </div>
      </div>
    </div>
  );
}
