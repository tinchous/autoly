import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const destacados = PRODUCTS.filter(p => p.mas_vendidos);

export default function Home() {
  return (
    <>
      {/* HERO (ya lo tenés) */}
      <section className="py-20 px-4">
        <h2 className="text-5xl font-black text-orange-500 text-center mb-12 neon">
          🔥 MÁS VENDIDOS 🔥
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {destacados.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
