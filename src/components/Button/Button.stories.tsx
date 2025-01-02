import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { buttonConfig } from '@/config/components';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0a0a0a' },
        { name: 'light', value: '#ffffff' }
      ]
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Button-Variante',
      defaultValue: buttonConfig.variant,
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button-Größe',
      defaultValue: buttonConfig.size,
    },
    color: {
      control: 'select',
      options: ['blue', 'green', 'purple'],
      description: 'Button-Farbe',
      defaultValue: buttonConfig.color,
    },
    withAnimation: {
      control: 'boolean',
      description: 'Animation aktivieren/deaktivieren',
      defaultValue: buttonConfig.withAnimation,
    },
    animationType: {
      control: 'select',
      options: ['scale', 'bounce', 'pulse', 'none'],
      description: 'Art der Animation',
      defaultValue: buttonConfig.animationType,
    },
    children: {
      control: 'text',
      description: 'Button-Text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Basis-Varianten
export const Primary: Story = {
  args: {
    ...buttonConfig,
    children: 'Zum Shop',
  },
};

export const Secondary: Story = {
  args: {
    ...buttonConfig,
    variant: 'secondary',
    children: 'Mehr erfahren',
  },
};

// Größen-Varianten
export const Small: Story = {
  args: {
    ...buttonConfig,
    size: 'sm',
    children: 'Kleine Größe',
  },
};

export const Large: Story = {
  args: {
    ...buttonConfig,
    size: 'lg',
    children: 'Große Größe',
  },
};

// Farb-Varianten
export const GreenPrimary: Story = {
  args: {
    ...buttonConfig,
    color: 'green',
    children: 'Grüner Button',
  },
};

export const PurpleSecondary: Story = {
  args: {
    ...buttonConfig,
    color: 'purple',
    variant: 'secondary',
    children: 'Violetter Button',
  },
};

// Animations-Varianten
export const BounceAnimation: Story = {
  args: {
    ...buttonConfig,
    animationType: 'bounce',
    children: 'Bounce-Animation',
  },
};

export const PulseAnimation: Story = {
  args: {
    ...buttonConfig,
    animationType: 'pulse',
    children: 'Pulse-Animation',
  },
};

export const NoAnimation: Story = {
  args: {
    ...buttonConfig,
    withAnimation: false,
    children: 'Ohne Animation',
  },
};
