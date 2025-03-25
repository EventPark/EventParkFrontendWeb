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

export interface Service {
  id: string;
  name: string;
  description: string;
}

export interface VendorService {
  id: string;
  title: string;
  description: string;
  price:
    | {
        min: number;
        max: number;
      }
    | number;
  rating: number;
  reviewCount: number;
  image: string;
}

export type VendorTab = "Services" | "Portfolio" | "Reviews";

export interface Vendor {
  id: string;
  name: string;
  location: string;
  rating: number;
  tags: Tag[];
  imageUrl: string;
  logoUrl: string;
  services?: VendorService[];
}
