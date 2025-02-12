import React from "react";
import Image from "next/image";
import Logo from "../ui/logo";

const WaitlistNavbar = () => {
  return (
    <nav className="w-full pt-12 px-5 md:pt-16 md:px-40 bg-transparent    inset-0 top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto flex  justify-center">
        {/* Desktop Navigation (3 Items) */}

        <Logo width={36} height={36} nature="waitlist" />
      </div>

      {/* Mobile Navigation (2 Items) */}
    </nav>
  );
};

export default WaitlistNavbar;
