'use client';

import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accept' | 'necessary';
  size?: 'small' | 'medium' | 'large';
}

const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
  outline: 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-blue-500',
  accept: 'bg-blue-500 text-white hover:bg-blue-600',
  necessary: 'bg-[#1c2433] text-white hover:bg-[#2a3547]'
};

const sizes = {
  small: 'px-3 py-1.5 text-sm',
  medium: 'px-4 py-2',
  large: 'px-6 py-3 text-lg'
};

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  ...props 
}: ButtonProps) {
  return (
    <button 
      className={cn(
        'font-medium rounded-md transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
