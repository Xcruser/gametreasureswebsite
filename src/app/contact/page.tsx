import { ContactForm } from '@/components/Contact/ContactForm/ContactForm';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground/AnimatedBackground';

/**
 * Kontaktseite
 * 
 * Zeigt ein Kontaktformular und Kontaktinformationen in einem responsiven Layout an.
 * Auf Desktop werden die Komponenten nebeneinander angezeigt, auf Mobile untereinander.
 * 
 * @page
 * @route /contact
 */
export default function ContactPage() {
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
            <div className="max-w-6xl mx-auto text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-4">Kontaktieren Sie uns</h1>
              <p className="text-xl text-gray-300">
                Haben Sie Fragen oder Anregungen? Wir sind für Sie da und freuen uns auf Ihre Nachricht!
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Linke Spalte - Kontaktmöglichkeiten */}
              <div className="space-y-6">
                {/* E-Mail */}
                <div className="bg-[#0c1220] rounded-lg p-6 flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">E-Mail</h3>
                    <a href="mailto:support@gametreasures.de" className="text-blue-400 hover:text-blue-300">
                      Per E-Mail kontaktieren
                    </a>
                  </div>
                </div>

                {/* Facebook Messenger */}
                <div className="bg-[#0c1220] rounded-lg p-6 flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zM6 14l1.5-3 3 1.5L15 8l-1.5 3-3-1.5L6 14z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Facebook Messenger</h3>
                    <a href="#" className="text-blue-400 hover:text-blue-300">
                      Per Messenger kontaktieren
                    </a>
                  </div>
                </div>

                {/* Support */}
                <div className="bg-[#0c1220] rounded-lg p-6 flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Support</h3>
                    <p className="text-gray-400">
                      Wir antworten in der Regel innerhalb von 24 Stunden
                    </p>
                  </div>
                </div>

                {/* Geschäftszeiten */}
                <div className="bg-[#0c1220] rounded-lg p-6 flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Geschäftszeiten</h3>
                    <p className="text-gray-400">
                      Montag - Freitag<br />
                      9:00 - 17:00 Uhr
                    </p>
                  </div>
                </div>
              </div>

              {/* Rechte Spalte - Kontaktformular */}
              <div className="bg-[#0c1220] rounded-lg p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 bg-[#1a2435] border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="Ihr Name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        E-Mail <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 bg-[#1a2435] border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="ihre@email.de"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Betreff <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 bg-[#1a2435] border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="Worum geht es?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-300 mb-2">
                      Bestellnummer
                    </label>
                    <input
                      type="text"
                      id="orderNumber"
                      className="w-full px-4 py-2 bg-[#1a2435] border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="Falls vorhanden"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Nachricht <span className="text-blue-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-2 bg-[#1a2435] border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="Ihre Nachricht an uns"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Nachricht senden
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </AnimatedBackground>
    </div>
  );
}
