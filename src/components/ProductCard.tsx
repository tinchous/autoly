"use client";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";

export default function ProductCard({ product }: { product: any }) {
  const { add, remove, qty } = useCart(product.id);

  return (
    <div className="neon rounded-2xl overflow-hidden hover:scale-105 transition bg-black">
      <div className="relative h-48 bg-gray-900">
        <Image src="/no-image.png" alt="" fill className="object-cover" />
        <div className="absolute top-2 right-2 bg-fire-red text-white px-2 py-1 text-xs rounded">
          STOCK OK
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-white font-bold text-sm line-clamp-2">{product.nombre}</h3>
        <p className="text-fire-red text-2xl font-black mt-2">${product.precio}</p>

        <div className="flex items-center justify-between mt-4">
          <button onClick={() => remove()} className="bg-orange-500 w-10 h-10 rounded-full neon flex items-center justify-center text-2xl">
            −
          </button>
          <span className="text-neon text-2xl font-bold mx-4">{qty}</span>
          <button onClick={() => add()} className="bg-orange-500 w-10 h-10 rounded-full neon flex items-center justify-center text-2xl">
            ＋
          </button>
        </div>
      </div>
    </div>
  );
}
