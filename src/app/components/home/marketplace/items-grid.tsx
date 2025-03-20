import React from "react";
import { Item } from "./types";
import ItemCard from "./item-card";
import EmptySearch from "./empty-search";
import { MOCK_ITEMS } from "@/app/mock/mock_vendors";

interface ItemsResultsProps {
  onCategoryClick?: (category: string) => void;
}

export default function ItemsResults({ onCategoryClick }: ItemsResultsProps) {
  if (MOCK_ITEMS.length === 0) {
    return <EmptySearch onCategoryClick={onCategoryClick} />;
  }

  return (
    <>
      {MOCK_ITEMS.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </>
  );
}
