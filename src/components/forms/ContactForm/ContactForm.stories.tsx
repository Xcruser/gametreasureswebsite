import type { Meta, StoryObj } from '@storybook/react';
import { ContactForm } from './ContactForm';

const meta: Meta<typeof ContactForm> = {
  title: 'Forms/ContactForm',
  component: ContactForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {};

// Story mit vorausgefüllten Daten
export const Prefilled: Story = {
  args: {
    initialData: {
      name: 'Max Mustermann',
      email: 'max@example.com',
      message: 'Dies ist eine Testnachricht.',
    },
  },
};
