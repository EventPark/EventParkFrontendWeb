"use client";

import React from "react";
import { Item } from "./types";
import Breadcrumb from "./single-item/breadcrumb";
import TabNavigation from "./single-item/tab-navigation";
import ImageGallery from "./single-item/image-gallery";
import ProductDetails from "./single-item/product-details";
import Reviews from "./single-item/reviews";

interface SingleProductPageProps {
  item: Item;
}

export default function SingleProductPage({ item }: SingleProductPageProps) {
  const [activeTab, setActiveTab] = React.useState<"Item Details" | "Reviews">(
    "Item Details"
  );

  // Mock images array - in production this would come from the item
  const images = [item.image, item.image, item.image];

  return (
    <div className="mx-auto">
      {/* Header with Breadcrumb and Tabs */}
      <div className="flex pl-40 items-center gap-[3.05rem]">
        <Breadcrumb productName={item.name} />
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      <div className="w-full h-px bg-gray-200"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pl-40">
        <ImageGallery images={images} productName={item.name} />
        <div className="border-l border-gray-200 pt-7">
          {activeTab === "Item Details" && <ProductDetails item={item} />}
          {activeTab === "Reviews" && <Reviews reviews={item.reviews} />}
        </div>
      </div>
    </div>
  );
}
