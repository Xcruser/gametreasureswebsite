import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { headerConfig } from '@/config/components';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0a0a0a' },
        { name: 'light', value: '#ffffff' }
      ]
    },
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
    toolbar: {
      copyConfig: {
        title: 'Kopiere Konfiguration',
        icon: 'copy',
        onClick: () => {
          const config = `export const headerConfig = ${JSON.stringify(headerConfig, null, 2)} as const;`;
          navigator.clipboard.writeText(config);
          // Optional: Zeige eine Benachrichtigung
          const event = new CustomEvent('storybookConfigCopied', {
            detail: { message: 'Konfiguration wurde in die Zwischenablage kopiert!' }
          });
          window.dispatchEvent(event);
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-primary-950" style={{ minHeight: '80px' }}>
        <Story />
      </div>
    ),
  ],
  // Automatisch generierte Controls basierend auf der Konfiguration
  argTypes: {
    logoText: {
      control: 'text',
      description: 'Text des Logos',
      defaultValue: headerConfig.logoText,
    },
    navigationItems: {
      control: 'object',
      description: 'Navigation Items mit Label und URL',
      defaultValue: headerConfig.navigationItems,
    },
    cartItemCount: {
      control: { type: 'number', min: 0, max: 99 },
      description: 'Anzahl der Items im Warenkorb',
      defaultValue: headerConfig.cartItemCount,
    },
    backgroundColor: {
      control: 'select',
      options: [
        'bg-primary-900',
        'bg-primary-800',
        'bg-primary-700',
      ],
      description: 'Hintergrundfarbe',
      defaultValue: headerConfig.backgroundColor,
    },
    textColor: {
      control: 'select',
      options: [
        'text-content-primary',
        'text-content-secondary',
      ],
      description: 'Textfarbe',
      defaultValue: headerConfig.textColor,
    },
    hoverColor: {
      control: 'select',
      options: [
        'hover:text-accent-blue-light',
        'hover:text-accent-green-light',
        'hover:text-accent-purple-light',
      ],
      description: 'Hover-Farbe',
      defaultValue: headerConfig.hoverColor,
    },
    badgeBackgroundColor: {
      control: 'select',
      options: [
        'bg-accent-blue-light',
        'bg-accent-green-light',
        'bg-accent-purple-light',
      ],
      description: 'Badge Hintergrundfarbe',
      defaultValue: headerConfig.badgeBackgroundColor,
    },
    badgeTextColor: {
      control: 'select',
      options: [
        'text-primary-900',
        'text-content-primary',
      ],
      description: 'Badge Textfarbe',
      defaultValue: headerConfig.badgeTextColor,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

// Basis-Story verwendet die Konfiguration als Ausgangspunkt
export const Default: Story = {
  args: {
    ...headerConfig,
  },
};

// Varianten zeigen verschiedene Konfigurationen
export const WithShoppingCart: Story = {
  args: {
    ...headerConfig,
    cartItemCount: 3,
    badgeBackgroundColor: "bg-accent-green-light",
    badgeTextColor: 'text-primary-900',
  },
};

export const BlueAccent: Story = {
  args: {
    ...headerConfig,
    hoverColor: 'hover:text-accent-blue-light',
    badgeBackgroundColor: 'bg-accent-blue-light',
  },
};

export const GreenAccent: Story = {
  args: {
    ...headerConfig,
    hoverColor: 'hover:text-accent-green-light',
    badgeBackgroundColor: 'bg-accent-green-light',
  },
};

export const PurpleAccent: Story = {
  args: {
    ...headerConfig,
    hoverColor: 'hover:text-accent-purple-light',
    badgeBackgroundColor: 'bg-accent-purple-light',
  },
};
