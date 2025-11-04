// scripts/import-from-sheets.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Datos mock basados en tu Google Sheets
const PRODUCTOS = [
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
  // Agregar más productos según tu Google Sheets...
];

async function main() {
  console.log('🌱 Sembrando base de datos...');

  // Limpiar datos existentes
  await prisma.cartItem.deleteMany();
  await prisma.cart.deleteMany();
  await prisma.voiceOrder.deleteMany();
  await prisma.product.deleteMany();

  // Crear productos
  for (const product of PRODUCTOS) {
    await prisma.product.create({
      data: product
    });
  }

  console.log(`✅ ${PRODUCTOS.length} productos creados en Neon!`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
