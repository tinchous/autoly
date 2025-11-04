// src/app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const categoria = searchParams.get('categoria');
    const mas_vendido = searchParams.get('mas_vendido');
    
    const products = await prisma.product.findMany({
      where: {
        ...(categoria && categoria !== 'TODAS' && { categoria }),
        ...(mas_vendido && { mas_vendido: mas_vendido === 'true' })
      },
      orderBy: { nombre: 'asc' },
      take: 100
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });
  }
}