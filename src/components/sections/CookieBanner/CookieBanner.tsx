'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { cookieService } from '@/lib/services/cookieService';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(!cookieService.hasStoredConsent());
  }, []);

  const handleAcceptAll = () => {
    cookieService.acceptAll();
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    cookieService.acceptNecessary();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-primary-900/95 backdrop-blur-sm border-t border-primary-700/50">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <h3 className="text-base sm:text-lg font-semibold text-content-primary mb-1 sm:mb-2">
              Diese Website verwendet Cookies
            </h3>
            <p className="text-sm sm:text-base text-content-secondary">
              Wir nutzen Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
            <Button
              variant="secondary"
              size="small"
              className="w-full sm:w-auto text-sm whitespace-nowrap"
              onClick={handleAcceptNecessary}
            >
              Nur notwendige
            </Button>
            <Button
              variant="primary"
              size="small"
              className="w-full sm:w-auto text-sm whitespace-nowrap"
              onClick={handleAcceptAll}
            >
              Alle akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
