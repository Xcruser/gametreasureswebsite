import { ShopGrid } from '@/components/sections/Shop/ShopGrid';
import { Product } from '@/types/product';
import { ClientShop } from './components/ClientShop';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground/AnimatedBackground';

// Produktdaten
const products: Product[] = [
  // Spezial Produkte
  {
    id: 'top-bar',
    title: 'Top Bar',
    price: 32.99,
    image: '/products/monopoly-special-1.jpg',
    category: 'special',
    gameType: 'Monopoly GO',
  },
  {
    id: 'top-bar-event',
    title: 'Top Bar & Event + 13.000 Würfel',
    price: 46.99,
    image: '/products/monopoly-special-2.jpg',
    category: 'special',
    gameType: 'Monopoly GO',
  },
  {
    id: 'top-bar-dice',
    title: 'Top Bar + 10.000 Würfel',
    price: 39.99,
    image: '/products/monopoly-special-3.jpg',
    category: 'special',
    gameType: 'Monopoly GO',
  },
  
  // Würfel Produkte
  {
    id: 'dice-6000',
    title: '6.000 Würfel',
    price: 19.99,
    image: '/products/monopoly-dice.jpg',
    category: 'dice',
    gameType: 'Monopoly GO',
  },
  {
    id: 'dice-10000',
    title: '10.000 Würfel',
    price: 24.99,
    image: '/products/monopoly-dice.jpg',
    category: 'dice',
    gameType: 'Monopoly GO',
  },
  {
    id: 'dice-15000',
    title: '15.000 Würfel',
    price: 29.99,
    image: '/products/monopoly-dice.jpg',
    category: 'dice',
    gameType: 'Monopoly GO',
  },
  {
    id: 'dice-20000',
    title: '20.000 Würfel',
    price: 39.99,
    image: '/products/monopoly-dice.jpg',
    category: 'dice',
    gameType: 'Monopoly GO',
  },
  {
    id: 'dice-30000',
    title: '30.000 Würfel',
    price: 59.99,
    image: '/products/monopoly-dice.jpg',
    category: 'dice',
    gameType: 'Monopoly GO',
  },
  {
    id: 'dice-40000',
    title: '40.000 Würfel',
    price: 69.99,
    image: '/products/monopoly-dice.jpg',
    category: 'dice',
    gameType: 'Monopoly GO',
  },
  {
    id: 'dice-50000',
    title: '50.000 Würfel',
    price: 85.99,
    image: '/products/monopoly-dice.jpg',
    category: 'dice',
    gameType: 'Monopoly GO',
  },
  {
    id: 'dice-60000',
    title: '60.000 Würfel',
    price: 94.99,
    image: '/products/monopoly-dice.jpg',
    category: 'dice',
    gameType: 'Monopoly GO',
  },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground
        animationType="gaming"
        gradientColors={['#0f172a', '#1e293b']}
        iconCount={15}
        iconOpacity={0.15}
      >
        <div className="pt-24">
          <div className="container mx-auto px-4">
            <ClientShop products={products} />
          </div>
        </div>
      </AnimatedBackground>
    </div>
  );
}
