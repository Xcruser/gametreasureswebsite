import type { Meta, StoryObj } from '@storybook/react';
import { CookieBanner } from './CookieBanner';

const meta: Meta<typeof CookieBanner> = {
  title: 'Sections/CookieBanner',
  component: CookieBanner,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {
    onAcceptAll: { action: 'acceptAll' },
    onAcceptNecessary: { action: 'acceptNecessary' },
    position: {
      control: 'select',
      options: ['top', 'bottom'],
    },
    buttonSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', 'none'],
    },
  },
  decorators: [
    (Story) => (
      <div className="h-screen bg-gray-100">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Beispiel-Webseite</h1>
          <p>Der Cookie-Banner erscheint am Rand der Seite.</p>
        </div>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CookieBanner>;

// Standard-Version
export const Default: Story = {};

// Mobile Version
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

// Am oberen Rand
export const TopPosition: Story = {
  args: {
    position: 'top',
  },
};

// Volle Breite ohne Container
export const FullWidth: Story = {
  args: {
    showContainer: false,
    maxWidth: 'none',
  },
};

// Große Buttons
export const LargeButtons: Story = {
  args: {
    buttonSize: 'large',
    buttonsFullWidth: true,
  },
};

// Angepasste Farben
export const CustomColors: Story = {
  args: {
    backgroundColor: 'blue-900',
    textColor: 'white',
    borderColor: 'blue-700',
  },
};

// Angepasste Texte
export const CustomText: Story = {
  args: {
    title: 'Datenschutzeinstellungen',
    description: 'Wir legen Wert auf Ihre Privatsphäre. Wählen Sie aus, welche Cookies Sie zulassen möchten.',
    acceptAllText: 'Alles erlauben',
    acceptNecessaryText: 'Minimal',
  },
};

// Umgekehrte Button-Reihenfolge
export const ReversedButtons: Story = {
  args: {
    reverseButtonOrder: true,
  },
};

// Vollständig angepasst
export const FullyCustomized: Story = {
  args: {
    position: 'top',
    backgroundColor: 'slate-900',
    textColor: 'white',
    borderColor: 'slate-700',
    buttonSize: 'large',
    maxWidth: '2xl',
    title: 'Cookie-Einstellungen',
    description: 'Helfen Sie uns, Ihre Erfahrung zu verbessern.',
    acceptAllText: 'Alle Cookies akzeptieren',
    acceptNecessaryText: 'Basis-Einstellungen',
    reverseButtonOrder: true,
    buttonClassName: 'font-bold',
  },
};
