// src/app/page.tsx
import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <>
      {/* Hero Section Simplificada */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              AUTOLY
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Tu delivery rápido y confiable. Productos frescos a tu puerta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/products"
              className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-500 transition"
            >
              🛒 Ordenar Ahora
            </Link>
            <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 hover:text-white transition">
              🎤 Pedir por Voz
            </button>
          </div>

          {/* Stats Simplificadas */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-black text-orange-500">24/7</div>
              <div className="text-gray-400 text-sm">Disponible</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-red-500">30'</div>
              <div className="text-gray-400 text-sm">Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-green-400">$1499</div>
              <div className="text-gray-400 text-sm">Envío Gratis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-4 text-white">
            PRODUCTOS DESTACADOS
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Los productos más populares de nuestra tienda
          </p>

          <ProductGrid category="mas_vendido" />
        </div>
      </section>
    </>
  );
}
