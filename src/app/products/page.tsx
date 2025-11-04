import { prisma } from "@/lib/prisma";
import ProductCard from "@/components/ProductCard";
import FixedFilterBar from "@/components/FixedFilterBar";

export const dynamic = "force-dynamic";

type Product = {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  oferta: boolean;
  nuevo: boolean;
  mas_vendido: boolean;
};

export default async function ProductsPage() {
  const products: Product[] = await prisma.product.findMany();

  return (
    <>
      <FixedFilterBar />
      <section className="pt-32 px-4 bg-black min-h-screen">
        <h1 className="text-6xl font-black text-orange-500 text-center mb-12 neon">
          🔥 TODOS LOS PRODUCTOS 🔥
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
