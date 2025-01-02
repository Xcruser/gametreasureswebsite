import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { headerConfig } from '@/config/components';

// Konvertiere die readonly Props in mutable Props
const mutableHeaderConfig = {
  ...headerConfig,
  navigationItems: [...headerConfig.navigationItems],
};

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
  argTypes: {
    logoText: {
      control: 'text',
      description: 'Text des Logos',
    },
    navigationItems: {
      control: 'object',
      description: 'Array von Navigationselementen',
    },
    backgroundColor: {
      control: 'text',
      description: 'Hintergrundfarbe des Headers',
    },
    textColor: {
      control: 'text',
      description: 'Textfarbe',
    },
    hoverColor: {
      control: 'text',
      description: 'Hover-Farbe für Links',
    },
    badgeBackgroundColor: {
      control: 'text',
      description: 'Hintergrundfarbe des Warenkorb-Badges',
    },
    badgeTextColor: {
      control: 'text',
      description: 'Textfarbe des Warenkorb-Badges',
    },
    cartItemCount: {
      control: 'number',
      description: 'Anzahl der Items im Warenkorb',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

// Basis-Story verwendet die Konfiguration als Ausgangspunkt
export const Default: Story = {
  args: {
    ...mutableHeaderConfig,

    navigationItems: [{
      "label": "Home",
      "href": "/"
    }, {
      "label": "Shop",
      "href": "/shop"
    }, {
      "label": "Contact",
      "href": "/contact"
    }]
  },
};

// Story mit vielen Items im Warenkorb
export const WithManyCartItems: Story = {
  args: {
    ...mutableHeaderConfig,
    cartItemCount: 99,
  },
};

// Story mit leerem Warenkorb
export const WithEmptyCart: Story = {
  args: {
    ...mutableHeaderConfig,
    cartItemCount: 0,
  },
};

// Story mit angepassten Farben
export const CustomColors: Story = {
  args: {
    ...mutableHeaderConfig,
    backgroundColor: 'bg-accent-purple-light',
    textColor: 'text-primary-900',
    hoverColor: 'hover:text-accent-blue',
    badgeBackgroundColor: 'bg-accent-blue',
    badgeTextColor: 'text-primary-900',
  },
};
