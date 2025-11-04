"use client";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";

type CartItem = {
  id: number;
  nombre: string;
  precio: number;
  qty: number;
};

export default function CartDrawer() {
  const { items, total, clear, updateQty } = useCart();

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-black neon p-6 z-50 overflow-y-auto">
      <h2 className="text-3xl font-black text-orange-500 mb-6">🛒 TU CARRITO</h2>

      {items.length === 0 ? (
        <p className="text-center text-gray-400 text-xl">Tu carrito está vacío 😢</p>
      ) : (
        <>
          {items.map((item: CartItem) => (
            <div key={item.id} className="flex items-center gap-4 mb-4 pb-4 border-b border-neon">
              <div className="bg-gray-800 w-16 h-16 rounded flex items-center justify-center">
                <span className="text-neon text-xs">📦</span>
              </div>
              <div className="flex-1">
                <p className="text-white font-bold text-sm line-clamp-2">{item.nombre}</p>
                <p className="text-fire-red font-black">${item.precio} c/u</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQty(item.id, item.qty - 1)}
                  className="w-9 h-9 bg-orange-500 rounded-full neon flex items-center justify-center text-xl font-bold hover:bg-fire-red transition"
                >
                  −
                </button>
                <span className="text-neon text-2xl font-bold w-10 text-center">{item.qty}</span>
                <button
                  onClick={() => updateQty(item.id, item.qty + 1)}
                  className="w-9 h-9 bg-orange-500 rounded-full neon flex items-center justify-center text-xl font-bold hover:bg-fire-red transition"
                >
                  ＋
                </button>
              </div>
            </div>
          ))}

          <div className="mt-8 bg-gradient-to-b from-transparent to-black pt-6">
            <div className="flex justify-between items-baseline mb-4">
              <span className="text-white text-xl">Subtotal</span>
              <span className="text-orange-500 text-2xl font-black">${total}</span>
            </div>
            <div className="flex justify-between items-baseline mb-6">
              <span className="text-white text-xl">Delivery</span>
              <span className="text-neon text-2xl font-black">
                {total >= 1499 ? "GRATIS 🎉" : "$50"}
              </span>
            </div>
            <div className="border-t-4 border-neon pt-4">
              <div className="flex justify-between items-baseline">
                <span className="text-white text-3xl font-black">TOTAL</span>
                <span className="text-fire-red text-4xl font-black">
                  ${total >= 1499 ? total : total + 50}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-8">
              <Link
                href="/products"
                className="bg-orange-500 text-black py-4 rounded-full neon text-center font-bold text-lg hover:scale-105 transition"
              >
                SEGUIR COMPRANDO
              </Link>
              <button
                onClick={clear}
                className="bg-gray-700 text-white py-4 rounded-full neon text-center font-bold hover:bg-gray-900 transition"
              >
                VACIAR CARRITO
              </button>
              <Link
                href="/checkout"
                className="bg-fire-red text-white py-5 rounded-full neon text-center font-black text-2xl hover:scale-110 transition shadow-2xl"
              >
                REALIZAR PEDIDO 🚀
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
