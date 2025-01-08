import type { Meta, StoryObj } from '@storybook/react';
import { CookieBanner } from './CookieBanner';

const meta = {
  title: 'Sections/CookieBanner',
  component: CookieBanner,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
  decorators: [
    (Story) => (
      <div className="h-screen bg-gray-100">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Beispiel-Webseite</h1>
          <p>Der Cookie-Banner erscheint am Rand der Seite.</p>
        </div>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CookieBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: 'bottom',
    maxWidth: 'max-w-screen-lg',
    buttonSize: 'medium',
  },
};

export const Mobile: Story = {
  args: {
    ...Default.args,
    buttonsFullWidth: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
