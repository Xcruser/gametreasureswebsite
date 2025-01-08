'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NavigationItem } from './components/NavigationItem';
import { CartButton } from './components/CartButton';
import { cn } from '@/utils/cn';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  navigationItems: Array<{
    label: string;
    href: string;
  }>;
  className?: string;
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Kontakt', href: '/contact' },
];

export function Header({ navigationItems, className }: HeaderProps) {
  const pathname = usePathname();
  const useDarkTheme = pathname === '/' || pathname === '/shop' || pathname === '/contact' || pathname === '/cookies';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        useDarkTheme 
          ? 'bg-transparent text-white' 
          : 'bg-white shadow-md text-gray-800',
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className={cn(
            'text-2xl font-bold',
            useDarkTheme ? 'text-white' : 'text-gray-800'
          )}>
            Game Treasures
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <NavigationItem 
                key={item.href} 
                {...item} 
                className={useDarkTheme ? 'text-white hover:text-white/80' : undefined}
              />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              'md:hidden p-2',
              useDarkTheme ? 'text-white hover:text-white/80' : 'text-gray-800 hover:text-gray-900'
            )}
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>

          {/* Cart Button */}
          <CartButton className={useDarkTheme ? 'text-white' : undefined} />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-primary-900/95 backdrop-blur-sm border-b border-primary-700/50">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-content-secondary hover:text-content-primary hover:bg-primary-800/50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
