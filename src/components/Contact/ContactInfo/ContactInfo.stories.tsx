import type { Meta, StoryObj } from '@storybook/react';
import { ContactInfo } from './ContactInfo';

const meta = {
  title: 'Components/Contact/ContactInfo',
  component: ContactInfo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Zeigt Kontaktinformationen und Geschäftszeiten an.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    email: {
      control: 'text',
      description: 'E-Mail-Adresse für den Kontakt',
    },
    messengerUrl: {
      control: 'text',
      description: 'URL zum Facebook Messenger',
    },
    supportText: {
      control: 'text',
      description: 'Text zur Support-Antwortzeit',
    },
    businessHours: {
      control: 'object',
      description: 'Geschäftszeiten',
    },
    className: {
      control: 'text',
      description: 'Zusätzliche CSS-Klassen',
    },
  },
} satisfies Meta<typeof ContactInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    email: 'support@game-treasures.com',
    messengerUrl: 'https://m.me/gametreasures',
    supportText: 'Wir antworten in der Regel innerhalb von 24 Stunden',
    businessHours: {
      days: 'Montag - Freitag',
      hours: '9:00 - 17:00 Uhr',
    },
  },
};
