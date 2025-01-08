'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { FiMail, FiX } from 'react-icons/fi';

const NEWSLETTER_DISMISSED_KEY = 'newsletter-dismissed';

export function NewsletterBubble() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem(NEWSLETTER_DISMISSED_KEY);
    setIsExpanded(!isDismissed);
  }, []);

  const handleDismiss = () => {
    setIsExpanded(false);
    localStorage.setItem(NEWSLETTER_DISMISSED_KEY, 'true');
  };

  const handleExpand = () => {
    setIsExpanded(true);
    localStorage.removeItem(NEWSLETTER_DISMISSED_KEY);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Fehler bei der Newsletter-Anmeldung');
      }

      setIsSubscribed(true);
      localStorage.setItem(NEWSLETTER_DISMISSED_KEY, 'true');
      setTimeout(() => {
        setIsExpanded(false);
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Fehler bei der Newsletter-Anmeldung');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 max-w-[calc(100vw-2rem)] sm:max-w-sm">
      {isExpanded ? (
        <div className="bg-primary-800/95 backdrop-blur-sm border border-primary-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
          {!isSubscribed ? (
            <>
              <button
                onClick={handleDismiss}
                className="absolute top-2 right-2 text-content-secondary hover:text-content-primary"
              >
                <FiX className="w-5 h-5" />
              </button>
              <h3 className="text-lg sm:text-xl font-bold text-content-primary mb-2">
                Newsletter abonnieren
              </h3>
              <p className="text-sm sm:text-base text-content-secondary mb-4">
                Erhalte exklusive Angebote und bleibe über neue Produkte informiert!
              </p>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Deine E-Mail-Adresse"
                    required
                    disabled={isLoading}
                    className="w-full px-3 sm:px-4 py-2 bg-primary-900/50 border border-primary-700/50 rounded-lg 
                              text-sm sm:text-base text-content-primary placeholder-content-secondary/50 
                              focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  {error && (
                    <p className="mt-2 text-xs sm:text-sm text-red-500">{error}</p>
                  )}
                </div>
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full text-sm sm:text-base py-2 sm:py-2.5"
                  disabled={isLoading}
                >
                  {isLoading ? 'Wird angemeldet...' : 'Abonnieren'}
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-2">
              <p className="text-sm sm:text-base text-content-primary font-semibold">
                Vielen Dank für deine Anmeldung! 🎮
              </p>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={handleExpand}
          className="bg-primary-800/95 backdrop-blur-sm border border-primary-700/50 rounded-full p-4 shadow-xl
                    hover:bg-primary-700/95 transition-colors duration-200 text-content-primary"
        >
          <FiMail className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
