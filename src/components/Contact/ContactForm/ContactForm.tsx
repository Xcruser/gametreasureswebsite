'use client';

import { useState, useEffect } from 'react';

/**
 * Datenstruktur für das Kontaktformular
 * @interface ContactFormData
 */
interface ContactFormData {
  /** Name des Kontakts */
  name: string;
  /** E-Mail-Adresse des Kontakts */
  email: string;
  /** Betreff der Nachricht */
  betreff: string;
  /** Optional: Bestellnummer falls vorhanden */
  bestellnummer: string;
  /** Nachrichteninhalt */
  nachricht: string;
}

/**
 * Props für die ContactForm-Komponente
 * @interface ContactFormProps
 */
interface ContactFormProps {
  /** Callback-Funktion, die aufgerufen wird, wenn das Formular abgeschickt wird */
  onSubmit?: (data: ContactFormData) => void;
  /** Initiale Werte für die Formularfelder */
  initialValues?: ContactFormData;
  /** Zusätzliche CSS-Klassen */
  className?: string;
}

const defaultValues: ContactFormData = {
  name: '',
  email: '',
  betreff: '',
  bestellnummer: '',
  nachricht: '',
};

/**
 * ContactForm Komponente
 * 
 * Eine Formular-Komponente für die Kontaktaufnahme. Sie enthält Felder für Name,
 * E-Mail, Betreff, optionale Bestellnummer und die Nachricht.
 * 
 * @component
 * @example
 * ```tsx
 * <ContactForm
 *   onSubmit={(data) => console.log(data)}
 * />
 * ```
 */
export function ContactForm({
  onSubmit,
  initialValues = defaultValues,
  className = '',
}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>(initialValues);

  // Aktualisiere formData nur wenn sich initialValues tatsächlich ändert
  useEffect(() => {
    const hasChanged = Object.entries(initialValues).some(
      ([key, value]) => formData[key as keyof ContactFormData] !== value
    );
    
    if (hasChanged) {
      setFormData(initialValues);
    }
  }, [formData, initialValues]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const inputClasses = "w-full bg-primary-800/30 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 hover:bg-primary-800/40 transition-colors";

  return (
    <form onSubmit={handleSubmit} className={`bg-primary-800/30 backdrop-blur-sm border border-white/10 p-8 rounded-xl space-y-6 ${className}`}>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name <span className="text-accent-blue">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Ihr Name"
          />
        </div>

        {/* E-Mail */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            E-Mail <span className="text-accent-blue">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="ihre@email.de"
          />
        </div>
      </div>

      {/* Betreff */}
      <div>
        <label htmlFor="betreff" className="block text-sm font-medium text-gray-300 mb-2">
          Betreff <span className="text-accent-blue">*</span>
        </label>
        <input
          type="text"
          id="betreff"
          name="betreff"
          required
          value={formData.betreff}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Worum geht es?"
        />
      </div>

      {/* Bestellnummer */}
      <div>
        <label htmlFor="bestellnummer" className="block text-sm font-medium text-gray-300 mb-2">
          Bestellnummer
        </label>
        <input
          type="text"
          id="bestellnummer"
          name="bestellnummer"
          value={formData.bestellnummer}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Falls vorhanden"
        />
      </div>

      {/* Nachricht */}
      <div>
        <label htmlFor="nachricht" className="block text-sm font-medium text-gray-300 mb-2">
          Nachricht <span className="text-accent-blue">*</span>
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          required
          value={formData.nachricht}
          onChange={handleChange}
          rows={6}
          className={`${inputClasses} resize-none`}
          placeholder="Ihre Nachricht an uns"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
      >
        Nachricht senden
      </button>
    </form>
  );
}
