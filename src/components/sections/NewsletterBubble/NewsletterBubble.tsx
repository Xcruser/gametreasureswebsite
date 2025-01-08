'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { cn } from '@/utils/cn';

interface NewsletterBubbleProps {
  className?: string;
  position?: 'bottom-right' | 'bottom-left';
  title?: string;
  description?: string;
  buttonText?: string;
  placeholderText?: string;
  successMessage?: string;
  backgroundColor?: string;
  textColor?: string;
  onSubscribe?: (email: string) => void;
  showOnMobile?: boolean;
  defaultOpen?: boolean;
  defaultSubmitted?: boolean;
}

export function NewsletterBubble({
  className,
  position = 'bottom-right',
  title = 'Newsletter abonnieren',
  description = 'Bleibe auf dem Laufenden über neue Spiele und Angebote!',
  buttonText = 'Abonnieren',
  placeholderText = 'Deine E-Mail-Adresse',
  successMessage = 'Vielen Dank fürs Abonnieren!',
  backgroundColor = 'white',
  textColor = 'gray-900',
  onSubscribe,
  showOnMobile = false,
  defaultOpen = false,
  defaultSubmitted = false,
}: NewsletterBubbleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(defaultSubmitted);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Bitte gib eine E-Mail-Adresse ein');
      return;
    }
    if (!email.includes('@')) {
      setError('Bitte gib eine gültige E-Mail-Adresse ein');
      return;
    }
    
    onSubscribe?.(email);
    setIsSubmitted(true);
    setError('');
  };

  if (isSubmitted) {
    return (
      <div className={cn(
        'fixed z-50 p-4 rounded-2xl shadow-xl',
        'transform transition-all duration-300 ease-in-out',
        position === 'bottom-right' ? 'bottom-6 right-6' : 'bottom-6 left-6',
        !showOnMobile && 'hidden md:block',
        `bg-${backgroundColor}`,
        `text-${textColor}`,
        className
      )}>
        <div className="text-center py-2">
          <p className="font-medium">{successMessage}</p>
        </div>
      </div>
    );
  }

  const toggleBubble = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setError('');
    }
  };

  return (
    <div className={cn(
      'fixed z-50',
      position === 'bottom-right' ? 'bottom-6 right-6' : 'bottom-6 left-6',
      !showOnMobile && 'hidden md:block',
      className
    )}>
      {/* Geschlossener Zustand - Bubble */}
      {!isOpen && (
        <button
          onClick={toggleBubble}
          className={cn(
            'w-12 h-12 rounded-full shadow-lg flex items-center justify-center',
            'transform transition-all hover:scale-110',
            `bg-${backgroundColor}`,
            `text-${textColor}`
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </button>
      )}

      {/* Geöffneter Zustand - Newsletter Form */}
      {isOpen && (
        <div className={cn(
          'p-4 rounded-2xl shadow-xl',
          'transform transition-all duration-300 ease-in-out',
          'w-72',
          `bg-${backgroundColor}`,
          `text-${textColor}`
        )}>
          <button
            onClick={toggleBubble}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className="space-y-3">
            <div className="space-y-1">
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholderText}
                  className={cn(
                    'w-full px-3 py-2 text-sm rounded-lg',
                    'border border-gray-300',
                    'focus:outline-none focus:ring-2 focus:ring-blue-500',
                    error ? 'border-red-500' : 'border-gray-300'
                  )}
                />
                {error && (
                  <p className="mt-1 text-xs text-red-500">{error}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="small"
                className="w-full"
              >
                {buttonText}
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
