'use client';

import { useShopItems } from '@/hooks/useShopItems';
import { ItemCard } from '@/components/ItemCard/ItemCard';
import { useCart } from '@/lib/CartContext';

export default function ShopPage() {
  const { data, isLoading, error } = useShopItems();
  const { addItem } = useCart();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-500">
          Error loading items: {error.message}
        </div>
      </div>
    );
  }

  if (!data?.items?.length) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          No items available.
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.items.map((item) => (
          <div key={item.id}>
            <ItemCard
              item={{
                ...item,
                price: typeof item.price === 'object' && 'toNumber' in item.price 
                  ? item.price.toNumber() 
                  : Number(item.price)
              }}
              onAddToCart={addItem}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
