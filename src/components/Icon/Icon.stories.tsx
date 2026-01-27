import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'lni-rocket',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="lni-rocket" className="text-sm" />
      <Icon name="lni-rocket" className="text-base" />
      <Icon name="lni-rocket" className="text-xl" />
      <Icon name="lni-rocket" className="text-2xl" />
      <Icon name="lni-rocket" className="text-4xl" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="lni-rocket" className="text-gray-600" />
      <Icon name="lni-rocket" className="text-blue-600" />
      <Icon name="lni-rocket" className="text-green-600" />
      <Icon name="lni-rocket" className="text-red-600" />
    </div>
  ),
};

export const CommonIcons: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      <div className="text-center">
        <Icon name="lni-user" className="text-2xl mb-2" />
        <div className="text-xs">user</div>
      </div>
      <div className="text-center">
        <Icon name="lni-envelope" className="text-2xl mb-2" />
        <div className="text-xs">envelope</div>
      </div>
      <div className="text-center">
        <Icon name="lni-rocket" className="text-2xl mb-2" />
        <div className="text-xs">rocket</div>
      </div>
      <div className="text-center">
        <Icon name="lni-checkmark-circle" className="text-2xl mb-2" />
        <div className="text-xs">checkmark</div>
      </div>
    </div>
  ),
};
