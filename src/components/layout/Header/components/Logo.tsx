'use client';

import Link from 'next/link';
import { cn } from '@/utils/cn';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={cn(
        'text-xl font-bold text-blue-600',
        'hover:text-blue-700 transition-colors',
        className
      )}
    >
      Game Treasures
    </Link>
  );
}
