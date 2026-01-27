import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './Callout';

const meta = {
  title: 'Components/Callout',
  component: Callout,
  tags: ['autodocs'],
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'This is an informational callout. Use it to highlight important information.',
  },
};

export const InfoWithTitle: Story = {
  args: {
    variant: 'info',
    title: 'Important Note',
    children: 'This callout includes a title for additional context.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warn',
    title: 'Warning',
    children: 'This is a warning callout. Use it to alert users to potential issues.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    children: 'This is a success callout. Use it to confirm positive outcomes.',
  },
};
