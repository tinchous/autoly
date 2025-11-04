"use client";
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  categoria: string;
  stock: number;
  oferta: boolean;
  mas_vendido: boolean;
}

interface ProductGridProps {
  category?: string;
  products?: Product[];
}

export default function ProductGrid({ category, products: externalProducts }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Si se pasan productos externos, usarlos directamente
    if (externalProducts && externalProducts.length > 0) {
      setProducts(externalProducts);
      setLoading(false);
      return;
    }

    // Si no, usar datos mock basados en la categoría
    const mockProducts: Product[] = [
      {
        id: 1,
        nombre: "Pollo al Spiedo",
        precio: 890,
        imagen: "/products/pollo-spiedo.jpg",
        categoria: "Rotisería",
        stock: 15,
        oferta: true,
        mas_vendido: true
      },
      {
        id: 2,
        nombre: "Pizza Familiar",
        precio: 650,
        imagen: "/products/pizza-familiar.jpg",
        categoria: "Rotisería",
        stock: 20,
        oferta: false,
        mas_vendido: true
      },
      {
        id: 3,
        nombre: "Manzana Roja Kg",
        precio: 120,
        imagen: "/products/manzana-roja.jpg",
        categoria: "Frutas",
        stock: 50,
        oferta: true,
        mas_vendido: true
      },
      {
        id: 4,
        nombre: "Tomate Kg",
        precio: 95,
        imagen: "/products/tomate.jpg",
        categoria: "Frutas",
        stock: 40,
        oferta: false,
        mas_vendido: false
      },
      {
        id: 5,
        nombre: "Coca Cola 2L",
        precio: 120,
        imagen: "/products/coca-cola.jpg",
        categoria: "Bebidas",
        stock: 50,
        oferta: true,
        mas_vendido: true
      },
      {
        id: 6,
        nombre: "Pan de Molde Integral",
        precio: 85,
        imagen: "/products/pan-molde.jpg",
        categoria: "Almacén",
        stock: 30,
        oferta: false,
        mas_vendido: false
      }
    ];

    let filteredProducts = mockProducts;
    
    if (category === 'mas_vendido') {
      filteredProducts = mockProducts.filter(p => p.mas_vendido);
    } else if (category && category !== 'TODAS') {
      filteredProducts = mockProducts.filter(p => p.categoria === category);
    }

    setProducts(filteredProducts);
    setLoading(false);
  }, [category, externalProducts]);

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
