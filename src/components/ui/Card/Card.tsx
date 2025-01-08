'use client';

import { cn } from '@/utils/cn';
import { FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';

interface CardProps {
  className?: string;
  // Content Props
  title: string;
  subtitle?: string;
  price: number;
  image: string;
  // Style Props
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'gradient' | 'solid';
  gradientFrom?: string;
  gradientTo?: string;
  backgroundColor?: string;
  imageHeight?: 'sm' | 'md' | 'lg';
  // Animation Props
  animation?: 'none' | 'hover' | 'pulse' | 'bounce';
  // Button Props
  buttonText?: string;
  buttonVariant?: 'primary' | 'secondary' | 'ghost';
  buttonIcon?: boolean;
  // Text Props
  titleSize?: 'sm' | 'md' | 'lg';
  priceColor?: string;
  // Event Handlers
  onAddToCart?: () => void;
}

export function Card({
  className,
  // Content Props
  title,
  subtitle,
  price,
  image,
  // Style Props
  size = 'md',
  variant = 'gradient',
  gradientFrom = '#1e293b',
  gradientTo = '#0f172a',
  backgroundColor = '#1e293b',
  imageHeight = 'md',
  // Animation Props
  animation = 'hover',
  // Button Props
  buttonText = 'In den Warenkorb',
  buttonVariant = 'primary',
  buttonIcon = true,
  // Text Props
  titleSize = 'md',
  priceColor = '#3b82f6',
  // Event Handler
  onAddToCart,
}: CardProps) {
  // Size Maps
  const sizeMap = {
    sm: 'max-w-[250px]',
    md: 'max-w-[300px]',
    lg: 'max-w-[350px]',
  };

  const imageHeightMap = {
    sm: 'h-32',
    md: 'h-40',
    lg: 'h-48',
  };

  const titleSizeMap = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
  };

  // Animation Classes
  const animationMap = {
    none: '',
    hover: 'hover:shadow-2xl hover:scale-[1.02] transition-all duration-200',
    pulse: 'hover:shadow-2xl hover:scale-[1.02] animate-pulse transition-all duration-200',
    bounce: 'hover:shadow-2xl hover:scale-[1.02] hover:animate-bounce transition-all duration-200',
  };

  // Background Style
  const getBackground = () => {
    switch (variant) {
      case 'gradient':
        return `bg-gradient-to-b from-[${gradientFrom}] to-[${gradientTo}]`;
      case 'solid':
        return `bg-[${backgroundColor}]`;
      default:
        return 'bg-slate-800';
    }
  };

  // Button Style
  const buttonStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    ghost: 'bg-transparent hover:bg-gray-700/20 text-white border border-white',
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg shadow-xl',
        getBackground(),
        sizeMap[size],
        animationMap[animation],
        className
      )}
    >
      {/* Image */}
      <div className={cn('relative overflow-hidden', imageHeightMap[imageHeight])}>
        <Image
          src={image}
          alt={title || 'Card image'}
          width={500}
          height={300}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className={cn('font-semibold text-white mb-1', titleSizeMap[titleSize])}>
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-gray-400 mb-3">{subtitle}</p>
        )}
        
        <div className="flex items-center justify-between">
          <span className="font-bold" style={{ color: priceColor }}>
            €{price.toFixed(2)}
          </span>
          <button
            onClick={onAddToCart}
            className={cn(
              'flex items-center gap-2 px-4 py-2 rounded-md transition-colors',
              buttonStyles[buttonVariant]
            )}
          >
            {buttonIcon && <FaShoppingCart className="w-4 h-4" />}
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

// Unterkomponenten für bessere Struktur
Card.Header = function CardHeader({ children, className = '' }: any) {
  return (
    <div className={cn('p-4 border-b border-gray-200', className)}>
      {children}
    </div>
  );
};

Card.Body = function CardBody({ children, className = '' }: any) {
  return (
    <div className={cn('p-4', className)}>
      {children}
    </div>
  );
};

Card.Footer = function CardFooter({ children, className = '' }: any) {
  return (
    <div className={cn('p-4 border-t border-gray-200', className)}>
      {children}
    </div>
  );
};
