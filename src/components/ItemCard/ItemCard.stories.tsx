import type { Meta, StoryObj } from '@storybook/react';
import { ItemCard } from './ItemCard';

const meta = {
  title: 'Components/ItemCard',
  component: ItemCard,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0a0a0a' },
        { name: 'light', value: '#ffffff' }
      ]
    },
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Titel des Items',
    },
    description: {
      control: 'text',
      description: 'Beschreibung des Items',
    },
    price: {
      control: { type: 'number', min: 0, step: 0.01 },
      description: 'Preis des Items',
    },
    imageUrl: {
      control: 'text',
      description: 'URL des Item-Bildes',
    },
    width: {
      control: 'radio',
      options: ['sm', 'md', 'lg', 'full'],
      description: 'Breite der Karte',
    },
    onAddToCart: {
      action: 'addToCart',
      description: 'Callback wenn "In den Warenkorb" geklickt wird',
    },
    onBuyNow: {
      action: 'buyNow',
      description: 'Callback wenn "Jetzt Kaufen" geklickt wird',
    },
  },
} satisfies Meta<typeof ItemCard>;

export default meta;
type Story = StoryObj<typeof ItemCard>;

// Basis-Variante
export const Default: Story = {
  args: {
    id: '1',
    title: 'Monopoly Go! - 1000 Würfel',
    description: 'Würfel-Paket für Monopoly Go! Enthält 1000 Würfel zum Spielen.',
    price: 9.99,
    imageUrl: '/images/placeholder.jpg',
    width: 'md',
  },
};

// Verschiedene Größen
export const Small: Story = {
  args: {
    ...Default.args,
    width: 'sm',
  },
};

export const Medium: Story = {
  args: {
    ...Default.args,
    width: 'md',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    width: 'lg',
  },
};

export const FullWidth: Story = {
  args: {
    ...Default.args,
    width: 'full',
  },
  parameters: {
    layout: 'padded',
  },
};

// Inhaltsvarianten
export const LongTitle: Story = {
  args: {
    id: '2',
    title: 'Monopoly Go! - Super Premium Mega Würfel Paket mit extra vielen Würfeln und Bonus-Content',
    description: 'Ein sehr großes Würfel-Paket mit vielen Extra-Features und Bonus-Inhalten.',
    price: 49.99,
    imageUrl: '/images/placeholder.jpg',
    width: 'md',
  },
};

export const HighPrice: Story = {
  args: {
    id: '3',
    title: 'VIP Würfel-Paket',
    description: 'Das exklusivste Würfel-Paket mit besonderen Vorteilen.',
    price: 99.99,
    imageUrl: '/images/placeholder.jpg',
    width: 'md',
  },
};

export const WithLongDescription: Story = {
  args: {
    id: '4',
    title: 'Standard Würfel-Paket',
    description: 'Dieses Paket enthält alles, was du brauchst, um dein Spielerlebnis zu verbessern. Mit vielen Extra-Features und Bonus-Inhalten, die dir dabei helfen, schneller voranzukommen.',
    price: 19.99,
    imageUrl: '/images/placeholder.jpg',
    width: 'md',
  },
};
