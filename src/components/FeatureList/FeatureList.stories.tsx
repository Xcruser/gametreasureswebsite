import type { Meta, StoryObj } from '@storybook/react';
import { FeatureList } from './FeatureList';
import { featureListConfig } from '@/config/components';

const meta: Meta<typeof FeatureList> = {
  title: 'Components/FeatureList',
  component: FeatureList,
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
    title: {
      control: 'text',
      description: 'Titel der Feature-Liste',
      defaultValue: featureListConfig.title,
    },
    features: {
      control: 'array',
      description: 'Liste der Features',
      defaultValue: featureListConfig.features,
    },
    alignment: {
      control: 'radio',
      options: ['left', 'center', 'right'],
      description: 'Ausrichtung der Liste',
      defaultValue: featureListConfig.alignment,
    },
    icon: {
      control: 'select',
      options: ['check', 'star', 'heart', 'arrow'],
      description: 'Icon für die Features',
      defaultValue: featureListConfig.icon,
    },
    iconSize: {
      control: { type: 'number', min: 8, max: 24, step: 2 },
      description: 'Größe des Icons',
      defaultValue: featureListConfig.iconSize,
    },
    checkmarkColor: {
      control: 'select',
      options: [
        'bg-accent-blue-light',
        'bg-accent-green-light',
        'bg-accent-purple-light'
      ],
      description: 'Farbe der Icons',
      defaultValue: featureListConfig.checkmarkColor,
    },
    withAnimation: {
      control: 'boolean',
      description: 'Animationen aktivieren/deaktivieren',
      defaultValue: featureListConfig.withAnimation,
    },
    iconPosition: {
      control: 'radio',
      options: ['start', 'spaced', 'text'],
      description: 'Position des Icons',
      defaultValue: featureListConfig.iconPosition,
    },
  },
};

export default meta;
type Story = StoryObj<typeof FeatureList>;

// Basis-Variante
export const Default: Story = {
  args: {
    ...featureListConfig,
  },
};

// Ausrichtungs-Varianten
export const LeftAligned: Story = {
  args: {
    ...featureListConfig,
    alignment: 'left',
  },
};

export const RightAligned: Story = {
  args: {
    ...featureListConfig,
    alignment: 'right',
  },
};

// Icon-Varianten
export const WithStars: Story = {
  args: {
    ...featureListConfig,
    icon: 'star',
    checkmarkColor: 'bg-accent-purple-light',
  },
};

export const WithHearts: Story = {
  args: {
    ...featureListConfig,
    icon: 'heart',
    checkmarkColor: 'bg-accent-blue-light',
  },
};

export const LargeIcons: Story = {
  args: {
    ...featureListConfig,
    iconSize: 20,
  },
};

// Icon-Position-Varianten
export const IconAtStart: Story = {
  args: {
    ...featureListConfig,
    iconPosition: 'start',
  },
};

export const IconSpaced: Story = {
  args: {
    ...featureListConfig,
    iconPosition: 'spaced',
  },
};

export const IconNearText: Story = {
  args: {
    ...featureListConfig,
    iconPosition: 'text',
  },
};

// Style-Varianten
export const CustomStyles: Story = {
  args: {
    ...featureListConfig,
    titleClassName: 'text-3xl font-bold mb-6 text-accent-blue-light',
    containerClassName: 'bg-primary-900/70 rounded-2xl p-8 backdrop-blur-lg',
  },
};
