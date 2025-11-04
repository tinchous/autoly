// src/components/Navbar.tsx - Mejorar accesibilidad
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
    <header className="bg-green-900 sticky top-0 z-50 border-b border-green-600" role="banner">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo con heading semántico */}
        <Link href="/" className="flex items-center space-x-3" aria-label="Inicio - Autoservice Liam Yahir">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full flex items-center justify-center" aria-hidden="true">
            <span className="text-white font-bold text-lg">LY</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Liam Yahir</h1>
            <p className="text-xs text-green-200">AUTOSERVICE</p>
          </div>
        </Link>

        {/* Navegación principal */}
        <nav aria-label="Navegación principal" className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="text-yellow-400 hover:text-white transition">Inicio</Link>

          <div className="dropdown dropdown-hover">
            <button
              className="text-white hover:text-yellow-400 transition cursor-pointer flex items-center"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Categorías <span aria-hidden="true">▼</span>
            </button>
            <ul
              className="dropdown-menu p-4 bg-green-900 border border-green-600 rounded-box shadow-2xl w-48"
              role="menu"
              aria-label="Submenú de categorías"
            >
              <li role="none"><Link href="/products?cat=Rotisería" className="block py-2 hover:text-yellow-400" role="menuitem">🍗 Rotisería</Link></li>
              <li role="none"><Link href="/products?cat=Frutas" className="block py-2 hover:text-yellow-400" role="menuitem">🍎 Frutas & Verduras</Link></li>
              <li role="none"><Link href="/products?cat=Almacén" className="block py-2 hover:text-yellow-400" role="menuitem">🛒 Almacén</Link></li>
              <li role="none"><Link href="/products?cat=Bebidas" className="block py-2 hover:text-yellow-400" role="menuitem">🥤 Bebidas</Link></li>
            </ul>
          </div>

          <Link href="/products" className="text-white hover:text-yellow-400 transition">Productos</Link>
          <Link href="/delivery" className="text-white hover:text-yellow-400 transition">🚚 Delivery</Link>
        </nav>

        {/* Acciones de usuario */}
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="hidden md:flex items-center space-x-2 text-white hover:text-yellow-400 transition text-sm"
            aria-label="Iniciar sesión"
          >
            <UserIcon className="h-4 w-4" aria-hidden="true" />
            <span>Ingresar</span>
          </Link>

          <Link
            href="/cart"
            className="relative flex items-center space-x-2 bg-yellow-500 p-3 rounded-full hover:bg-yellow-600 transition"
            aria-label={`Carrito de compras con ${mounted ? items.length : 0} productos`}
          >
            <ShoppingCartIcon className="h-5 w-5 text-white" aria-hidden="true" />
            {mounted && items.length > 0 && (
              <span
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                aria-live="polite"
                aria-atomic="true"
              >
                {items.length}
              </span>
            )}
          </Link>

          {/* Botón menú móvil */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Abrir menú de navegación"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-green-900 border-t border-green-600 p-4"
          role="navigation"
          aria-label="Menú móvil"
        >
          <div className="flex flex-col space-y-4 text-sm">
            <Link href="/" className="text-yellow-400 font-semibold">Inicio</Link>
            <Link href="/products?cat=Rotisería" className="text-white">🍗 Rotisería</Link>
            <Link href="/products?cat=Frutas" className="text-white">🍎 Frutas & Verduras</Link>
            <Link href="/products?cat=Almacén" className="text-white">🛒 Almacén</Link>
            <Link href="/delivery" className="text-white">🚚 Delivery</Link>
            <Link href="/login" className="text-white">Ingresar</Link>
          </div>
        </div>
      )}
    </header>
  );
}
