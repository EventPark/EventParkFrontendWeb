import Image from "next/image";
import Button from "../ui/button";
import { useUserType } from "@/app/context/UserTypeContext";

interface NavItem {
  label: string;
  onClick: () => void;
  isActive?: boolean;
  icon?: React.ReactNode;
}

export default function HeroNavigation() {
  const { userType, setUserType } = useUserType();

  const navItems: NavItem[] = [
    {
      label: "Home",
      onClick: () => setUserType("user"),
      isActive: userType === "user",
    },
    {
      label: "Company",
      onClick: () => {},
      icon: <Image src="/icons/arrow-down.svg" alt="" width={12} height={6} />,
    },
    {
      label: "For Vendors",
      onClick: () => setUserType("vendor"),
      isActive: userType === "vendor",
    },
    {
      label: "Marketplace",
      onClick: () => setUserType("marketplace"),
      isActive: userType === "marketplace",
    },
  ];

  return (
    <div className=" bottom-12 w-full justify-center hidden md:flex">
      <nav className="top-0 px-6 py-4 rounded-full flex gap-4 ">
        {navItems.map((item, index) => (
          <div
            key={item.label}
            className="flex flex-col gap-3 items-center justify-center group cursor-pointer"
          >
            <Button
              onClick={item.onClick}
              className={`none uppercase tracking-[1.12px] font-bold text-white text-sm px-4 py-2 rounded-full group-hover:bg-[#FFFFFF19] transition-all duration-300 flex gap-2 items-center ${
                item.isActive ? "bg-[#FFFFFF19]" : "shadow-none"
              }`}
            >
              {item.label}
              {item.icon}
            </Button>

            {userType != "marketplace" && (
              <div
                className={`hidden md:flex rounded-full w-1 h-1 bg-white transition-opacity duration-300 ${
                  item.isActive
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              />
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
