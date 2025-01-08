'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';

interface NavigationItemProps {
  href: string;
  label: string;
  className?: string;
}

export function NavigationItem({ href, label, className }: NavigationItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'transition-colors duration-200',
        isActive ? 'font-semibold' : 'hover:text-gray-600',
        className
      )}
    >
      {label}
    </Link>
  );
}
