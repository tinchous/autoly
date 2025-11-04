"use client";
import { useState } from 'react';
import ProductGrid from '@/components/ProductGrid';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('TODAS');

  const categories = ['TODAS', 'Rotisería', 'Frutas', 'Bebidas', 'Almacén', 'Kiosko'];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-black text-center mb-8 text-white">
          🛍️ TODOS LOS PRODUCTOS
        </h1>
        
        {/* Filtros */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full font-bold transition ${
                selectedCategory === cat
                  ? 'bg-yellow-500 text-green-900'
                  : 'bg-green-800 text-green-200 hover:bg-green-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Productos - Usar solo category */}
        <ProductGrid category={selectedCategory === 'TODAS' ? undefined : selectedCategory} />
      </div>
    </div>
  );
}
