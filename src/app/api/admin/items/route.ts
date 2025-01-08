import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import prisma from '@/lib/prisma';
import { CreateItemInput, UpdateItemInput } from '@/types/item';

// Middleware für Admin-Auth-Check
async function checkAdminAuth() {
  const cookieStore = cookies();
  const token = cookieStore.get('admin_token');
  
  if (!token) {
    return false;
  }
  
  // TODO: Token validieren
  return true;
}

// GET: Alle Items abrufen
export async function GET() {
  if (!await checkAdminAuth()) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const items = await prisma.item.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(items);
  } catch (error) {
    console.error('Failed to fetch items:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// POST: Neues Item erstellen
export async function POST(request: Request) {
  if (!await checkAdminAuth()) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const body: CreateItemInput = await request.json();
    
    const item = await prisma.item.create({
      data: {
        ...body,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    });
    
    return NextResponse.json(item);
  } catch (error) {
    console.error('Failed to create item:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// PUT: Item aktualisieren
export async function PUT(request: Request) {
  if (!await checkAdminAuth()) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const body: UpdateItemInput = await request.json();
    const { id, ...updateData } = body;
    
    const item = await prisma.item.update({
      where: { id },
      data: {
        ...updateData,
        updatedAt: new Date(),
      }
    });
    
    return NextResponse.json(item);
  } catch (error) {
    console.error('Failed to update item:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// DELETE: Item löschen
export async function DELETE(request: Request) {
  if (!await checkAdminAuth()) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const { id } = await request.json();
    
    await prisma.item.delete({
      where: { id }
    });
    
    return new NextResponse('OK', { status: 200 });
  } catch (error) {
    console.error('Failed to delete item:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
