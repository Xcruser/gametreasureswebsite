import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';
import { Prisma } from '@prisma/client';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      );
    }

    // Speichere die E-Mail in der Datenbank mit Prisma
    await prisma.newsletterSubscriber.create({
      data: {
        email,
      },
    });

    return NextResponse.json(
      { message: 'Erfolgreich zum Newsletter angemeldet' },
      { status: 200 }
    );
  } catch (error) {
    // Wenn die E-Mail bereits existiert (unique constraint violation)
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      return NextResponse.json(
        { message: 'Du bist bereits zum Newsletter angemeldet' },
        { status: 200 }
      );
    }

    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Fehler bei der Newsletter-Anmeldung' },
      { status: 500 }
    );
  }
}
