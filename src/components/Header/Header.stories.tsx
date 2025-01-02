import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { headerConfig } from '@/config/components';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
  },
  argTypes: {
    backgroundColor: {
      control: 'select',
      options: [
        'bg-primary-900',
        'bg-primary-800',
        'bg-primary-700',
        'bg-primary-600',
      ],
      description: 'Background color of the header'
    },
    textColor: {
      control: 'select',
      options: [
        'text-content-primary',
        'text-content-secondary',
        'text-content-muted',
      ],
      description: 'Text color for the header'
    },
    hoverColor: {
      control: 'select',
      options: [
        'hover:text-accent-blue-light',
        'hover:text-accent-green-light',
        'hover:text-accent-purple-light',
      ],
      description: 'Hover color for navigation items'
    },
    logoPosition: {
      control: 'radio',
      options: ['left', 'center'],
      description: 'Position of the logo'
    },
    navPosition: {
      control: 'radio',
      options: ['left', 'center', 'right'],
      description: 'Position of the navigation menu'
    },
    padding: {
      control: 'select',
      options: ['py-2', 'py-4', 'py-6', 'py-8'],
      description: 'Vertical padding of the header'
    },
    logoText: {
      control: 'text',
      description: 'Text to display as logo'
    },
    cartItemCount: {
      control: 'number',
      description: 'Number of items in the shopping cart'
    },
    badgeBackgroundColor: {
      control: 'select',
      options: [
        'bg-accent-blue-light',
        'bg-accent-green-light',
        'bg-accent-purple-light',
        'bg-accent-blue-DEFAULT',
        'bg-accent-green-DEFAULT',
        'bg-accent-purple-DEFAULT',
      ],
      description: 'Background color of the cart badge'
    },
    badgeTextColor: {
      control: 'select',
      options: [
        'text-primary-900',
        'text-content-primary',
        'text-content-secondary',
      ],
      description: 'Text color of the cart badge'
    }
  },
  decorators: [
    (Story) => (
      <div className="bg-primary-900 min-h-screen">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: headerConfig,
};

export const WithCartItems: Story = {
  args: {
    ...headerConfig,
    cartItemCount: 3,
    badgeBackgroundColor: "bg-accent-green-light",
    badgeTextColor: 'text-primary-900',
  },
};

export const AccentBlue: Story = {
  args: {
    ...headerConfig,
    backgroundColor: 'bg-primary-900',
    hoverColor: 'hover:text-accent-blue-light',
  },
};

export const AccentGreen: Story = {
  args: {
    ...headerConfig,
    backgroundColor: 'bg-primary-900',
    hoverColor: 'hover:text-accent-green-light',
  },
};

export const AccentPurple: Story = {
  args: {
    ...headerConfig,
    backgroundColor: 'bg-primary-900',
    hoverColor: 'hover:text-accent-purple-light',
  },
};

export const WithGreenBadge: Story = {
  args: {
    ...headerConfig,
    cartItemCount: 5,
    badgeBackgroundColor: 'bg-accent-green-light',
    badgeTextColor: 'text-primary-900',
  },
};

export const WithPurpleBadge: Story = {
  args: {
    ...headerConfig,
    cartItemCount: 7,
    badgeBackgroundColor: 'bg-accent-purple-light',
    badgeTextColor: 'text-primary-900',
  },
};
