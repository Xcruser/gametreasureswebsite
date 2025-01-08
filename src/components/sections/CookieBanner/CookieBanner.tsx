'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { cookieService } from '@/lib/services/cookieService';
import Link from 'next/link';

interface CookieBannerProps {
  className?: string;
  // Layout-Optionen
  position?: 'top' | 'bottom';
  maxWidth?: string;
  showContainer?: boolean;
  // Button-Optionen
  buttonSize?: 'small' | 'medium' | 'large';
  buttonClassName?: string;
  reverseButtonOrder?: boolean;
  buttonsFullWidth?: boolean;
  // Callback wenn Banner geschlossen wird
  onClose?: () => void;
}

export function CookieBanner({ 
  className,
  position = 'bottom',
  maxWidth = 'max-w-screen-lg',
  showContainer = true,
  buttonSize = 'medium',
  buttonClassName,
  reverseButtonOrder = false,
  buttonsFullWidth = false,
  onClose,
}: CookieBannerProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Zeige Banner nur, wenn noch keine Cookie-Einstellungen vorhanden sind
    const consent = cookieService.getStoredConsent();
    setShow(!consent);
  }, []);

  const handleAcceptAll = () => {
    cookieService.acceptAll();
    setShow(false); // Banner ausblenden nach Akzeptieren
    onClose?.();
  };

  const handleAcceptNecessary = () => {
    cookieService.acceptNecessary();
    setShow(false); // Banner ausblenden nach Akzeptieren
    onClose?.();
  };

  if (!show) return null;

  const containerClasses = cn(
    'fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6',
    className
  );

  const contentClasses = cn(
    'bg-primary-900/95 backdrop-blur-sm border-t border-primary-700/50',
    showContainer && [
      'mx-4 my-4 rounded-lg',
      'bg-primary-800/50',
      'border border-primary-700/50'
    ]
  );

  const maxWidthClasses = maxWidth;

  const buttonSizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  }[buttonSize];

  const buttons = [
    <Button
      key="accept-all"
      onClick={handleAcceptAll}
      className={cn(
        buttonSizeClasses,
        'bg-primary-600 hover:bg-primary-700 text-white',
        buttonsFullWidth && 'w-full',
        buttonClassName
      )}
    >
      Alle akzeptieren
    </Button>,
    <Button
      key="accept-necessary"
      onClick={handleAcceptNecessary}
      className={cn(
        buttonSizeClasses,
        'bg-primary-800/50 hover:bg-primary-700/50 text-white',
        buttonsFullWidth && 'w-full',
        buttonClassName
      )}
    >
      Nur erforderliche
    </Button>,
  ];

  if (reverseButtonOrder) {
    buttons.reverse();
  }

  return (
    <div className={containerClasses}>
      <div className={cn('mx-auto', maxWidthClasses)}>
        <div className={contentClasses}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-semibold text-content-primary mb-1 sm:mb-2">
                Diese Website verwendet Cookies
              </h3>
              <p className="text-sm sm:text-base text-content-secondary">
                Wir nutzen Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.{' '}
                <Link href="/cookies" className="text-content-primary hover:text-content-secondary underline">
                  Mehr erfahren
                </Link>
              </p>
            </div>
            <div className={cn(
              'flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto',
              buttonsFullWidth && 'w-full flex-col',
              !buttonsFullWidth && 'flex-row'
            )}>
              {buttons}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
