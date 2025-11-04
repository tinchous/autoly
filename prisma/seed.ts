// prisma/seed.ts - VERSIÓN SIN DESCRIPCION
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const PRODUCTOS = [
  {
    id: 1,
    nombre: "Pollo al Spiedo",
    precio: 890,
    imagen: "/products/pollo-spiedo.jpg",
    categoria: "Rotisería",
    subcategoria: "Pollos",
    stock: 15,
    oferta: true,
    nuevo: false,
    mas_vendido: true
  },
  {
    id: 2,
    nombre: "Pizza Familiar",
    precio: 650,
    imagen: "/products/pizza-familiar.jpg",
    categoria: "Rotisería", 
    subcategoria: "Pizzas",
    stock: 20,
    oferta: false,
    nuevo: true,
    mas_vendido: true
  },
  {
    id: 3, 
    nombre: "Manzana Roja Kg",
    precio: 120,
    imagen: "/products/manzana-roja.jpg",
    categoria: "Frutas",
    subcategoria: "Frutas",
    stock: 50,
    oferta: true,
    nuevo: false,
    mas_vendido: true
  },
  {
    id: 4,
    nombre: "Tomate Kg",
    precio: 95,
    imagen: "/products/tomate.jpg",
    categoria: "Frutas",
    subcategoria: "Verduras",
    stock: 40,
    oferta: false,
    nuevo: true,
    mas_vendido: false
  },
  {
    id: 5,
    nombre: "Coca Cola 2L",
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
    id: 6,
    nombre: "Pan de Molde Integral",
    precio: 85,
    imagen: "/products/pan-molde.jpg",
    categoria: "Almacén",
    subcategoria: "Panadería",
    stock: 30,
    oferta: false,
    nuevo: true,
    mas_vendido: false
  }
];

async function main() {
  console.log('🌱 Sembrando base de datos Autoservice Liam Yahir...');
  
  // Limpiar datos existentes
  await prisma.cartItem.deleteMany();
  await prisma.cart.deleteMany();
  await prisma.voiceOrder.deleteMany();
  await prisma.product.deleteMany();
  
  // Crear productos SIN descripcion
  for (const product of PRODUCTOS) {
    await prisma.product.create({
      data: {
        id: product.id,
        nombre: product.nombre,
        // descripcion: product.descripcion, // ← REMOVIDO
        precio: product.precio,
        imagen: product.imagen,
        categoria: product.categoria,
        subcategoria: product.subcategoria,
        stock: product.stock,
        oferta: product.oferta,
        nuevo: product.nuevo,
        mas_vendido: product.mas_vendido
      }
    });
  }
  
  console.log(`✅ ${PRODUCTOS.length} productos creados en Neon!`);
  console.log('📍 Rotisería, Frutas, Bebidas y Almacén listos!');
}

main()
  .catch((e) => {
    console.error('❌ Error en seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });