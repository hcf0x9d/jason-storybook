import type { Meta, StoryObj } from '@storybook/react';
import { Metric } from './Metric';

const meta = {
  title: 'Components/Metric',
  component: Metric,
  tags: ['autodocs'],
} satisfies Meta<typeof Metric>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Adoption Rate',
    value: '85%',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Time to Build',
    value: '-40%',
    helperText: 'Reduction in feature development time',
  },
};

export const NumberValue: Story = {
  args: {
    label: 'Components',
    value: 42,
    helperText: 'Total components in library',
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Metric label="Adoption Rate" value="85%" helperText="Of components in use" />
      <Metric label="Time to Build" value="-40%" helperText="Reduction in feature time" />
      <Metric label="Design Debt" value="-60%" helperText="Reduction in inconsistencies" />
    </div>
  ),
};
