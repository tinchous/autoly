"use client";
import { useCart } from "@/hooks/useCart";

export default function ProductCard({ product }: { product: any }) {
  const { add, getQty } = useCart();
  const qty = getQty(product.id);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
      <div className="h-48 bg-gray-200 relative flex items-center justify-center">
        <span className="text-4xl">📦</span>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-lg">{product.nombre}</h3>
        <p className="text-gray-600 text-sm">{product.categoria}</p>
        <p className="text-green-600 font-bold text-xl mt-2">${product.precio}</p>
        
        <div className="flex items-center justify-between mt-4">
          <button 
            onClick={() => add(product)}
            className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold hover:bg-green-700 transition"
          >
            ＋
          </button>
          {qty > 0 && (
            <span className="text-green-600 text-xl font-bold mx-4">{qty}</span>
          )}
        </div>
      </div>
    </div>
  );
}
