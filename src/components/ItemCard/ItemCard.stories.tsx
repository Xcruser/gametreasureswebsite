import type { Meta, StoryObj } from '@storybook/react';
import { ItemCard, type CartItem } from './ItemCard';
import { useState } from 'react';

const meta = {
  title: 'Components/ItemCard',
  component: ItemCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    item: {
      control: 'object',
      description: 'The item to display in the card',
    },
    onAddToCart: { 
      action: 'addToCart',
      description: 'Callback when add to cart is clicked',
    },
    onQuantityChange: { 
      action: 'quantityChanged',
      description: 'Callback when quantity is changed',
    },
    onExpandChange: { 
      action: 'expandChanged',
      description: 'Callback when expanded state changes',
    },
    initialQuantity: {
      control: { type: 'number', min: 1, max: 99 },
      description: 'Initial quantity value',
    },
    isExpanded: {
      control: 'boolean',
      description: 'Controls if the card is expanded',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[350px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ItemCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItem: CartItem = {
  id: '123e4567-e89b-12d3-a456-426614174000',
  title: 'Monopoly Money',
  description: 'In-Game Währung für Monopoly Go',
  price: 39.99,
  imageUrl: '/images/fallback/Monopoly.png',
  category: 'currency',
  createdAt: new Date(),
  updatedAt: new Date(),
  inStock: true,
};

export const Default: Story = {
  args: {
    item: defaultItem,
    initialQuantity: 1,
  },
};

export const Expanded: Story = {
  args: {
    ...Default.args,
    isExpanded: true,
  },
};

export const CustomQuantity: Story = {
  args: {
    ...Default.args,
    initialQuantity: 5,
  },
};

export const OutOfStock: Story = {
  args: {
    item: {
      ...defaultItem,
      inStock: false,
    },
  },
};

export const ExpensiveItem: Story = {
  args: {
    item: {
      ...defaultItem,
      title: 'Legendary Bundle',
      price: 999.99,
      category: 'special',
    },
  },
};

export const LongTitle: Story = {
  args: {
    item: {
      ...defaultItem,
      title: 'Super Ultra Rare Premium Deluxe Currency Pack Plus Edition',
    },
  },
};

export const Interactive: Story = {
  render: function Render(args) {
    const [quantity, setQuantity] = useState(args.initialQuantity || 1);
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <ItemCard
        {...args}
        initialQuantity={quantity}
        isExpanded={isExpanded}
        onQuantityChange={(q) => {
          setQuantity(q);
          args.onQuantityChange?.(q);
        }}
        onExpandChange={(e) => {
          setIsExpanded(e);
          args.onExpandChange?.(e);
        }}
        onAddToCart={(item) => {
          args.onAddToCart?.(item);
          setIsExpanded(false);
          setQuantity(1);
        }}
      />
    );
  },
  args: {
    item: defaultItem,
  },
};

export const Grid: Story = {
  decorators: [
    (Story) => (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-4xl">
        {[...Array(6)].map((_, i) => (
          <Story key={i} />
        ))}
      </div>
    ),
  ],
  args: {
    item: defaultItem,
  },
};
