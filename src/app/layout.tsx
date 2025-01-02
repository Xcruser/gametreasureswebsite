import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { headerConfig } from '@/config/components';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Game Treasures',
  description: 'Entdecken Sie exklusive Gaming-Items',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Header {...headerConfig} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
