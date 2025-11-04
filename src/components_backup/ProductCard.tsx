"use client";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";

export default function ProductCard({ product }: { product: any }) {
  const { add, getQty } = useCart();
  const qty = getQty(product.id);

  return (
    <div className="neon rounded-2xl overflow-hidden hover:scale-105 transition bg-black relative">
      {/* BADGES NEÓN */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
        {product.oferta && <span className="bg-fire-red text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">OFERTA</span>}
        {product.nuevo && <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">NUEVO</span>}
        {product.mas_vendido && <span className="bg-gradient-to-r from-orange-500 to-fire-red text-white px-3 py-1 rounded-full text-xs font-bold">MÁS VENDIDO</span>}
      </div>

      <div className="relative h-48 bg-gray-900">
        <Image src={product.imagen} alt={product.nombre} fill className="object-cover" />
      </div>

      <div className="p-4">
        <h3 className="text-white font-bold text-sm line-clamp-2">{product.nombre}</h3>
        <p className="text-gray-400 text-xs">{product.categoria} → {product.subcategoria}</p>
        <p className="text-fire-red text-2xl font-black mt-2">${product.precio}</p>

        <div className="flex items-center justify-between mt-4">
          <button onClick={() => add(product)} className="bg-orange-500 w-10 h-10 rounded-full neon flex items-center justify-center text-2xl hover:bg-fire-red transition">
            ＋
          </button>
          {qty > 0 && (
            <span className="text-neon text-2xl font-bold mx-4 animate-bounce">{qty}</span>
          )}
        </div>
      </div>
    </div>
  );
}
