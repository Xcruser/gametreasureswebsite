'use client';
import { motion, HTMLMotionProps } from 'framer-motion';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonColor = 'blue' | 'green' | 'purple';
export type ButtonAnimation = 'scale' | 'bounce' | 'pulse' | 'none';

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  withAnimation?: boolean;
  animationType?: ButtonAnimation;
  className?: string;
  children?: ReactNode;
};

type HTMLButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps>;
type MotionButtonProps = Omit<HTMLMotionProps<"button">, keyof ButtonBaseProps>;

export type ButtonProps = ButtonBaseProps & (HTMLButtonProps | MotionButtonProps);

const variants = {
  primary: 'bg-accent-blue-light hover:bg-accent-blue text-primary-900',
  secondary: 'bg-primary-700 hover:bg-primary-600 text-content-primary',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm md:text-base w-full sm:w-auto',
  lg: 'px-6 py-3 text-base md:text-lg w-full sm:w-auto',
};

const colors = {
  blue: 'bg-accent-blue-light hover:bg-accent-blue',
  green: 'bg-accent-green-light hover:bg-accent-green',
  purple: 'bg-accent-purple-light hover:bg-accent-purple',
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
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  none: {},
};

export function Button({
  variant = 'primary',
  size = 'md',
  color = 'blue',
  withAnimation = true,
  animationType = 'scale',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const buttonClass = `
    ${variants[variant]}
    ${sizes[size]}
    ${color !== 'blue' ? colors[color] : ''}
    rounded-lg font-medium transition-colors
    ${className}
  `.trim();

  if (!withAnimation || animationType === 'none') {
    return (
      <button
        className={buttonClass}
        {...(props as HTMLButtonProps)}
      >
        {children}
      </button>
    );
  }

  return (
    <motion.button
      className={buttonClass}
      {...animations[animationType]}
      {...(props as MotionButtonProps)}
    >
      {children}
    </motion.button>
  );
}
