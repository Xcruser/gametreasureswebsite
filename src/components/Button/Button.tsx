'use client';
import { motion } from 'framer-motion';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'green' | 'purple';
  withAnimation?: boolean;
  animationType?: 'scale' | 'bounce' | 'pulse' | 'none';
}

export function Button({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  color = 'blue',
  withAnimation = true,
  animationType = 'scale',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50';
  
  const colors = {
    blue: {
      primary: 'bg-accent-blue-light text-primary-900 hover:bg-accent-blue-DEFAULT focus:ring-accent-blue-light',
      secondary: 'bg-transparent border-2 border-accent-blue-light text-accent-blue-light hover:bg-accent-blue-light hover:text-primary-900 focus:ring-accent-blue-light',
    },
    green: {
      primary: 'bg-accent-green-light text-primary-900 hover:bg-accent-green-DEFAULT focus:ring-accent-green-light',
      secondary: 'bg-transparent border-2 border-accent-green-light text-accent-green-light hover:bg-accent-green-light hover:text-primary-900 focus:ring-accent-green-light',
    },
    purple: {
      primary: 'bg-accent-purple-light text-primary-900 hover:bg-accent-purple-DEFAULT focus:ring-accent-purple-light',
      secondary: 'bg-transparent border-2 border-accent-purple-light text-accent-purple-light hover:bg-accent-purple-light hover:text-primary-900 focus:ring-accent-purple-light',
    },
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm md:text-base w-full sm:w-auto',
    lg: 'px-6 py-3 text-base md:text-lg w-full sm:w-auto',
  };

  const animations = {
    scale: {
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
    },
    bounce: {
      whileHover: { y: -3 },
      whileTap: { y: 1 },
    },
    pulse: {
      whileHover: { 
        scale: [1, 1.05, 1],
        transition: {
          duration: 0.8,
          repeat: Infinity,
        }
      },
      whileTap: { scale: 0.95 },
    },
    none: {},
  };

  const buttonClass = `${baseStyles} ${colors[color][variant]} ${sizes[size]} ${className}`;

  if (withAnimation && animationType !== 'none') {
    return (
      <motion.button
        className={buttonClass}
        {...animations[animationType]}
        {...props}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <button
      className={buttonClass}
      {...props}
    >
      {children}
    </button>
  );
}
