import { ContactForm } from '@/components/Contact/ContactForm/ContactForm';
import { ContactInfo } from '@/components/Contact/ContactInfo/ContactInfo';

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
    <div className="container mx-auto px-4 py-12 min-h-screen bg-gradient-to-b from-primary-900 to-primary-950">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Kontaktieren Sie uns</h1>
        <p className="text-xl text-gray-300">
          Haben Sie Fragen oder Anregungen? Wir sind für Sie da und freuen uns auf Ihre Nachricht!
        </p>
      </div>
      <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
