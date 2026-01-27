import type { Meta, StoryObj } from '@storybook/react';
import { PageLayout } from './PageLayout';

const meta = {
  title: 'Components/PageLayout',
  component: PageLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Example Page',
    subtitle: 'A subtitle for context',
    meta: 'Last updated: January 2025',
    children: (
      <div>
        <p>This is the main content area. It uses prose styling for readable typography.</p>
        <p>You can include any content here, including other components.</p>
      </div>
    ),
  },
};

export const WithIcon: Story = {
  args: {
    title: 'Example Page',
    subtitle: 'With an icon',
    icon: 'lni-rocket',
    children: (
      <div>
        <p>This page layout includes an icon at the top.</p>
      </div>
    ),
  },
};

export const Minimal: Story = {
  args: {
    title: 'Simple Page',
    children: (
      <div>
        <p>Just a title and content. Clean and simple.</p>
      </div>
    ),
  },
};
