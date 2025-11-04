"use client";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useCart } from "@/hooks/useCart";

export default function Navbar() {
  const { items } = useCart();

  return (
    <header className="bg-green-900 sticky top-0 z-50 border-b border-green-600">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">LY</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Liam Yahir</h1>
            <p className="text-xs text-green-200">AUTOSERVICE</p>
          </div>
        </Link>

        {/* Navegación */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-yellow-400 font-medium">Inicio</Link>
          <Link href="/products" className="text-white hover:text-yellow-400">Productos</Link>
          <Link href="/delivery" className="text-white hover:text-yellow-400">Delivery</Link>
        </nav>

        {/* Carrito */}
        <Link href="/checkout" className="relative bg-yellow-500 p-2 rounded-full">
          <ShoppingCartIcon className="h-6 w-6 text-white" />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {items.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
