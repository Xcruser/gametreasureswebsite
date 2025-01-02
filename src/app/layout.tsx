import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Header } from '@/components/Header/Header';
import { headerConfig } from '@/config/components';
import { Providers } from './providers';
import { CartProvider } from '@/lib/CartContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Game Treasures',
  description: 'Entdecke und kaufe In-Game Items für deine Lieblingsspiele',
  keywords: ['Game', 'Items', 'Shop', 'Gaming', 'In-Game', 'Monopoly Go'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Konvertiere die readonly Props in mutable Props
  const headerProps = {
    ...headerConfig,
    navigationItems: [...headerConfig.navigationItems],
  };

  return (
    <html lang="de">
      <body className={inter.className}>
        <Providers>
          <CartProvider>
            <Header {...headerProps} />
            {children}
          </CartProvider>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
