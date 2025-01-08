'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { cn } from '@/utils/cn';

interface ContactFormProps {
  className?: string;
  initialData?: {
    name: string;
    email: string;
    message: string;
  };
}

export function ContactForm({ className, initialData }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    email: initialData?.email || '',
    message: initialData?.message || ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Implementiere hier die Formular-Verarbeitung
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-6', className)}>
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          E-Mail
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Nachricht
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          rows={5}
          required
        />
      </div>

      <Button type="submit" size="large" className="w-full">
        Nachricht senden
      </Button>
    </form>
  );
}
