'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaShoppingCart, FaUserCircle } from 'react-icons/fa';

export interface NavigationItem {
  label: string;
  href: string;
}

export interface HeaderProps {
  logoText?: string;
  navigationItems?: NavigationItem[];
  cartItemCount?: number;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  hoverColor?: string;
  badgeBackgroundColor?: string;
  badgeTextColor?: string;
}

export function Header({
  logoText = 'Game Treasures',
  navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'About', href: '/about' },
  ],
  cartItemCount = 0,
  className = '',
  backgroundColor = 'bg-primary-800',
  textColor = 'text-content-primary',
  hoverColor = 'hover:text-accent-blue-light',
  badgeBackgroundColor = 'bg-accent-blue-light',
  badgeTextColor = 'text-primary-900',
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`${backgroundColor} ${textColor} ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/"
            className="text-lg md:text-xl font-bold tracking-tight hover:text-accent-blue-light transition-colors"
          >
            {logoText}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${hoverColor}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Cart, User and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <Link
              href="/cart"
              className="relative p-2 rounded-full hover:bg-primary-700 transition-colors"
            >
              <FaShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span
                  className={`absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-medium rounded-full ${badgeBackgroundColor} ${badgeTextColor}`}
                >
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* User Icon */}
            <Link 
              href="/login" 
              className={`transition-colors ${textColor} ${hoverColor}`}
            >
              <FaUserCircle className="w-5 h-5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-primary-700 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-primary-700">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block py-2 px-4 text-base font-medium rounded-lg hover:bg-primary-700 transition-colors ${hoverColor}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
