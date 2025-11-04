"use client";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";

export default function CartDrawer() {
  const { items, total, clear, updateQty } = useCart() as any;

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-black neon p-6 z-50 overflow-y-auto">
      <h2 className="text-3xl font-black text-orange-500 mb-6">🛒 TU CARRITO</h2>
      {items.map(item => (
        <div key={item.id} className="flex items-center gap-4 mb-4 pb-4 border-b border-neon">
          <div className="bg-gray-800 w-16 h-16 rounded" />
          <div className="flex-1">
            <p className="text-white text-sm">{item.nombre}</p>
            <p className="text-fire-red font-bold">${item.precio}</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-8 h-8 bg-orange-500 rounded-full neon">−</button>
            <span className="text-neon w-8 text-center">{item.qty}</span>
            <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-8 h-8 bg-orange-500 rounded-full neon">＋</button>
          </div>
        </div>
      ))}
      <div className="mt-8">
        <p className="text-3xl font-black text-fire-red">TOTAL: ${total}</p>
        <div className="flex flex-col gap-3 mt-6">
          <Link href="/products" className="bg-orange-500 text-black py-4 rounded-full neon text-center font-bold">
            SEGUIR COMPRANDO
          </Link>
          <button onClick={clear} className="bg-gray-700 text-white py-4 rounded-full neon">
            VACIAR CARRITO
          </button>
          <Link href="/checkout" className="bg-fire-red text-white py-4 rounded-full neon text-center font-bold text-xl">
            REALIZAR PEDIDO
          </Link>
        </div>
      </div>
    </div>
  );
}
