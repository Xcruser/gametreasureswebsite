import type { Meta, StoryObj } from '@storybook/react';
import { ShoppingCart } from './ShoppingCart';

const meta: Meta<typeof ShoppingCart> = {
  title: 'UI/ShoppingCart',
  component: ShoppingCart,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ShoppingCart>;

const sampleItems = [
  {
    id: '1',
    name: 'Monopoly Spielfigur',
    price: 9.99,
    quantity: 2,
    image: 'https://placehold.co/100x100',
  },
  {
    id: '2',
    name: 'Monopoly Ereigniskarte',
    price: 4.99,
    quantity: 1,
    image: 'https://placehold.co/100x100',
  },
];

// Leerer Warenkorb
export const Empty: Story = {
  args: {
    items: [],
  },
};

// Mit Items
export const WithItems: Story = {
  args: {
    items: sampleItems,
  },
};

// Mit vielen Items
export const ManyItems: Story = {
  args: {
    items: [
      ...sampleItems,
      {
        id: '3',
        name: 'Monopoly Würfel Set',
        price: 14.99,
        quantity: 1,
        image: 'https://placehold.co/100x100',
      },
      {
        id: '4',
        name: 'Monopoly Spielgeld',
        price: 19.99,
        quantity: 3,
        image: 'https://placehold.co/100x100',
      },
    ],
  },
};
