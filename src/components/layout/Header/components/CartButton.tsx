'use client';

import { useCart } from '@/contexts/CartContext';
import { cn } from '@/utils/cn';

interface CartButtonProps {
  className?: string;
}

export function CartButton({ className }: CartButtonProps) {
  const { items } = useCart();
  const itemCount = items.length;

  return (
    <button className={cn(
      'relative p-2 hover:opacity-80 rounded-full transition-all',
      className
    )}>
      <span className="text-xl">🛒</span>
      {itemCount > 0 && (
        <span className={cn(
          'absolute -top-1 -right-1',
          'bg-red-500 text-white',
          'text-xs font-bold',
          'w-5 h-5 rounded-full',
          'flex items-center justify-center'
        )}>
          {itemCount}
        </span>
      )}
    </button>
  );
}
