// src/app/products/page.tsx - VERSIÓN CORREGIDA
"use client";
import { useEffect, useState } from 'react';
import ProductGrid from '@/components/ProductGrid';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('TODAS');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = ['TODAS', 'Rotisería', 'Frutas', 'Bebidas', 'Almacén', 'Kiosko'];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = selectedCategory === 'TODAS'
          ? '/api/products'
          : `/api/products?categoria=${selectedCategory}`;

        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error:', error);
        // En caso de error, products será manejado por ProductGrid internamente
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

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

        {/* Productos - Pasar los productos fetchados o dejar que ProductGrid maneje */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-800 rounded-2xl h-64 animate-pulse"></div>
            ))}
          </div>
        ) : products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <ProductGrid category={selectedCategory === 'TODAS' ? undefined : selectedCategory} />
        )}
      </div>
    </div>
  );
}
