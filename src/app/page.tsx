import Link from "next/link";

export default function Home() {
  return (
    <section className="hero min-h-screen neon flex flex-col items-center justify-center text-center px-4 bg-black">
      <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-orange-500 to-fire-red bg-clip-text text-transparent animate-pulse">
        ¡TU SUPERMERCADO 24/7!
      </h1>
      <p className="text-2xl mt-4 text-white">
        Almacén │ Rotisería │ Verduras │ Delivery 08:00-23:30
      </p>

      <div className="flex gap-4 mt-8 flex-wrap justify-center">
        <span className="badge bg-orange-500 text-white px-6 py-3 rounded-full neon text-lg">
          🚚 GRATIS si superás $1499
        </span>
        <span className="badge bg-fire-red text-white px-6 py-3 rounded-full neon text-lg">
          🥬 Verduras cosecha HOY
        </span>
      </div>

      <Link
        href="/products"
        className="mt-12 px-12 py-6 bg-fire-red text-white text-2xl font-bold rounded-full neon hover:scale-110 transition"
      >
        PEDÍ AHORA
      </Link>
    </section>
  );
}
