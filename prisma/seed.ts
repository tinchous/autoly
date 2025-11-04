import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const data = [
  { nombre: "TARTA DE ATUN", categoria: "ROTISERIA", subcategoria: "TARTAS", precio: 110, imagen: "/products/tarta-atun.png", oferta: true, nuevo: true, mas_vendido: true },
  { nombre: "MILANESA DE POLLO", categoria: "ROTISERIA", subcategoria: "MILANESAS", precio: 170, imagen: "/products/milanesa-pollo.png", oferta: true, nuevo: true, mas_vendido: true },
  // PEGÁ AQUÍ LOS OTROS 198 DEL SHEET (Ctrl+C → Ctrl+V)
];

async function main() {
  await prisma.product.createMany({ data, skipDuplicates: true });
  console.log("¡200 PRODUCTOS NEÓN EN NEON!");
}
main();
