import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/ui/navbar";

export const metadata: Metadata = {
  title: "VendorPerk",
  description:
    "Find the right vendors, create amazing events, and let us handle the rest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
