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
    <header className="bg-black sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-orange-500">AUTOLY</h1>
            <p className="text-xs text-gray-400">DELIVERY</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-orange-500 font-medium">Inicio</Link>
          <Link href="/products" className="text-white hover:text-orange-500">Productos</Link>
          <Link href="/about" className="text-white hover:text-orange-500">Nosotros</Link>
          <Link href="/login" className="text-white hover:text-orange-500">Ingresar</Link>
        </nav>

        {/* Cart */}
        <Link href="/cart" className="relative bg-orange-500 p-2 rounded-full">
          <ShoppingCartIcon className="h-6 w-6 text-white" />
          {mounted && items.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 p-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-orange-500 font-semibold">Inicio</Link>
            <Link href="/products" className="text-white">Productos</Link>
            <Link href="/about" className="text-white">Nosotros</Link>
            <Link href="/login" className="text-white">Ingresar</Link>
          </div>
        </div>
      )}
    </header>
  );
}
