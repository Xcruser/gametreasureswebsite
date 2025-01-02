import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { headerConfig } from '@/config/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Game Treasures',
  description: 'Discover and collect your favorite games',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Header {...headerConfig} />
        <main className="flex-1 container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-primary-800 border-t border-primary-600 py-6">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="text-content-secondary">
                {new Date().getFullYear()} Game Treasures
              </div>
              <nav>
                <ul className="flex space-x-6">
                  <li>
                    <a href="/privacy" className="text-content-secondary hover:text-accent-blue-light transition-colors">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="text-content-secondary hover:text-accent-blue-light transition-colors">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-content-secondary hover:text-accent-blue-light transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
