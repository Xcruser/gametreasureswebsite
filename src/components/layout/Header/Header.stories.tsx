import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    navigationItems: [
      { label: 'Home', href: '/' },
      { label: 'Shop', href: '/shop' },
      { label: 'Über uns', href: '/about' },
      { label: 'Kontakt', href: '/contact' },
    ],
  },
};
