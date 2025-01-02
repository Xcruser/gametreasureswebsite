'use client';

import { type Item as DbItem } from '@prisma/client';
import Image from 'next/image';
import { getItemImage, DEFAULT_IMAGE } from '@/lib/constants';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

// Omit price from DbItem and add it back as number
export type CartItem = Omit<DbItem, 'price'> & {
  price: number;
  quantity?: number;
};

export interface ItemCardProps {
  item?: CartItem;
  onAddToCart?: (item: CartItem) => void;
  onQuantityChange?: (quantity: number) => void;
  initialQuantity?: number;
  isExpanded?: boolean;
  onExpandChange?: (expanded: boolean) => void;
}

const defaultItem: CartItem = {
  id: '',
  title: '',
  description: '',
  price: 0,
  imageUrl: '',
  category: 'currency',
  createdAt: new Date(),
  updatedAt: new Date(),
  inStock: true,
};

export function ItemCard({
  item = defaultItem,
  onAddToCart,
  onQuantityChange,
  initialQuantity = 1,
  isExpanded: controlledIsExpanded,
  onExpandChange,
}: ItemCardProps) {
  const { title, description, price = 0, category, imageUrl, inStock } = item;
  const [imgSrc, setImgSrc] = useState(getItemImage(imageUrl));
  const [internalIsExpanded, setInternalIsExpanded] = useState(false);
  const [quantity, setQuantity] = useState(initialQuantity);

  // Controlled vs Uncontrolled Expansion
  const isExpanded = controlledIsExpanded !== undefined ? controlledIsExpanded : internalIsExpanded;
  const setIsExpanded = (expanded: boolean) => {
    if (onExpandChange) {
      onExpandChange(expanded);
    } else {
      setInternalIsExpanded(expanded);
    }
  };

  const handleQuantityChange = (delta: number) => {
    const newQuantity = Math.max(1, quantity + delta);
    setQuantity(newQuantity);
    onQuantityChange?.(newQuantity);
  };

  const handleAddToCart = () => {
    if (!inStock) return;
    
    onAddToCart?.({
      ...item,
      quantity
    });
    setIsExpanded(false);
    setQuantity(1);
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImgSrc(DEFAULT_IMAGE)}
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-gray-900 to-transparent">
          <span className="inline-block bg-gray-900 bg-opacity-70 px-2 py-1 rounded text-blue-400 text-sm font-medium mb-1">
            {category.toLowerCase()}
          </span>
          <h3 className="text-white font-semibold text-lg truncate">{title}</h3>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-blue-500 text-xl font-bold">€{price.toFixed(2)}</span>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {isExpanded ? 'Weniger' : 'Mehr'}
          </button>
        </div>

        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <p className="text-gray-300 text-sm mb-4">{description}</p>
            
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-300">Menge:</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-600 hover:bg-gray-500 text-white transition-colors"
                  disabled={!inStock}
                >
                  -
                </button>
                <span className="text-white w-8 text-center">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-600 hover:bg-gray-500 text-white transition-colors"
                  disabled={!inStock}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={!inStock}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaShoppingCart />
          <span>{inStock ? 'In den Warenkorb' : 'Nicht verfügbar'}</span>
        </button>
      </div>
    </div>
  );
}
