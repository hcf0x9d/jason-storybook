import type { Meta, StoryObj } from '@storybook/react';
import { Section } from './Section';

const meta = {
  title: 'Components/Section',
  component: Section,
  tags: ['autodocs'],
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: 'Section Heading',
    children: (
      <div>
        <p>This is the content of the section. It uses prose styling for readable typography.</p>
        <p>You can include multiple paragraphs, lists, and other content here.</p>
      </div>
    ),
  },
};

export const Level3: Story = {
  args: {
    heading: 'Subsection Heading',
    level: 3,
    children: (
      <div>
        <p>This is a level 3 heading, useful for subsections within a larger section.</p>
      </div>
    ),
  },
};

export const WithList: Story = {
  args: {
    heading: 'Key Points',
    children: (
      <ul className="list-disc list-inside space-y-2">
        <li>First important point</li>
        <li>Second important point</li>
        <li>Third important point</li>
      </ul>
    ),
  },
};
