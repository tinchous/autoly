"use client";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";  // ← FIX

export default function Navbar() {
  return (
    <header className="bg-black sticky top-0 z-50 border-b-4 border-neon neon">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center p-4">
        {/* ... todo igual ... */}
        <Link href="/cart" className="flex items-center gap-1">
          <ShoppingCartIcon className="h-6 w-6" />  {/* ← FIX */}
          <span id="cart-count" className="text-neon">0</span>
        </Link>

        {/* MENÚ EXACTO QUE PIDIERON */}
        <nav className="flex flex-wrap gap-6 text-lg">
          <details className="dropdown">
            <summary className="cursor-pointer text-orange-500 hover:text-white">
              CATEGORÍAS ↓
            </summary>
            <ul className="p-4 bg-black neon rounded-box">
              <li><Link href="/products?cat=almacen"   className="block py-2">Almacén</Link></li>
              <li><Link href="/products?cat=bebidas"   className="block py-2">Bebidas</Link></li>
              <li><Link href="/products?cat=rotiseria" className="block py-2">Rotisería</Link></li>
              <li><Link href="/products?cat=frutas"    className="block py-2">Frutas & Verduras</Link></li>
            </ul>
          </details>

          <Link href="/">Inicio</Link>
          <Link href="/products">Productos</Link>
          <Link href="/about">Sobre Nosotros</Link>
          <Link href="/contact">Contacto</Link>
          <Link href="/login">Iniciar Sesión</Link>
          <Link href="/cart" className="flex items-center gap-1">
            <ShoppingCartIcon className="h-6 w-6" />
            <span id="cart-count" className="text-neon">0</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
