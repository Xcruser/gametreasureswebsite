import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get('admin_token');

  if (!token) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  // TODO: Hier Token validieren

  return new NextResponse('OK', { status: 200 });
}
