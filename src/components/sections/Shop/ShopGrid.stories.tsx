import type { Meta, StoryObj } from '@storybook/react';
import { ShopGrid } from './ShopGrid';

const meta: Meta<typeof ShopGrid> = {
  title: 'Sections/ShopGrid',
  component: ShopGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ShopGrid>;

const sampleItems = [
  {
    id: '1',
    name: 'Game Item 1',
    price: 29.99,
    description: 'Ein tolles In-Game Item für dein Spiel.',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: '2',
    name: 'Game Item 2',
    price: 19.99,
    description: 'Noch ein fantastisches In-Game Item.',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: '3',
    name: 'Game Item 3',
    price: 39.99,
    description: 'Ein seltenes In-Game Item.',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const SingleItem: Story = {
  args: {
    items: [sampleItems[0]],
  },
};

export const ManyItems: Story = {
  args: {
    items: [...sampleItems, ...sampleItems, ...sampleItems],
  },
};
