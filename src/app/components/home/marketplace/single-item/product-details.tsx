import React from "react";
import Image from "next/image";
import { Item } from "../types";
import { Button } from "../../../ui";
import VendorLogoNameChip from "./vendor-logo-name.chip";

interface ProductDetailsProps {
  item: Item;
}

export default function ProductDetails({ item }: ProductDetailsProps) {
  const [quantity, setQuantity] = React.useState(1);

  return (
    <>
      <div className="px-12">
        <div className="flex items-center gap-4 mb-4">
          <VendorLogoNameChip
            logoUrl={item.logoUrl}
            vendorName={item.vendorName}
          />
          <button className="ml-auto">
            <Image
              src="/icons/circle-ellipses.svg"
              alt="More options"
              width={24}
              height={24}
            />
          </button>
        </div>

        <h3 className="text-sm tracking-[12%] text-[#666] mb-4">MENS WEAR</h3>

        <h1 className="trackig-[-3%] text-3xl font-semibold mb-2">
          {item.name}
        </h1>

        <p className="text-grey-border mb-6 font-normal trackig-[-3%]">
          A premium black tuxedo suit tailored for weddings, corporate events,
          and special occasions.
        </p>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/star_rating.svg"
              alt="star"
              width={16}
              height={16}
            />
            <span className="text-sm font-semibold">
              {item.rating} ({16} Reviews)
            </span>
          </div>
          <span className="text-gray-300">|</span>
          <span className="text-sm text-[#4b5563] bg-[#f1f5f9] flex items-center gap-1 rounded-full px-3 py-1.5">
            <Image
              src="/icons/shopping-bag.svg"
              alt="check"
              width={12}
              height={12}
            />
            In Stock
          </span>
        </div>
      </div>

      <div className="w-full h-px bg-gray-200"></div>
      <div className="flex items-center gap-4 my-4 px-12">
        <Image src="/icons/circle-tag.svg" alt="check" width={36} height={36} />
        <div className="self-stretch justify-start text-Grays-Black text-2xl font-semibold font-['Rethink_Sans'] leading-loose">
          ₦{item.price.toLocaleString()}
        </div>
      </div>
      <div className="w-full h-px bg-gray-200 mb-8"></div>

      <div className="flex items-center gap-4 justify-between px-12 mb-[30px]">
        <div className="flex items-center border rounded-full p-1">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2 text-gray-500 hover:text-primary rounded-full border border-gray-300"
          >
            -
          </button>
          <span className="w-12 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-2 text-gray-500 hover:text-primary rounded-full border border-gray-300"
          >
            +
          </button>
        </div>
        <p className="text-gray-500 flex flex-col items-end tracking-wider text-xs font-normal">
          TOTAL AMOUNT
          <span className="self-stretch text-right justify-center text-[#0c0a09] text-xl font-bold leading-7">
            ₦{(item.price * quantity).toLocaleString()}.00
          </span>
        </p>
      </div>

      <div className="w-full h-px bg-gray-200"></div>
      <div className="py-6 px-12">
        <Button className="bg-primary text-white py-3 rounded-full mb-4 w-[205px] flex gap-2">
          <Image
            src={"/icons/gift-white.svg"}
            alt="gift"
            width={24}
            height={24}
          />
          Add to Registry
        </Button>
      </div>
    </>
  );
}
