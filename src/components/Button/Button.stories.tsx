import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    semantic: {
      control: 'select',
      options: ['default', 'destructive'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'subtle'],
    },
    width: {
      control: 'select',
      options: ['hug', 'full'],
    },
    disabled: {
      control: 'boolean',
    },
    icon: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default semantic - Solid
export const Solid: Story = {
  args: {
    semantic: 'default',
    variant: 'solid',
    width: 'hug',
    children: 'Button',
  },
};


// Default semantic - Outline
export const Outline: Story = {
  args: {
    semantic: 'default',
    variant: 'outline',
    width: 'hug',
    children: 'Button',
  },
};

// Default semantic - Ghost
export const Ghost: Story = {
  args: {
    semantic: 'default',
    variant: 'ghost',
    width: 'hug',
    children: 'Button',
  },
};

// Default semantic - Ghost
export const Subtle: Story = {
  args: {
    semantic: 'default',
    variant: 'subtle',
    width: 'hug',
    children: 'Button',
  },
};


