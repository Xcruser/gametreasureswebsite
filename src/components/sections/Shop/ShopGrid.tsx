'use client';

import { Card } from '@/components/ui/Card/Card';
import { useCart } from '@/lib/CartContext';
import { getItemImage } from '@/lib/constants';
import { cn } from '@/utils/cn';

interface ShopItem {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string | null;
}

interface ShopGridProps {
  items: ShopItem[];
  className?: string;
}

export function ShopGrid({ items, className }: ShopGridProps) {
  const { addItem } = useCart();

  return (
    <div className={cn(
      'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6',
      className
    )}>
      {items.map((item) => (
        <div key={item.id} className="flex flex-col">
          <Card
            title={item.name}
            image={getItemImage(item.imageUrl)}
            price={item.price}
            className="h-full"
            onAddToCart={() => addItem({ ...item, quantity: 1 })}
          />
        </div>
      ))}
    </div>
  );
}
