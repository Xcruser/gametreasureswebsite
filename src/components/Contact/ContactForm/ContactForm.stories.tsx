import type { Meta, StoryObj } from '@storybook/react';
import { ContactForm } from './ContactForm';

const meta = {
  title: 'Components/Contact/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Eine Formular-Komponente für die Kontaktaufnahme. Ermöglicht Besuchern, eine Nachricht zu senden.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { 
      action: 'submitted',
      description: 'Callback wenn das Formular abgeschickt wird'
    },
    initialValues: {
      control: 'object',
      description: 'Initiale Werte für das Formular',
    },
    buttonText: {
      control: 'text',
      description: 'Text für den Submit-Button',
    },
    buttonColor: {
      control: 'select',
      options: ['blue', 'green', 'purple'],
      description: 'Farbe des Submit-Buttons',
    },
    buttonSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Größe des Submit-Buttons',
    },
    className: {
      control: 'text',
      description: 'Zusätzliche CSS-Klassen',
    }
  },
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonText: 'Nachricht senden',
    buttonColor: 'blue',
    buttonSize: 'lg',
    initialValues: {
      name: '',
      email: '',
      betreff: '',
      bestellnummer: '',
      nachricht: '',
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Die Standard-Variante des Kontaktformulars mit leeren Feldern.'
      }
    }
  }
};

export const WithPrefilledValues: Story = {
  args: {
    buttonText: 'Nachricht senden',
    buttonColor: 'blue',
    buttonSize: 'lg',
    initialValues: {
      name: 'Max Mustermann',
      email: 'max@example.com',
      betreff: 'Anfrage zu einer Bestellung',
      bestellnummer: 'GT-12345',
      nachricht: 'Hallo, ich habe eine Frage zu meiner Bestellung...',
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Beispiel eines vorausgefüllten Kontaktformulars.'
      }
    }
  }
};
