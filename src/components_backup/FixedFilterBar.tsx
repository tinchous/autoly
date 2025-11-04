"use client";
import { useState } from "react";
import { PRODUCTS } from "@/data/products";

export default function FixedFilterBar() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("TODAS");
  const [sort, setSort] = useState("nombre-asc");

  const categorias = ["TODAS", ...new Set(PRODUCTS.map(p => p.categoria))];

  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-black neon p-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center">
        <input
          type="text"
          placeholder="🔍 Buscar producto..."
          className="px-6 py-3 bg-black border-2 border-neon rounded-full text-white w-80"
          onChange={e => setSearch(e.target.value)}
        />
        <select className="px-6 py-3 bg-black border-2 border-neon rounded-full text-orange-500" onChange={e => setCat(e.target.value)}>
          {categorias.map(c => <option key={c}>{c}</option>)}
        </select>
        <select className="px-6 py-3 bg-black border-2 border-neon rounded-full text-orange-500" onChange={e => setSort(e.target.value)}>
          <option value="nombre-asc">A → Z</option>
          <option value="nombre-desc">Z → A</option>
          <option value="precio-asc">Menor precio</option>
          <option value="precio-desc">Mayor precio</option>
        </select>
      </div>
    </div>
  );
}
