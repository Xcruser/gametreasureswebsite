import type { Meta, StoryObj } from '@storybook/react';
import { ContactInfo } from './ContactInfo';

const meta = {
  title: 'Components/Contact/ContactInfo',
  component: ContactInfo,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Zeigt Kontaktinformationen und Geschäftszeiten an. Enthält Buttons für E-Mail und Messenger-Kontakt.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    email: {
      control: 'text',
      description: 'E-Mail-Adresse für den Support',
    },
    messengerUrl: {
      control: 'text',
      description: 'URL für den Facebook Messenger',
    },
    supportText: {
      control: 'text',
      description: 'Text für die Support-Antwortzeit',
    },
    businessHours: {
      control: 'object',
      description: 'Geschäftszeiten',
    },
    buttonColor: {
      control: 'select',
      options: ['blue', 'green', 'purple'],
      description: 'Farbe der Kontakt-Buttons',
    },
    buttonSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Größe der Kontakt-Buttons',
    },
    className: {
      control: 'text',
      description: 'Zusätzliche CSS-Klassen',
    }
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
    buttonColor: 'blue',
    buttonSize: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: 'Die Standard-Darstellung der Kontaktinformationen.'
      }
    }
  }
};

export const CustomColors: Story = {
  args: {
    ...Default.args,
    buttonColor: 'purple',
    buttonSize: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Kontaktinformationen mit angepassten Button-Farben und -Größen.'
      }
    }
  }
};
