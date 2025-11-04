// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ClientProvider from "@/providers/ClientProvider";

export const metadata: Metadata = {
  title: "Autoservice Liam Yahir - Delivery 24/7",
  description: "Supermercado, Almacén, Kiosko, Rotisería, Frutas & Verduras. Delivery rápido en tu zona.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-900 text-white">
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
