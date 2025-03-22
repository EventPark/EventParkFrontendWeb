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
