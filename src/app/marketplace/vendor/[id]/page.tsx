import { notFound } from "next/navigation";
import SingleVendorPage from "@/app/components/home/marketplace/single-vendor-page";
import { Vendor } from "@/app/components/home/marketplace/types";
import { MOCK_VENDORS } from "@/app/mock/mock_vendors";

interface VendorPageProps {
  params: {
    id: string;
  };
}

export default function VendorPage({ params }: VendorPageProps) {
  const vendor = MOCK_VENDORS.find((v) => v.id === params.id);

  if (!vendor) {
    return <div>Vendor not found</div>;
  }

  return <SingleVendorPage vendor={vendor} />;
}

export async function generateStaticParams() {
  const vendors = MOCK_VENDORS;
  return vendors.map((vendor) => ({
    id: vendor.id,
  }));
}
