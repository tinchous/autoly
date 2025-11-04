// src/app/layout.tsx - VERSIÓN FINAL
import type { Metadata } from "next";
import "./globals.css";
import ClientProvider from "@/providers/ClientProvider";

export const metadata: Metadata = {
  title: "Autoly - Delivery",
  description: "Delivery rápido",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
