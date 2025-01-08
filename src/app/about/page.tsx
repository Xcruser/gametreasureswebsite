import { AnimatedBackground } from '@/components/ui/AnimatedBackground/AnimatedBackground';

export default function AboutPage() {
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
                Über GameTreasures
              </h1>
              <p className="text-xl text-content-secondary">
                Ihr vertrauenswürdiger Partner für Monopoly GO Ressourcen
              </p>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Unsere Geschichte */}
              <section className="bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700/50 p-8">
                <h2 className="text-3xl font-bold text-content-primary mb-4">
                  Unsere Geschichte
                </h2>
                <p className="text-content-secondary leading-relaxed">
                  GameTreasures wurde mit einer klaren Vision gegründet: Spielern eine sichere und 
                  zuverlässige Plattform zu bieten, auf der sie Ressourcen für Monopoly GO erwerben können. 
                  Seit unserer Gründung haben wir uns zu einem der vertrauenswürdigsten Anbieter in der 
                  Gaming-Community entwickelt.
                </p>
              </section>

              {/* Unsere Mission */}
              <section className="bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700/50 p-8">
                <h2 className="text-3xl font-bold text-content-primary mb-4">
                  Unsere Mission
                </h2>
                <p className="text-content-secondary leading-relaxed mb-4">
                  Wir setzen uns dafür ein, Spielern die bestmögliche Erfahrung zu bieten. Unsere Mission ist es:
                </p>
                <ul className="list-disc list-inside space-y-2 text-content-secondary">
                  <li>Höchste Sicherheit bei allen Transaktionen zu gewährleisten</li>
                  <li>Schnelle und zuverlässige Lieferung zu garantieren</li>
                  <li>Faire und transparente Preise anzubieten</li>
                  <li>Exzellenten Kundenservice zu bieten</li>
                  <li>Die Gaming-Community zu unterstützen und zu fördern</li>
                </ul>
              </section>

              {/* Warum GameTreasures */}
              <section className="bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700/50 p-8">
                <h2 className="text-3xl font-bold text-content-primary mb-4">
                  Warum GameTreasures?
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-content-primary mb-3">
                      Sicherheit & Vertrauen
                    </h3>
                    <p className="text-content-secondary">
                      Ihre Sicherheit hat für uns oberste Priorität. Wir verwenden modernste 
                      Verschlüsselungstechnologien und sichere Zahlungsmethoden.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-content-primary mb-3">
                      Schnelle Lieferung
                    </h3>
                    <p className="text-content-secondary">
                      Nach Ihrer Bestellung erfolgt die Lieferung innerhalb weniger Minuten. 
                      Unser automatisiertes System arbeitet rund um die Uhr.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-content-primary mb-3">
                      Kundenservice
                    </h3>
                    <p className="text-content-secondary">
                      Unser Support-Team steht Ihnen bei Fragen zur Verfügung. 
                      Kontaktieren Sie uns einfach per E-Mail.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-content-primary mb-3">
                      Faire Preise
                    </h3>
                    <p className="text-content-secondary">
                      Wir bieten wettbewerbsfähige Preise und regelmäßige Aktionen. 
                      Transparenz ist uns wichtig - keine versteckten Kosten.
                    </p>
                  </div>
                </div>
              </section>

              {/* Team */}
              <section className="bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700/50 p-8">
                <h2 className="text-3xl font-bold text-content-primary mb-4">
                  Unser Team
                </h2>
                <p className="text-content-secondary leading-relaxed">
                  Hinter GameTreasures steht ein engagiertes Team von Gaming-Enthusiasten. 
                  Wir verstehen die Bedürfnisse unserer Kunden, da wir selbst leidenschaftliche 
                  Spieler sind. Unser Team arbeitet kontinuierlich daran, das Einkaufserlebnis 
                  zu verbessern und neue Features zu entwickeln.
                </p>
              </section>

              {/* Kontakt */}
              <section className="bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700/50 p-8 text-center">
                <h2 className="text-3xl font-bold text-content-primary mb-4">
                  Kontaktieren Sie uns
                </h2>
                <p className="text-content-secondary mb-6">
                  Haben Sie Fragen oder Anregungen? Wir freuen uns auf Ihre Nachricht!
                </p>
                <div className="flex justify-center">
                  <a
                    href="mailto:support@gametreasures.de"
                    className="text-content-primary hover:text-content-secondary transition-colors"
                  >
                    support@gametreasures.de
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </AnimatedBackground>
    </div>
  );
}
