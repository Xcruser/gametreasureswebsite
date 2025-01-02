import { prisma } from '@/lib/db/prisma';
import { NextResponse } from 'next/server';

// GET /api/shop/items - Liste alle Items mit Suchparametern
export async function GET() {
  try {
    const items = await prisma.item.findMany({
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json({
      items,
      total: items.length
    });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({ error: 'Database Error' }, { status: 500 });
  }
}
