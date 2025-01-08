'use client';

import Link from 'next/link';
import { NavigationItem } from './components/NavigationItem';
import { Logo } from './components/Logo';
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

export function Header({ navigationItems, className }: HeaderProps) {
  const pathname = usePathname();
  const useDarkTheme = pathname === '/' || pathname === '/shop' || pathname === '/contact';

  return (
    <header 
      className={cn(
        'w-full',
        useDarkTheme 
          ? 'absolute top-0 left-0 right-0 bg-transparent text-white z-50' 
          : 'bg-white shadow-md text-gray-800',
        className
      )}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className={cn(
          'text-2xl font-bold',
          useDarkTheme ? 'text-white' : 'text-gray-800'
        )}>
          Game Treasures
        </Link>
        <nav className="flex gap-6">
          {navigationItems.map((item) => (
            <NavigationItem 
              key={item.href} 
              {...item} 
              className={useDarkTheme ? 'text-white hover:text-white/80' : undefined}
            />
          ))}
        </nav>
        <CartButton className={useDarkTheme ? 'text-white' : undefined} />
      </div>
    </header>
  );
}
