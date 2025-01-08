import type { Meta, StoryObj } from '@storybook/react';
import { NewsletterBubble } from './NewsletterBubble';

const meta: Meta<typeof NewsletterBubble> = {
  title: 'Sections/NewsletterBubble',
  component: NewsletterBubble,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['bottom-right', 'bottom-left'],
    },
    onSubscribe: { action: 'subscribed' },
  },
  decorators: [
    (Story) => (
      <div className="h-[400px] w-full relative bg-gray-100">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof NewsletterBubble>;

// Geschlossene Bubble
export const ClosedBubble: Story = {};

// Geöffnetes Formular
export const OpenForm: Story = {
  args: {
    defaultOpen: true,
  },
  parameters: {
    decorators: [
      (Story) => (
        <div className="h-[500px] w-full relative bg-gray-100">
          <Story />
        </div>
      ),
    ],
  },
};

// Links unten
export const BottomLeft: Story = {
  args: {
    position: 'bottom-left',
  },
};

// Erfolgszustand
export const SuccessState: Story = {
  args: {
    defaultSubmitted: true,
  },
};

// Angepasste Farben
export const CustomColors: Story = {
  args: {
    backgroundColor: 'blue-600',
    textColor: 'white',
  },
};

// Mobile Version
export const Mobile: Story = {
  args: {
    showOnMobile: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    decorators: [
      (Story) => (
        <div className="h-[300px] w-full relative bg-gray-100">
          <Story />
        </div>
      ),
    ],
  },
};

// Vollständig angepasst
export const FullyCustomized: Story = {
  args: {
    position: 'bottom-left',
    backgroundColor: 'purple-600',
    textColor: 'white',
    title: 'Join the Gaming Community!',
    description: 'Get exclusive access to game releases and offers.',
    buttonText: 'Join Now',
    placeholderText: 'Enter your email',
    successMessage: 'Welcome to the community! 🎮',
    showOnMobile: true,
    defaultOpen: true,
  },
};
