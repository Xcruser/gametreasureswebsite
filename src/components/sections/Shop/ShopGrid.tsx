'use client';

import { Card } from '@/components/ui/Card/Card';
import { Button } from '@/components/ui/Button/Button';
import { useCart } from '@/lib/CartContext';
import { getItemImage } from '@/lib/constants';
import { cn } from '@/utils/cn';
import Image from 'next/image';

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
        <Card key={item.id} className="flex flex-col">
          <Card.Header>
            <Image 
              src={getItemImage(item.imageUrl)} 
              alt={item.name}
              width={500}
              height={500}
              className="w-full h-48 object-cover"
            />
          </Card.Header>
          <Card.Body>
            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <p className="text-lg font-bold text-blue-600">{item.price} €</p>
          </Card.Body>
          <Card.Footer>
            <Button 
              onClick={() => addItem({ ...item, quantity: 1 })}
              className="w-full"
            >
              In den Warenkorb
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
}
