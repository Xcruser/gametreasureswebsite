'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-800/50 rounded-lg overflow-hidden backdrop-blur-sm"
    >
      <div className="relative aspect-video">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
          {product.gameType}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{product.title}</h3>
        
        <div className="flex justify-between items-center">
          <span className="text-blue-400 font-bold">€{product.price.toFixed(2)}</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="text-white bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded flex items-center gap-2 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            In den Warenkorb
          </button>
        </div>

        <a 
          href={product.link || '#'} 
          className="text-gray-400 hover:text-white text-sm mt-2 inline-block transition-colors"
        >
          Mehr
        </a>
      </div>
    </motion.div>
  );
}
