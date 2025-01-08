export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export interface CookieCategory {
  id: keyof CookieConsent;
  name: string;
  description: string;
  required: boolean;
  cookies: {
    name: string;
    purpose: string;
    duration: string;
    provider: string;
  }[];
}

export const cookieCategories: CookieCategory[] = [
  {
    id: 'necessary',
    name: 'Notwendige Cookies',
    description: 'Diese Cookies sind für die grundlegende Funktionalität der Website erforderlich.',
    required: true,
    cookies: [
      {
        name: 'session',
        purpose: 'Verwaltet die Benutzer-Session',
        duration: 'Session',
        provider: 'GameTreasures',
      },
      {
        name: 'cart',
        purpose: 'Speichert den Warenkorb',
        duration: '30 Tage',
        provider: 'GameTreasures',
      },
    ],
  },
  {
    id: 'analytics',
    name: 'Analyse Cookies',
    description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.',
    required: false,
    cookies: [
      {
        name: '_ga',
        purpose: 'Google Analytics Cookie für Besucher-Tracking',
        duration: '2 Jahre',
        provider: 'Google',
      },
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing Cookies',
    description: 'Diese Cookies werden verwendet, um Besuchern relevante Werbung zu zeigen.',
    required: false,
    cookies: [
      {
        name: '_fbp',
        purpose: 'Facebook Pixel für Marketing-Tracking',
        duration: '3 Monate',
        provider: 'Facebook',
      },
    ],
  },
];

const COOKIE_CONSENT_KEY = 'cookie-consent';

// Cookie-Service als Singleton
export const cookieService = {
  getStoredConsent(): CookieConsent | null {
    if (typeof window === 'undefined') return null;
    
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) return null;

    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  },

  hasStoredConsent(): boolean {
    return !!this.getStoredConsent();
  },

  updateConsent(consent: Partial<CookieConsent>) {
    const currentConsent = this.getStoredConsent() || {
      necessary: false,
      analytics: false,
      marketing: false,
    };

    const newConsent = {
      ...currentConsent,
      ...consent,
      necessary: true, // Notwendige Cookies sind immer aktiv
    };

    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newConsent));
    this.applyCookieSettings(newConsent);
  },

  acceptAll() {
    this.updateConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  },

  acceptNecessary() {
    this.updateConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  },

  applyCookieSettings(consent: CookieConsent) {
    if (typeof window === 'undefined') return;

    // Funktion zum Löschen von Cookies
    const deleteCookie = (name: string) => {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    };

    // Analytics Cookies
    if (!consent.analytics) {
      // Lösche Analytics Cookies
      deleteCookie('_ga');
      deleteCookie('_gat');
      deleteCookie('_gid');
    }

    // Marketing Cookies
    if (!consent.marketing) {
      // Lösche Marketing Cookies wenn nötig
      deleteCookie('_fbp');
    }
  }
};
