import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CartIcon from "@/components/CartIcon";

export const metadata: Metadata = {
  title: "Autoservice Liam Yahir",
  description: "Supermercado y Delivery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-900 text-white">
        <Navbar />
        {children}
        <CartIcon />
      </body>
    </html>
  );
}
