'use client';

import { cn } from '@/utils/cn';

interface ContactInfoProps {
  className?: string;
}

export function ContactInfo({ className }: ContactInfoProps) {
  return (
    <div className={cn('space-y-8', className)}>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">Kontaktinformationen</h3>
        <p className="text-gray-300">
          Haben Sie Fragen? Wir sind hier, um Ihnen zu helfen.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-medium text-white mb-2">E-Mail</h4>
        <a
          href="mailto:support@gametreasures.de"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          support@gametreasures.de
        </a>
      </div>

      <div>
        <h4 className="text-lg font-medium text-white mb-2">Discord</h4>
        <a
          href="https://discord.gg/gametreasures"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          Unserem Discord Server beitreten
        </a>
      </div>

      <div>
        <h4 className="text-lg font-medium text-white mb-2">Geschäftszeiten</h4>
        <p className="text-gray-300">
          Montag - Freitag: 9:00 - 18:00 Uhr
          <br />
          Samstag & Sonntag: 10:00 - 16:00 Uhr
        </p>
      </div>
    </div>
  );
}
