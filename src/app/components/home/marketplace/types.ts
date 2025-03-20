export interface Item {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  vendorName: string;
  vendorImage: string;
  logoUrl: string;
  categories: string[];
}

export type MarketplaceTab = "Items" | "Vendors";
interface Tag {
  label: string;
  className?: string;
}

export interface Vendor {
  name: string;
  location: string;
  rating: number;
  tags: Tag[];
  imageUrl: string;
  logoUrl: string;
}
