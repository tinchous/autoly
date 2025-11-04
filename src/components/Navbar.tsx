// src/components/Navbar.tsx
"use client";
import Link from "next/link";
import { ShoppingCartIcon, UserIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { useCart } from "@/hooks/useCart";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { items } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-green-900 sticky top-0 z-50 border-b border-green-600">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">LY</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Liam Yahir</h1>
            <p className="text-xs text-green-200">AUTOSERVICE</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="text-yellow-400 hover:text-white transition">Inicio</Link>

          <div className="dropdown dropdown-hover">
            <label className="text-white hover:text-yellow-400 transition cursor-pointer">
              Categorías ▼
            </label>
            <ul className="dropdown-menu p-4 bg-green-900 border border-green-600 rounded-box shadow-2xl w-48">
              <li><Link href="/products?cat=Rotisería" className="block py-2 hover:text-yellow-400">🍗 Rotisería</Link></li>
              <li><Link href="/products?cat=Frutas" className="block py-2 hover:text-yellow-400">🍎 Frutas & Verduras</Link></li>
              <li><Link href="/products?cat=Almacén" className="block py-2 hover:text-yellow-400">🛒 Almacén</Link></li>
              <li><Link href="/products?cat=Bebidas" className="block py-2 hover:text-yellow-400">🥤 Bebidas</Link></li>
              <li><Link href="/products?cat=Kiosko" className="block py-2 hover:text-yellow-400">🍫 Kiosko</Link></li>
            </ul>
          </div>

          <Link href="/products" className="text-white hover:text-yellow-400 transition">Productos</Link>
          <Link href="/delivery" className="text-white hover:text-yellow-400 transition">🚚 Delivery</Link>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <Link href="/login" className="hidden md:flex items-center space-x-2 text-white hover:text-yellow-400 transition text-sm">
            <UserIcon className="h-4 w-4" />
            <span>Ingresar</span>
          </Link>

          <Link href="/cart" className="relative flex items-center space-x-2 bg-yellow-500 p-3 rounded-full hover:bg-yellow-600 transition">
            <ShoppingCartIcon className="h-5 w-5 text-white" />
            {mounted && items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {items.length}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-900 border-t border-green-600 p-4">
          <div className="flex flex-col space-y-4 text-sm">
            <Link href="/" className="text-yellow-400 font-semibold">Inicio</Link>
            <Link href="/products?cat=Rotisería" className="text-white">🍗 Rotisería</Link>
            <Link href="/products?cat=Frutas" className="text-white">🍎 Frutas & Verduras</Link>
            <Link href="/products?cat=Almacén" className="text-white">🛒 Almacén</Link>
            <Link href="/products?cat=Bebidas" className="text-white">🥤 Bebidas</Link>
            <Link href="/delivery" className="text-white">🚚 Delivery</Link>
            <Link href="/login" className="text-white">Ingresar</Link>
          </div>
        </div>
      )}
    </header>
  );
}
