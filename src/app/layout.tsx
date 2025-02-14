import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/ui/navbar";
import WaitlistNavbar from "./components/waitlist/navbar";
import { UserTypeProvider } from "./context/UserTypeContext";
import { ModalProvider } from "./context/ModalContext";

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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />

        <UserTypeProvider>
          <ModalProvider>{children}</ModalProvider>
        </UserTypeProvider>
      </body>
    </html>
  );
}
