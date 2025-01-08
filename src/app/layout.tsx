import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Providers } from './providers';
import { CartProvider } from '@/contexts/CartContext';
import { Header } from '@/components/layout/Header/Header';

const inter = Inter({ subsets: ['latin'] });

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Kontakt', href: '/contact' },
];

export const metadata = {
  title: 'GameTreasures - Monopoly GO Items',
  description: 'Entdecken Sie exklusive Monopoly GO Items - sicher und diskret.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Providers>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Header navigationItems={navigationItems} />
              <main className="flex-grow">{children}</main>
            </div>
          </CartProvider>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
