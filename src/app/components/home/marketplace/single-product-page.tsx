"use client";

import React from "react";
import { Item } from "./types";
import Breadcrumb from "./single-product/breadcrumb";
import TabNavigation from "./single-product/tab-navigation";
import ImageGallery from "./single-product/image-gallery";
import ProductDetails from "./single-product/product-details";

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
      <div className="flex px-40 items-center gap-[3.05rem]">
        <Breadcrumb productName={item.name} />
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      <div className="w-full h-px bg-gray-200"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-40">
        <ImageGallery images={images} productName={item.name} />
        <ProductDetails item={item} />
      </div>
    </div>
  );
}
