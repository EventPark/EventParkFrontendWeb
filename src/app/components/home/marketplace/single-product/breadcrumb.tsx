import { useUserType } from "@/app/context/UserTypeContext";
import Link from "next/link";
import React from "react";

interface BreadcrumbProps {
  productName: string;
}

export default function Breadcrumb({ productName }: BreadcrumbProps) {
  const { setUserType } = useUserType();
  return (
    <div className="flex items-center gap-2 text-sm text-[#b3b3b3] flex-1 py-7">
      <Link
        href="/home"
        onClick={() => setUserType("marketplace")}
        className="hover:text-primary"
      >
        Marketplace
      </Link>
      <span>{">"}</span>
      <Link
        href="/home"
        onClick={() => setUserType("marketplace")}
        className="hover:text-primary"
      >
        Search Result
      </Link>
      <span>{">"}</span>
      <span className="text-primary">{productName}</span>
    </div>
  );
}
