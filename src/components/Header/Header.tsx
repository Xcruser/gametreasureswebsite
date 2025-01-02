import React from 'react';
import Link from 'next/link';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';

export interface HeaderProps {
  /**
   * Optional custom class name
   */
  className?: string;
  /**
   * Navigation items for the header
   */
  navigationItems?: Array<{
    label: string;
    href: string;
  }>;
  /**
   * Background color of the header
   */
  backgroundColor?: string;
  /**
   * Text color for the header
   */
  textColor?: string;
  /**
   * Hover color for navigation items
   */
  hoverColor?: string;
  /**
   * Logo position - 'left' or 'center'
   */
  logoPosition?: 'left' | 'center';
  /**
   * Navigation position - 'left', 'center', or 'right'
   */
  navPosition?: 'left' | 'center' | 'right';
  /**
   * Custom padding for the header
   */
  padding?: string;
  /**
   * Logo text or brand name
   */
  logoText?: string;
  /**
   * Number of items in cart
   */
  cartItemCount?: number;
  /**
   * Background color for the cart badge
   */
  badgeBackgroundColor?: string;
  /**
   * Text color for the cart badge
   */
  badgeTextColor?: string;
}

export const Header: React.FC<HeaderProps> = ({
  className = '',
  navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'Games', href: '/games' },
    { label: 'About', href: '/about' },
  ],
  backgroundColor = 'bg-primary-800',
  textColor = 'text-content-primary',
  hoverColor = 'hover:text-accent-blue-light',
  logoPosition = 'left',
  navPosition = 'right',
  padding = 'py-4',
  logoText = 'Game Treasures',
  cartItemCount = 0,
  badgeBackgroundColor = 'bg-accent-blue-light',
  badgeTextColor = 'text-primary-900',
}) => {
  const containerStyles = `w-full ${backgroundColor} ${textColor} ${padding} ${className} border-b border-primary-600`;
  
  const getNavStyles = () => {
    if (navPosition === 'center') {
      return 'absolute left-1/2 transform -translate-x-1/2';
    }
    return {
      left: 'ml-8',
      right: 'ml-auto',
    }[navPosition];
  };

  const logoStyles = {
    left: 'text-left',
    center: 'text-center w-full',
  };

  return (
    <header className={containerStyles}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center relative">
          <div className={`text-xl font-bold ${logoStyles[logoPosition]} text-accent-blue-DEFAULT hover:text-accent-blue-light transition-colors`}>
            <Link href="/">
              {logoText}
            </Link>
          </div>
          <ul className={`flex space-x-6 ${getNavStyles()}`}>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition-colors ${textColor} ${hoverColor}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4 ml-auto">
            <Link 
              href="/cart" 
              className={`relative transition-colors ${textColor} ${hoverColor}`}
            >
              <FaShoppingCart className="text-xl" />
              {cartItemCount > 0 && (
                <span className={`absolute -top-2 -right-2 ${badgeBackgroundColor} ${badgeTextColor} font-bold text-xs rounded-full min-w-[20px] h-5 flex items-center justify-center px-1`}>
                  {cartItemCount}
                </span>
              )}
            </Link>
            <Link 
              href="/login" 
              className={`transition-colors ${textColor} ${hoverColor}`}
            >
              <FaUserCircle className="text-xl" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
