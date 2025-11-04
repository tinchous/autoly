// prisma/seed.ts - VERSIÓN MÍNIMA
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const PRODUCTOS = [
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

async function main() {
  console.log('🌱 Sembrando base de datos...');
  
  // Solo limpiar productos y voice orders (no hay cart)
  await prisma.voiceOrder.deleteMany();
  await prisma.product.deleteMany();
  
  // Crear productos simples
  for (const product of PRODUCTOS) {
    await prisma.product.create({
      data: product
    });
  }
  
  console.log(`✅ ${PRODUCTOS.length} productos creados!`);
  console.log('🍗 Rotisería, 🍎 Frutas, 🥤 Bebidas, 🛒 Almacén');
}

main()
  .catch((e) => {
    console.error('❌ Error en seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });