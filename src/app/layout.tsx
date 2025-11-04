// src/app/layout.tsx - VERSIÓN MÍNIMA Y SEGURA
import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
