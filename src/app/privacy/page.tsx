import { AnimatedBackground } from '@/components/ui/AnimatedBackground/AnimatedBackground';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground
        animationType="gaming"
        gradientColors={['#0f172a', '#1e293b']}
        iconCount={15}
        iconOpacity={0.15}
      >
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-5xl font-bold text-content-primary mb-6">
                Datenschutzerklärung
              </h1>
              <p className="text-xl text-content-secondary">
                Informationen zum Schutz Ihrer personenbezogenen Daten
              </p>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Einleitung */}
              <section className="bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700/50 p-8">
                <h2 className="text-3xl font-bold text-content-primary mb-4">
                  1. Allgemeine Informationen
                </h2>
                <p className="text-content-secondary leading-relaxed mb-4">
                  Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. 
                  Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zweck der 
                  Verarbeitung personenbezogener Daten auf unserer Website gametreasures.de.
                </p>
                <p className="text-content-secondary leading-relaxed">
                  Verantwortlich im Sinne der DSGVO:
                </p>
                <address className="text-content-secondary not-italic mt-2">
                  GameTreasures<br />
                  [Ihre Adresse]<br />
                  E-Mail: datenschutz@gametreasures.de
                </address>
              </section>

              {/* Datenerfassung */}
              <section className="bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700/50 p-8">
                <h2 className="text-3xl font-bold text-content-primary mb-4">
                  2. Datenerfassung auf unserer Website
                </h2>
                <h3 className="text-2xl font-semibold text-content-primary mt-6 mb-3">
                  2.1 Automatisch erfasste Daten
                </h3>
                <p className="text-content-secondary leading-relaxed mb-4">
                  Beim Besuch unserer Website werden automatisch technische Zugriffsdaten gespeichert:
                </p>
                <ul className="list-disc list-inside space-y-2 text-content-secondary ml-4">
                  <li>IP-Adresse (anonymisiert)</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Besuchte Seiten</li>
                  <li>Browsertyp und Version</li>
                  <li>Verwendetes Betriebssystem</li>
                  <li>Referrer URL (zuvor besuchte Seite)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-content-primary mt-6 mb-3">
                  2.2 Kontaktaufnahme
                </h3>
                <p className="text-content-secondary leading-relaxed">
                  Bei der Kontaktaufnahme per E-Mail werden Ihre Angaben zur Bearbeitung der Anfrage 
                  und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
              </section>

              {/* Cookies */}
              <section className="bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700/50 p-8">
                <h2 className="text-3xl font-bold text-content-primary mb-4">
                  3. Cookies
                </h2>
                <p className="text-content-secondary leading-relaxed mb-4">
                  Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, 
                  die auf Ihrem Endgerät gespeichert werden. Detaillierte Informationen zu den 
                  verwendeten Cookies finden Sie in unserer{' '}
                  <Link href="/cookies" className="text-content-primary hover:text-content-secondary underline">
                    Cookie-Richtlinie
                  </Link>.
                </p>
              </section>

              {/* Analytics */}
              <section className="bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700/50 p-8">
                <h2 className="text-3xl font-bold text-content-primary mb-4">
                  4. Webanalyse
                </h2>
                <p className="text-content-secondary leading-relaxed">
                  Wir nutzen Google Analytics, um die Nutzung unserer Website zu analysieren. 
                  Die durch Cookies erzeugten Informationen über Ihre Benutzung dieser Website 
                  werden in der Regel an einen Server von Google in den USA übertragen und dort 
                  gespeichert. Ihre IP-Adresse wird vor der Übermittlung innerhalb der EU anonymisiert.
                </p>
              </section>

              {/* Bestellungen */}
              <section className="bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700/50 p-8">
                <h2 className="text-3xl font-bold text-content-primary mb-4">
                  5. Bestellungen und Zahlungen
                </h2>
                <p className="text-content-secondary leading-relaxed">
                  Für die Abwicklung von Bestellungen erheben wir die notwendigen Daten zur 
                  Erfüllung des Kaufvertrags. Die Zahlungsabwicklung erfolgt über sichere 
                  Zahlungsdienstleister, die Ihre Daten nach strengen Sicherheitsstandards verarbeiten.
                </p>
              </section>

              {/* Rechte */}
              <section className="bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700/50 p-8">
                <h2 className="text-3xl font-bold text-content-primary mb-4">
                  6. Ihre Rechte
                </h2>
                <p className="text-content-secondary leading-relaxed mb-4">
                  Sie haben folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:
                </p>
                <ul className="list-disc list-inside space-y-2 text-content-secondary ml-4">
                  <li>Recht auf Auskunft</li>
                  <li>Recht auf Berichtigung</li>
                  <li>Recht auf Löschung</li>
                  <li>Recht auf Einschränkung der Verarbeitung</li>
                  <li>Recht auf Datenübertragbarkeit</li>
                  <li>Widerspruchsrecht</li>
                </ul>
              </section>

              {/* Kontakt */}
              <section className="bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700/50 p-8">
                <h2 className="text-3xl font-bold text-content-primary mb-4">
                  7. Kontakt zum Datenschutz
                </h2>
                <p className="text-content-secondary leading-relaxed mb-4">
                  Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
                </p>
                <p className="text-content-secondary">
                  E-Mail:{' '}
                  <a
                    href="mailto:datenschutz@gametreasures.de"
                    className="text-content-primary hover:text-content-secondary transition-colors"
                  >
                    datenschutz@gametreasures.de
                  </a>
                </p>
              </section>

              {/* Aktualisierung */}
              <section className="bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700/50 p-8">
                <h2 className="text-3xl font-bold text-content-primary mb-4">
                  8. Aktualität
                </h2>
                <p className="text-content-secondary leading-relaxed">
                  Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2024. 
                  Aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig 
                  werden, diese Datenschutzerklärung anzupassen.
                </p>
              </section>
            </div>
          </div>
        </div>
      </AnimatedBackground>
    </div>
  );
}
