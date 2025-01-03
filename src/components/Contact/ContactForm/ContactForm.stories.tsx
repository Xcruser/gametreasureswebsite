import type { Meta, StoryObj } from '@storybook/react';
import { ContactForm } from './ContactForm';

const meta = {
  title: 'Components/Contact/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Ein Kontaktformular für die Benutzer-Kommunikation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onSubmit: {
      action: 'submitted',
      description: 'Callback wenn das Formular abgeschickt wird',
    },
    initialValues: {
      control: 'object',
      description: 'Initiale Werte für das Formular',
    },
    className: {
      control: 'text',
      description: 'Zusätzliche CSS-Klassen',
    },
  },
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: '',
  },
};

export const WithInitialValues: Story = {
  args: {
    initialValues: {
      name: 'Max Mustermann',
      email: 'max@example.com',
      betreff: 'Produktanfrage',
      bestellnummer: '12345',
      nachricht: 'Ich hätte gerne mehr Informationen zu Ihren Produkten.',
    },
  },
};
