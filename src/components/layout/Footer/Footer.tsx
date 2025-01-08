'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CookieBanner } from '@/components/sections/CookieBanner/CookieBanner';

export function Footer() {
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  return (
    <footer className="bg-primary-900 text-content-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Über uns */}
          <div>
            <h3 className="text-lg font-semibold text-content-primary mb-4">Über uns</h3>
            <p className="text-sm">
              GameTreasures ist dein zuverlässiger Partner für Gaming-Währungen und Booster.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-content-primary mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-content-primary transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-content-primary transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-content-primary transition-colors">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-lg font-semibold text-content-primary mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/imprint" className="hover:text-content-primary transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-content-primary transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-content-primary transition-colors">
                  AGB
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setShowCookieSettings(true)}
                  className="hover:text-content-primary transition-colors"
                >
                  Cookie-Einstellungen
                </button>
              </li>
            </ul>
          </div>

          {/* Zahlungsmethoden */}
          <div>
            <h3 className="text-lg font-semibold text-content-primary mb-4">Zahlungsmethoden</h3>
            <ul className="space-y-2 text-sm">
              <li>PayPal</li>
              <li>Kreditkarte</li>
              <li>Überweisung</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-800 text-sm text-center">
          {new Date().getFullYear()} GameTreasures. Alle Rechte vorbehalten.
        </div>
      </div>

      {/* Cookie-Banner wenn Einstellungen geöffnet */}
      {showCookieSettings && <CookieBanner />}
    </footer>
  );
}
