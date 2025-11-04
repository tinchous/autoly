// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
import { PRODUCTS } from '../src/data/products'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Limpiar tablas existentes
  await prisma.cartItem.deleteMany()
  await prisma.cart.deleteMany()
  await prisma.voiceOrder.deleteMany()
  await prisma.product.deleteMany()

  // Crear productos
  for (const product of PRODUCTS) {
    await prisma.product.create({
      data: {
        id: product.id,
        nombre: product.nombre,
        descripcion: product.descripcion,
        precio: product.precio,
        imagen: product.imagen,
        categoria: product.categoria,
        subcategoria: product.subcategoria,
        stock: product.stock || 100,
        oferta: product.oferta || false,
        nuevo: product.nuevo || true,
        mas_vendido: product.mas_vendido || false
      }
    })
  }

  console.log(`✅ ${PRODUCTS.length} productos creados!`)
}

main()
  .catch((e) => {
    console.error('❌ Error seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
