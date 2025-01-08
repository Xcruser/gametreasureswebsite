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
    imageHeight: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

// Default Card
export const Default: Story = {
  args: {
    title: 'Example Card',
    subtitle: 'Card Subtitle',
    image: 'https://picsum.photos/500/300',
    imageHeight: 'md',
    price: 99.99,
  },
};

// Without Image
export const WithoutImage: Story = {
  args: {
    title: 'Card without Image',
    subtitle: 'Just some text content',
    price: 49.99,
  },
};

// Small Image
export const SmallImage: Story = {
  args: {
    ...Default.args,
    imageHeight: 'sm',
  },
};

// Large Image
export const LargeImage: Story = {
  args: {
    ...Default.args,
    imageHeight: 'lg',
  },
};
