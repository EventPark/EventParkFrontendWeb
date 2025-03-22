import { MOCK_ITEMS } from "@/app/mock/mock_vendors";
import SingleProductPage from "@/app/components/home/marketplace/single-product-page";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const item = MOCK_ITEMS.find((item) => item.id === params.id);

  if (!item) {
    notFound();
  }

  return <SingleProductPage item={item} />;
}
