import { AnimatedBackground } from '@/components/ui/AnimatedBackground/AnimatedBackground';

export default function ImprintPage() {
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
                Impressum
              </h1>
              <p className="text-xl text-content-secondary">
                Angaben gemäß § 5 TMG
              </p>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Kontaktdaten */}
              <section className="bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700/50 p-8">
                <h2 className="text-3xl font-bold text-content-primary mb-4">
                  Angaben zum Betreiber
                </h2>
                <div className="text-content-secondary">
                  <p className="mb-2">GameTreasures</p>
                  <address className="not-italic">
                    [Straße und Hausnummer]<br />
                    [PLZ und Ort]<br />
                    Deutschland
                  </address>
                </div>

                <h3 className="text-2xl font-semibold text-content-primary mt-6 mb-3">
                  Kontakt
                </h3>
                <div className="text-content-secondary">
                  <p>E-Mail: support@gametreasures.de</p>
                </div>

                <h3 className="text-2xl font-semibold text-content-primary mt-6 mb-3">
                  Vertreten durch
                </h3>
                <p className="text-content-secondary">
                  [Name des Geschäftsführers/Inhabers]
                </p>
              </section>

              {/* Registereintrag */}
              <section className="bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700/50 p-8">
                <h2 className="text-3xl font-bold text-content-primary mb-4">
                  Registereintrag
                </h2>
                <p className="text-content-secondary">
                  Eintragung im Handelsregister<br />
                  Registergericht: [Amtsgericht]<br />
                  Registernummer: [HRB XXXXX]
                </p>
              </section>

              {/* Umsatzsteuer */}
              <section className="bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700/50 p-8">
                <h2 className="text-3xl font-bold text-content-primary mb-4">
                  Umsatzsteuer-ID
                </h2>
                <p className="text-content-secondary">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  DE [Nummer]
                </p>
              </section>

              {/* Streitbeilegung */}
              <section className="bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700/50 p-8">
                <h2 className="text-3xl font-bold text-content-primary mb-4">
                  Streitbeilegung
                </h2>
                <p className="text-content-secondary mb-4">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                  <a 
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-content-primary hover:text-content-secondary underline"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="text-content-secondary">
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </section>

              {/* Haftungsausschluss */}
              <section className="bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700/50 p-8">
                <h2 className="text-3xl font-bold text-content-primary mb-4">
                  Haftung für Inhalte
                </h2>
                <p className="text-content-secondary mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                  Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                  Tätigkeit hinweisen.
                </p>
                <p className="text-content-secondary">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                  allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                  erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                  Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </section>

              {/* Urheberrecht */}
              <section className="bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700/50 p-8">
                <h2 className="text-3xl font-bold text-content-primary mb-4">
                  Urheberrecht
                </h2>
                <p className="text-content-secondary">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                  Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
                  nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
              </section>
            </div>
          </div>
        </div>
      </AnimatedBackground>
    </div>
  );
}
