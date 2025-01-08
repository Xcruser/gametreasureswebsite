'use client';

import { Product } from '@/types/product';
import { ProductCard } from '@/components/ui/ProductCard/ProductCard';
import { useCart } from '@/contexts/CartContext';

interface ClientShopProps {
  products: Product[];
}

export function ClientShop({ products }: ClientShopProps) {
  const { addToCart } = useCart();

  const specialProducts = products.filter(p => p.category === 'special');
  const diceProducts = products.filter(p => p.category === 'dice');

  return (
    <>
      {/* Spezial Produkte */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-200 mb-8">Spezial</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </section>

      {/* Würfel Produkte */}
      <section>
        <h2 className="text-3xl font-bold text-gray-200 mb-8">Würfel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diceProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </section>
    </>
  );
}
