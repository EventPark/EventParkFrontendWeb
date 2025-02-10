import { Button } from "../ui/button";
import Logo from "../ui/logo";

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white p-6 md:px-40 pt-[50px]">
        <Logo />
        <div className="mx-auto grid grid-cols-2 md:grid-cols-6 gap-6 py-9">
          <div>
            <h3 className="font-bold text-sm mb-10">FEATURES</h3>
            <ul className="space-y-6 leading-[-0.16px] text-[#ACACAC]">
              <li>Vendor Marketplace</li>
              <li>Guest Management</li>
              <li>Budget Planner</li>
              <li>AI Matchmaker</li>
              <li>Gift Registry</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-10">SERVICES</h3>
            <ul className="space-y-6 leading-[-0.16px] text-[#ACACAC]">
              <li>For Vendors</li>
              <li>For Event Planners</li>
              <li>Join As Vendor</li>
              <li>Plan An Event</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-10">COMPANY</h3>
            <ul className="space-y-6 leading-[-0.16px] text-[#ACACAC]">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-10">SUPPORT</h3>
            <ul className="space-y-6 leading-[-0.16px] text-[#ACACAC]">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="md:flex md:justify-between md:items-start flex-col col-span-2">
            <div className="md:w-full">
              <h3 className="font-bold mb-2">SUBSCRIBE TO OUR NEWSLETTER</h3>
              <p className="text-sm text-[#AEAEB2] mb-4">
                Get event planning tips and <br /> updates straight to your
                inbox
              </p>
            </div>
            {/* <div
              className="flex items-center justify-center space-x-2 w-full bg-[#0f0f0f] rounded-[64px] p-2"
              suppressHydrationWarning
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-2 w-full rounded-lg text-white bg-transparent ring-0 focus:ring-0"
              />
              <Button className="bg-white text-black flex gap-2">
                Subscribe
              </Button>
            </div> */}
          </div>
        </div>
      </footer>
      <div className="bg-[#0f0f0f] text-white text-center py-8">
        <p className="text-sm text-[#999]">
          Copyright © 2025 • All rights reserved
        </p>
      </div>
    </>
  );
}
