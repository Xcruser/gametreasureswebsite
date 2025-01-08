import { AnimatedBackground } from '../components/ui/AnimatedBackground/AnimatedBackground';
import { Button } from '../components/ui/Button/Button';
import { FeatureList } from '../components/ui/FeatureList/FeatureList';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Animierter Hintergrund */}
      <AnimatedBackground
        animationType="gaming"
        gradientColors={['#0f172a', '#1e293b']}
        iconCount={15}
        iconOpacity={0.15}
      >
        {/* Hero Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-bold text-white mb-6">
            GameTreasures
          </h1>
          <FeatureList
            title="Einkaufen leicht gemacht"
            features={[
              { text: "Keine Registrierung erforderlich" },
              { text: "Kein Account notwendig" },
              { text: "Einfach und sicher einkaufen" },
              { text: "Diskrete Abwicklung" },
              { text: "Keine Spieldaten erforderlich" },
              { text: "Schnelle Lieferung" }
            ]}
          />
          <Button variant="primary">
            Produkte entdecken
          </Button>
        </div>

        {/* Cookie Banner */}
        <div className="fixed bottom-0 left-0 right-0 bg-slate-800/95 p-4 z-50">
          <div className="container mx-auto flex items-center justify-between">
            <p className="text-white">
              Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern.{' '}
              <Link href="/cookies" className="text-blue-400 hover:underline">
                Mehr erfahren
              </Link>
            </p>
            <div className="flex gap-4">
              <Button variant="secondary">
                Nur Notwendige
              </Button>
              <Button variant="primary">
                Alle akzeptieren
              </Button>
            </div>
          </div>
        </div>
      </AnimatedBackground>
    </main>
  );
}
