'use client';

import Link from 'next/link';
import { CookieBanner } from '@/components/sections/CookieBanner/CookieBanner';
import { useState } from 'react';

export function Footer() {
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  return (
    <footer className="bg-primary-800/50 backdrop-blur-sm border-t border-primary-700/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Über uns */}
          <div>
            <h3 className="text-lg font-semibold text-content-primary mb-4">Über uns</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-content-secondary hover:text-content-primary transition-colors">
                  Über GameTreasures
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-content-secondary hover:text-content-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-lg font-semibold text-content-primary mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-content-secondary hover:text-content-primary transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setShowCookieSettings(true)}
                  className="text-content-secondary hover:text-content-primary transition-colors cursor-pointer"
                >
                  Cookie-Einstellungen
                </button>
              </li>
            </ul>
          </div>

          {/* Kundenservice */}
          <div>
            <h3 className="text-lg font-semibold text-content-primary mb-4">Kundenservice</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-content-secondary hover:text-content-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media & Kontakt */}
          <div>
            <h3 className="text-lg font-semibold text-content-primary mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:support@gametreasures.de"
                  className="text-content-secondary hover:text-content-primary transition-colors"
                >
                  support@gametreasures.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-700/50 text-center">
          <p className="text-content-secondary">
            {new Date().getFullYear()} GameTreasures. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>

      {/* Cookie-Banner wenn Einstellungen geöffnet */}
      {showCookieSettings && <CookieBanner onClose={() => setShowCookieSettings(false)} />}
    </footer>
  );
}
