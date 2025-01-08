import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'accept', 'necessary'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'large',
  },
};

// Cookie Consent Buttons
export const CookieConsentAccept: Story = {
  args: {
    children: 'Alle akzeptieren',
    variant: 'accept',
    size: 'medium',
  },
};

export const CookieConsentNecessary: Story = {
  args: {
    children: 'Nur Notwendige',
    variant: 'necessary',
    size: 'medium',
  },
};

// Zeigt beide Cookie Consent Buttons nebeneinander
export const CookieConsentGroup: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="necessary">
        Nur Notwendige
      </Button>
      <Button variant="accept">
        Alle akzeptieren
      </Button>
    </div>
  ),
};
