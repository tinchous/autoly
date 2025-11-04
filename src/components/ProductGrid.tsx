// src/components/ProductGrid.tsx
"use client";
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: string;
  subcategoria: string;
  stock: number;
  oferta: boolean;
  nuevo: boolean;
  mas_vendido: boolean;
}

export default function ProductGrid({ category }: { category?: string }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Por ahora usamos datos mock, luego conectaremos a la API
        const mockProducts: Product[] = [
          {
            id: 1,
            nombre: "Coca Cola 2L",
            descripcion: "Bebida cola 2 litros",
            precio: 120,
            imagen: "/products/coca-cola.jpg",
            categoria: "Bebidas",
            subcategoria: "Gaseosas",
            stock: 50,
            oferta: true,
            nuevo: false,
            mas_vendido: true
          },
          {
            id: 2,
            nombre: "Pan de Molde Integral",
            descripcion: "Pan de molde integral",
            precio: 85,
            imagen: "/products/pan-molde.jpg",
            categoria: "Almacén",
            subcategoria: "Panadería",
            stock: 30,
            oferta: false,
            nuevo: true,
            mas_vendido: false
          },
          {
            id: 3,
            nombre: "Pizza Preelaborada",
            descripcion: "Pizza lista para horno",
            precio: 220,
            imagen: "/products/pizza.jpg",
            categoria: "Rotisería",
            subcategoria: "Pizzas",
            stock: 20,
            oferta: true,
            nuevo: false,
            mas_vendido: true
          },
          {
            id: 4,
            nombre: "Manzana Roja Kg",
            descripcion: "Manzana roja por kilogramo",
            precio: 90,
            imagen: "/products/manzana.jpg",
            categoria: "Frutas",
            subcategoria: "Frutas",
            stock: 40,
            oferta: false,
            nuevo: false,
            mas_vendido: false
          },
          {
            id: 5,
            nombre: "Leche Entera 1L",
            descripcion: "Leche entera tetrapack",
            precio: 65,
            imagen: "/products/leche.jpg",
            categoria: "Lácteos",
            subcategoria: "Leche",
            stock: 25,
            oferta: true,
            nuevo: false,
            mas_vendido: true
          },
          {
            id: 6,
            nombre: "Arroz Largo Fino 1Kg",
            descripcion: "Arroz largo fino calidad premium",
            precio: 75,
            imagen: "/products/arroz.jpg",
            categoria: "Almacén",
            subcategoria: "Granos",
            stock: 60,
            oferta: false,
            nuevo: true,
            mas_vendido: false
          }
        ];

        // Filtrar por categoría si se especifica
        let filteredProducts = mockProducts;
        if (category === 'mas_vendido') {
          filteredProducts = mockProducts.filter(p => p.mas_vendido);
        }

        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-gray-800 rounded-2xl h-64 animate-pulse"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
