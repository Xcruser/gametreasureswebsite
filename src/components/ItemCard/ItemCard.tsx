'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '../Button/Button';
import { formatPrice } from '@/utils/formatPrice';
import { cn } from '@/utils/cn';
import { FaShoppingCart, FaBolt } from 'react-icons/fa';

export interface ItemCardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  width?: 'sm' | 'md' | 'lg' | 'full';
  className?: string;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
}

const widthClasses = {
  sm: 'w-64',
  md: 'w-80',
  lg: 'w-96',
  full: 'w-full',
};

const titleClasses = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
  full: 'text-2xl md:text-3xl',
};

const descriptionClasses = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
  full: 'text-base md:text-lg',
};

const priceClasses = {
  sm: 'text-base px-3 py-1.5',
  md: 'text-lg px-4 py-2',
  lg: 'text-xl px-5 py-2.5',
  full: 'text-xl md:text-2xl px-5 py-2.5',
};

const buttonClasses = {
  sm: 'text-sm py-1.5',
  md: 'text-base py-2',
  lg: 'text-lg py-2.5',
  full: 'text-lg md:text-xl py-3',
};

const iconSizes = {
  sm: 14,
  md: 16,
  lg: 18,
  full: 20,
};

export function ItemCard({
  title,
  description,
  price,
  imageUrl,
  width = 'md',
  className,
  onAddToCart,
  onBuyNow,
}: ItemCardProps) {
  const iconSize = iconSizes[width];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'bg-gradient-to-br from-primary-800 to-primary-900',
        'rounded-2xl overflow-hidden',
        'shadow-lg hover:shadow-xl transition-all duration-300',
        'border border-primary-700/50',
        'backdrop-blur-sm',
        widthClasses[width],
        className
      )}
    >
      {/* Bild-Container mit Overlay */}
      <div className="relative w-full aspect-[4/3] group">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes={width === 'full' ? '100vw' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
        
        {/* Preis-Badge */}
        <div className="absolute top-4 right-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={cn(
              'bg-accent-blue-light text-primary-900 rounded-full font-bold shadow-lg',
              'transition-all duration-300',
              priceClasses[width]
            )}
          >
            {formatPrice(price)}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className={cn(
        'p-4',
        width === 'lg' && 'p-5',
        width === 'full' && 'p-6 md:p-8'
      )}>
        {/* Titel */}
        <h3 className={cn(
          'font-bold text-content-primary mb-2 line-clamp-2',
          'transition-all duration-300',
          titleClasses[width]
        )}>
          {title}
        </h3>

        {/* Beschreibung */}
        <p className={cn(
          'text-content-secondary mb-6 line-clamp-2',
          'transition-all duration-300',
          descriptionClasses[width]
        )}>
          {description}
        </p>

        {/* Buttons mit Glasmorphism-Effekt */}
        <div className="flex flex-col gap-3">
          <Button
            variant="primary"
            size="lg"
            color="blue"
            onClick={onBuyNow}
            className={cn(
              'w-full bg-accent-blue-light/90 hover:bg-accent-blue-light transition-colors backdrop-blur-sm',
              'flex items-center justify-center gap-2',
              buttonClasses[width]
            )}
            animationType="scale"
          >
            <FaBolt size={iconSize} />
            Sofort Kaufen
          </Button>
          <Button
            variant="secondary"
            size="lg"
            color="blue"
            onClick={onAddToCart}
            className={cn(
              'w-full border border-accent-blue-light/20 hover:bg-accent-blue-light/10 transition-colors backdrop-blur-sm',
              'flex items-center justify-center gap-2 group',
              buttonClasses[width]
            )}
            animationType="scale"
          >
            <motion.div
              initial={false}
              animate={{ rotate: onAddToCart ? 360 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaShoppingCart size={iconSize} className="transform transition-transform group-hover:scale-110" />
            </motion.div>
            In den Warenkorb
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
