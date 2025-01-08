import { AnimatedBackground } from '../components/ui/AnimatedBackground/AnimatedBackground';
import { Button } from '../components/ui/Button/Button';
import { FeatureList } from '../components/ui/FeatureList/FeatureList';
import { CookieBanner } from '@/components/sections/CookieBanner/CookieBanner';
import { NewsletterBubble } from '@/components/sections/NewsletterBubble/NewsletterBubble';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Animierter Hintergrund */}
      <AnimatedBackground
        animationType="gaming"
        gradientColors={['#0f172a', '#1e293b']}
        iconCount={15}
        iconOpacity={0.15}
      >
        {/* Hero Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 w-full max-w-full">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 break-words">
            Game<wbr/>Treasures
          </h1>

          {/* Mobile-optimierte Features für kleine Bildschirme */}
          <div className="block md:hidden w-full max-w-[calc(100vw-2rem)] mx-auto mb-8">
            <div className="space-y-4">
              <div className="bg-primary-800/30 backdrop-blur-sm border border-primary-700/50 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-content-primary mb-3">
                  Einkaufen leicht gemacht
                </h3>
                <ul className="space-y-2 text-content-secondary text-sm sm:text-base">
                  <li>✓ Keine Registrierung erforderlich</li>
                  <li>✓ Kein Account notwendig</li>
                  <li>✓ Einfach und sicher einkaufen</li>
                  <li>✓ Diskrete Abwicklung</li>
                  <li>✓ Keine Spieldaten erforderlich</li>
                  <li>✓ Schnelle Lieferung</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Original FeatureList für Desktop */}
          <div className="hidden md:block max-w-full">
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
          </div>

          <Button variant="primary" className="mt-8 w-full sm:w-auto">
            Produkte entdecken
          </Button>
        </div>

        {/* Cookie Banner */}
        <CookieBanner />

        {/* Newsletter Bubble */}
        <NewsletterBubble />
      </AnimatedBackground>
    </main>
  );
}
