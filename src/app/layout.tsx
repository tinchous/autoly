// ─────────────────────────────────────────────
// LAYOUT GLOBAL – NEGRO + NEÓN
// ─────────────────────────────────────────────
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CartIcon from "@/components/CartIcon";

export const metadata: Metadata = {
  title: "AutoService Liam-Yahir",
  description: "Delivery 08:00-23:30 | Gratis > $1499",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="bg-black text-white">
      <body className="font-sans min-h-screen">
        <Navbar />
        {children}
        <CartIcon />
      </body>
    </html>
  );
}
