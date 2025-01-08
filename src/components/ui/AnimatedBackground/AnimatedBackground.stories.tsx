import type { Meta, StoryObj } from '@storybook/react';
import { AnimatedBackground } from './AnimatedBackground';
import { FaReact, FaHeart, FaStar, FaCode } from 'react-icons/fa';

const meta: Meta<typeof AnimatedBackground> = {
  title: 'UI/AnimatedBackground',
  component: AnimatedBackground,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
  decorators: [
    (Story) => (
      <div className="h-[500px] w-full">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AnimatedBackground>;

// Einfacher Gradient
export const SimpleGradient: Story = {
  args: {
    gradientColors: ['#4f46e5', '#0ea5e9'],
    gradientDirection: 'to-br',
  },
};

// Gaming Theme
export const GamingTheme: Story = {
  args: {
    gradientColors: ['#0f172a', '#1e293b'],
    iconCount: 15,
    iconOpacity: 0.15,
    animationType: 'gaming',
    children: (
      <div className="h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">GameTreasures</h1>
          <p className="text-xl">Entdecken Sie unsere Gaming-Items</p>
        </div>
      </div>
    ),
  },
};

// Schwebende React Icons
export const FloatingReactIcons: Story = {
  args: {
    gradientColors: ['#0f172a', '#1e293b'],
    icons: [<FaReact key="react" className="text-cyan-500" />],
    iconCount: 15,
    iconOpacity: 0.2,
    animationType: 'float',
  },
};

// Rotierende Herzen
export const SpinningHearts: Story = {
  args: {
    gradientColors: ['#be185d', '#ec4899'],
    icons: [<FaHeart key="heart" className="text-pink-200" />],
    iconCount: 20,
    iconOpacity: 0.15,
    animationType: 'spin',
  },
};

// Springende Sterne
export const BouncingStars: Story = {
  args: {
    gradientColors: ['#1e40af', '#3b82f6'],
    icons: [<FaStar key="star" className="text-yellow-300" />],
    iconCount: 12,
    iconOpacity: 0.2,
    animationType: 'bounce',
  },
};

// Mehrere Icon-Typen
export const MultipleIcons: Story = {
  args: {
    gradientColors: ['#0f172a', '#334155'],
    icons: [
      <FaReact key="react" className="text-cyan-500" />,
      <FaCode key="code" className="text-emerald-500" />,
      <FaStar key="star" className="text-yellow-500" />,
    ],
    iconCount: 15,
    iconOpacity: 0.15,
    animationType: 'float',
  },
};

// Mit Content
export const WithContent: Story = {
  args: {
    gradientColors: ['#1e40af', '#3b82f6'],
    icons: [<FaReact key="react" className="text-cyan-200" />],
    iconCount: 10,
    iconOpacity: 0.1,
    children: (
      <div className="h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Willkommen!</h1>
          <p className="text-xl">Ein schöner animierter Hintergrund</p>
        </div>
      </div>
    ),
  },
};
