"use client";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function CartIcon() {
  const [count, setCount] = useState(0);

  // ACTUALIZA EL CONTADOR CADA VEZ QUE CAMBIE EL CARRITO
  useEffect(() => {
    const update = () => setCount(JSON.parse(localStorage.getItem("cart") || "[]").length);
    update();
    window.addEventListener("storage", update);
    window.addEventListener("cartUpdated", update);
    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("cartUpdated", update);
    };
  }, []);

  return (
    <Link href="/checkout">
      <div className="fixed bottom-6 right-6 z-50 neon rounded-full p-4 animate-bounce hover:animate-ping cursor-pointer">
        <ShoppingCartIcon className="h-10 w-10 text-white" />
        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-fire-red text-white text-xs font-bold rounded-full h-7 w-7 flex items-center justify-center animate-pulse">
            {count}
          </span>
        )}
      </div>
    </Link>
  );
}
