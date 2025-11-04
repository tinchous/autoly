// src/components/CartIcon.tsx
"use client";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useCart } from "@/hooks/useCart";

export default function CartIcon() {
  const { items } = useCart();
  const [mounted, setMounted] = useState(false);

  // Solo mostrar después de montar en el cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Link href="/checkout">
        <div className="fixed bottom-6 right-6 z-50 bg-orange-500 rounded-full p-4">
          <ShoppingCartIcon className="h-6 w-6 text-white" />
        </div>
      </Link>
    );
  }

  return (
    <Link href="/checkout">
      <div className="fixed bottom-6 right-6 z-50 bg-orange-500 rounded-full p-4 animate-bounce hover:animate-ping cursor-pointer">
        <ShoppingCartIcon className="h-6 w-6 text-white" />
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
            {items.length}
          </span>
        )}
      </div>
    </Link>
  );
}
