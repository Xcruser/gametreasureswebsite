import { prisma } from '@/lib/db/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { updateItemSchema } from '@/lib/validations/shop';
import { ZodError } from 'zod';

// GET /api/shop/items/[id] - Hole ein einzelnes Item
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const item = await prisma.item.findUnique({
      where: { id }
    });

    if (!item) {
      return NextResponse.json(
        { error: 'Item not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(item);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Database Error' },
      { status: 500 }
    );
  }
}

// PATCH /api/shop/items/[id] - Aktualisiere ein Item
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const validatedData = updateItemSchema.parse(body);

    const updatedItem = await prisma.item.update({
      where: { id },
      data: validatedData,
    });

    return NextResponse.json(updatedItem);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: error.errors },
        { status: 400 }
      );
    }
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Database Error' },
      { status: 500 }
    );
  }
}

// DELETE /api/shop/items/[id] - Lösche ein Item
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.item.delete({
      where: { id }
    });

    return NextResponse.json(
      { message: 'Item deleted successfully' }
    );
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Database Error' },
      { status: 500 }
    );
  }
}
