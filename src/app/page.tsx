// src/app/page.tsx
import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-yellow-600 overflow-hidden px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/20 via-transparent to-transparent"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">
            AUTOSERVICE
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-400">
            LIAM YAHIR
          </h2>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl mx-auto">
            Tu almacén de confianza. <br/>Rotisería, Frutas & Verduras frescas, y mucho más.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/products"
              className="bg-yellow-500 text-green-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition transform hover:scale-105"
            >
              🛒 Ordenar Ahora
            </Link>
            <Link
              href="/delivery"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-900 transition"
            >
              🚚 Info Delivery
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-white">
            <div className="text-center">
              <div className="text-2xl font-black">24/7</div>
              <div className="text-green-200 text-sm">Disponible</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black">30'</div>
              <div className="text-green-200 text-sm">Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black">$1499</div>
              <div className="text-green-200 text-sm">Envío Gratis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías Destacadas */}
      <section className="py-16 bg-green-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-12 text-white">
            🎯 NUESTROS FUERTES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Rotisería */}
            <Link href="/products?cat=Rotisería" className="bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition group">
              <div className="text-6xl mb-4">🍗</div>
              <h3 className="text-xl font-black text-green-900 mb-2">ROTISERÍA</h3>
              <p className="text-green-700">Pollos, pizzas, empanadas y más. Fresco y listo para llevar.</p>
              <div className="mt-4 text-yellow-500 font-bold group-hover:text-green-600">
                Ver productos →
              </div>
            </Link>

            {/* Frutas & Verduras */}
            <Link href="/products?cat=Frutas" className="bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition group">
              <div className="text-6xl mb-4">🍎</div>
              <h3 className="text-xl font-black text-green-900 mb-2">FRUTAS & VERDURAS</h3>
              <p className="text-green-700">Frescas y de calidad. Seleccionadas especialmente para vos.</p>
              <div className="mt-4 text-yellow-500 font-bold group-hover:text-green-600">
                Ver productos →
              </div>
            </Link>

            {/* Delivery */}
            <Link href="/delivery" className="bg-yellow-500 rounded-2xl p-6 text-center hover:shadow-2xl transition group">
              <div className="text-6xl mb-4">🚚</div>
              <h3 className="text-xl font-black text-green-900 mb-2">DELIVERY EXPRESS</h3>
              <p className="text-green-900">En 30 minutos en tu puerta. ¡Pedí por WhatsApp!</p>
              <div className="mt-4 text-green-800 font-bold group-hover:text-green-600">
                Más info →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-4 text-white">
            🛍️ PRODUCTOS DESTACADOS
          </h2>
          <p className="text-green-300 text-center mb-12 max-w-2xl mx-auto">
            Lo más pedido por nuestros clientes
          </p>

          <ProductGrid category="mas_vendido" />
        </div>
      </section>

      {/* Sección Delivery */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-6 text-white">
            🚚 DELIVERY RÁPIDO
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Entregamos en toda la zona en menos de 30 minutos
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-lg font-black text-green-900 mb-3">📞 CÓMO PEDIR</h3>
              <ul className="text-green-700 space-y-2">
                <li>• Elegí tus productos</li>
                <li>• Agregalos al carrito</li>
                <li>• Completá tus datos</li>
                <li>• ¡Recibí en tu casa!</li>
              </ul>
            </div>

            <div className="bg-yellow-500 rounded-2xl p-6">
              <h3 className="text-lg font-black text-green-900 mb-3">💰 ENVÍO GRATIS</h3>
              <ul className="text-green-900 space-y-2">
                <li>• Compras mayores a $1499</li>
                <li>• Zona de cobertura amplia</li>
                <li>• Múltiples medios de pago</li>
                <li>• Atención personalizada</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/products"
              className="bg-yellow-500 text-green-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition inline-block"
            >
              EMPEZAR A COMPRAR
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
