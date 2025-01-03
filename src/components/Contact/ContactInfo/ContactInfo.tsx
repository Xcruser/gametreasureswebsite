'use client';

import { HiOutlineMail } from 'react-icons/hi';
import { BsMessenger, BsClock } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';

/**
 * Datenstruktur für die Geschäftszeiten
 * @interface BusinessHours
 */
interface BusinessHours {
  /** Arbeitstage (z.B. "Montag - Freitag") */
  days: string;
  /** Arbeitszeiten (z.B. "9:00 - 17:00 Uhr") */
  hours: string;
}

/**
 * Props für die ContactInfo-Komponente
 * @interface ContactInfoProps
 */
interface ContactInfoProps {
  /** E-Mail-Adresse für den Support-Kontakt */
  email?: string;
  /** URL zum Facebook Messenger */
  messengerUrl?: string;
  /** Informationstext über die Support-Antwortzeit */
  supportText?: string;
  /** Geschäftszeiten-Konfiguration */
  businessHours?: BusinessHours;
  /** Zusätzliche CSS-Klassen */
  className?: string;
}

/**
 * ContactInfo Komponente
 * 
 * Zeigt Kontaktinformationen und Geschäftszeiten an. Enthält Buttons für E-Mail
 * und Messenger-Kontakt sowie Informationen über Support-Zeiten.
 * 
 * @component
 * @example
 * ```tsx
 * <ContactInfo
 *   email="support@example.com"
 *   messengerUrl="https://m.me/example"
 * />
 * ```
 */
export function ContactInfo({
  email = 'support@game-treasures.com',
  messengerUrl = 'https://m.me/gametreasures',
  supportText = 'Wir antworten in der Regel innerhalb von 24 Stunden',
  businessHours = {
    days: 'Montag - Freitag',
    hours: '9:00 - 17:00 Uhr',
  },
  className = '',
}: ContactInfoProps) {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleMessengerClick = () => {
    window.open(messengerUrl, '_blank');
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* E-Mail */}
      <div className="bg-primary-800/30 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-primary-800/40 transition-colors">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-accent-blue/10 rounded-lg">
            <HiOutlineMail className="w-6 h-6 text-accent-blue" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">E-Mail</h3>
            <button
              onClick={handleEmailClick}
              className="text-accent-blue hover:text-accent-blue/80 transition-colors bg-accent-blue/10 px-4 py-2 rounded-lg"
            >
              Per E-Mail kontaktieren
            </button>
          </div>
        </div>
      </div>

      {/* Facebook Messenger */}
      <div className="bg-primary-800/30 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-primary-800/40 transition-colors">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-accent-blue/10 rounded-lg">
            <BsMessenger className="w-6 h-6 text-accent-blue" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Facebook Messenger</h3>
            <button
              onClick={handleMessengerClick}
              className="text-accent-blue hover:text-accent-blue/80 transition-colors bg-accent-blue/10 px-4 py-2 rounded-lg"
            >
              Per Messenger kontaktieren
            </button>
          </div>
        </div>
      </div>

      {/* Support */}
      <div className="bg-primary-800/30 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-primary-800/40 transition-colors">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-accent-blue/10 rounded-lg">
            <BiSupport className="w-6 h-6 text-accent-blue" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-gray-300">{supportText}</p>
          </div>
        </div>
      </div>

      {/* Geschäftszeiten */}
      <div className="bg-primary-800/30 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-primary-800/40 transition-colors">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-accent-blue/10 rounded-lg">
            <BsClock className="w-6 h-6 text-accent-blue" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Geschäftszeiten</h3>
            <p className="text-gray-300">
              {businessHours.days}
              <br />
              {businessHours.hours}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
