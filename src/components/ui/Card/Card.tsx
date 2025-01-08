'use client';

import { cn } from '@/utils/cn';
import Image from 'next/image';

interface CardProps {
  className?: string;
  // Content Props
  title?: string;
  subtitle?: string;
  image?: string;
  imageHeight?: 'sm' | 'md' | 'lg';
  price?: number;
  onAddToCart?: () => void;
}

export function Card({
  className,
  title,
  subtitle,
  image,
  imageHeight = 'md',
  price,
  onAddToCart,
}: CardProps) {
  // Size Maps
  const imageHeightMap = {
    sm: 'h-32',
    md: 'h-40',
    lg: 'h-48',
  };

  return (
    <div
      className={cn(
        'rounded-lg shadow-md overflow-hidden bg-white',
        className
      )}
    >
      {/* Image */}
      {image && (
        <div className={cn('relative overflow-hidden', imageHeightMap[imageHeight])}>
          <Image
            src={image}
            alt={title || 'Card image'}
            width={500}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
        {subtitle && <p className="text-gray-600 mb-2">{subtitle}</p>}
        {price && <p className="text-lg font-bold text-blue-600">{price} €</p>}
      </div>

      {/* Actions */}
      {onAddToCart && (
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={onAddToCart}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            In den Warenkorb
          </button>
        </div>
      )}
    </div>
  );
}

Card.Header = function CardHeader({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn('p-4 border-b border-gray-200', className)}>
      {children}
    </div>
  );
};

Card.Body = function CardBody({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn('p-4', className)}>
      {children}
    </div>
  );
};

Card.Footer = function CardFooter({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn('p-4 border-t border-gray-200', className)}>
      {children}
    </div>
  );
};
