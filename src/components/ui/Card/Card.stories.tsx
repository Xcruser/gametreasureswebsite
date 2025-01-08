import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#0f172a',
        },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['default', 'gradient', 'solid'],
    },
    animation: {
      control: 'select',
      options: ['none', 'hover', 'pulse', 'bounce'],
    },
    imageHeight: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    buttonVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    titleSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    gradientFrom: {
      control: 'color',
    },
    gradientTo: {
      control: 'color',
    },
    backgroundColor: {
      control: 'color',
    },
    priceColor: {
      control: 'color',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

// Default Card
export const Default: Story = {
  args: {
    title: 'Monopoly GO',
    subtitle: 'Top Bar + 10.000 Würfel',
    price: 39.99,
    image: 'https://placehold.co/400x300/1a365d/ffffff?text=Monopoly+GO',
    onAddToCart: () => console.log('Added to cart'),
  },
};

// Small Card
export const Small: Story = {
  args: {
    ...Default.args,
    size: 'sm',
    imageHeight: 'sm',
    titleSize: 'sm',
  },
};

// Large Card
export const Large: Story = {
  args: {
    ...Default.args,
    size: 'lg',
    imageHeight: 'lg',
    titleSize: 'lg',
  },
};

// Custom Gradient
export const CustomGradient: Story = {
  args: {
    ...Default.args,
    variant: 'gradient',
    gradientFrom: '#4f46e5',
    gradientTo: '#0ea5e9',
  },
};

// Solid Background
export const SolidBackground: Story = {
  args: {
    ...Default.args,
    variant: 'solid',
    backgroundColor: '#1e40af',
  },
};

// Ghost Button
export const GhostButton: Story = {
  args: {
    ...Default.args,
    buttonVariant: 'ghost',
  },
};

// Custom Animation
export const PulseAnimation: Story = {
  args: {
    ...Default.args,
    animation: 'pulse',
  },
};

// No Icon
export const NoIcon: Story = {
  args: {
    ...Default.args,
    buttonIcon: false,
  },
};

// Custom Colors
export const CustomColors: Story = {
  args: {
    ...Default.args,
    priceColor: '#10b981',
    buttonVariant: 'secondary',
  },
};
