'use client';

import { cookieCategories } from '@/lib/services/cookieService';
import { useState } from 'react';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground/AnimatedBackground';

export default function CookiesPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen relative dark">
      <AnimatedBackground
        animationType="gaming"
        gradientColors={['#0f172a', '#1e293b']}
        iconCount={15}
        iconOpacity={0.15}
      >
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="max-w-6xl mx-auto text-center mb-12">
              <h1 className="text-5xl font-bold text-content-primary mb-4">
                Cookie-Richtlinie
              </h1>
              <p className="text-xl text-content-secondary">
                Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
                Hier finden Sie detaillierte Informationen über die von uns verwendeten Cookies.
              </p>
            </div>

            {/* Cookie Categories */}
            <div className="max-w-7xl mx-auto space-y-6">
              {cookieCategories.map((category) => (
                <div
                  key={category.id}
                  className="bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700/50 overflow-hidden transition-all duration-200 hover:border-primary-600/50"
                >
                  {/* Category Header */}
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-primary-700/30 focus:outline-none focus:bg-primary-700/30 transition-colors duration-200"
                    onClick={() => setExpandedCategory(
                      expandedCategory === category.id ? null : category.id
                    )}
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-content-primary">
                        {category.name}
                      </h3>
                      <p className="text-sm text-content-secondary mt-1">
                        {category.description}
                      </p>
                    </div>
                    <div className="ml-4 flex items-center">
                      {category.required && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-600/20 text-content-primary mr-2">
                          Erforderlich
                        </span>
                      )}
                      <svg
                        className={`h-5 w-5 text-content-primary transform transition-transform duration-200 ${
                          expandedCategory === category.id ? 'rotate-180' : ''
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Cookie Details */}
                  {expandedCategory === category.id && (
                    <div className="px-6 py-4 border-t border-primary-700/50">
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-primary-700/50">
                          <thead className="bg-primary-700/30">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-content-primary uppercase tracking-wider">
                                Name
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-content-primary uppercase tracking-wider">
                                Zweck
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-content-primary uppercase tracking-wider">
                                Dauer
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-content-primary uppercase tracking-wider">
                                Anbieter
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-primary-700/50">
                            {category.cookies.map((cookie) => (
                              <tr key={cookie.name} className="hover:bg-primary-700/30 transition-colors duration-150">
                                <td className="px-4 py-3 text-sm font-medium text-content-primary">
                                  {cookie.name}
                                </td>
                                <td className="px-4 py-3 text-sm text-content-secondary">
                                  {cookie.purpose}
                                </td>
                                <td className="px-4 py-3 text-sm text-content-secondary">
                                  {cookie.duration}
                                </td>
                                <td className="px-4 py-3 text-sm text-content-secondary">
                                  {cookie.provider}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Additional Information */}
            <div className="max-w-7xl mx-auto mt-12 bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700/50 p-6">
              <h2 className="text-2xl font-bold text-content-primary mb-4">
                Weitere Informationen
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-content-secondary">
                  Sie können Ihre Cookie-Einstellungen jederzeit ändern, indem Sie auf den
                  &quot;Cookie-Einstellungen&quot; Button im Footer klicken.
                </p>
                <p className="text-content-secondary">
                  Bitte beachten Sie, dass einige Cookies für die grundlegende
                  Funktionalität der Website erforderlich sind und nicht deaktiviert
                  werden können.
                </p>
                <h3 className="text-xl font-semibold text-content-primary mt-6 mb-2">Kontakt</h3>
                <p className="text-content-secondary">
                  Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie
                  uns bitte unter:{' '}
                  <a
                    href="mailto:datenschutz@gametreasures.de"
                    className="text-content-primary hover:text-content-secondary transition-colors duration-200"
                  >
                    datenschutz@gametreasures.de
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedBackground>
    </div>
  );
}
