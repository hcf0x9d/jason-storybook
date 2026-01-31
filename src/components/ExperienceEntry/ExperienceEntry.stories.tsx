import type { Meta, StoryObj } from '@storybook/react';
import { ExperienceEntry } from './ExperienceEntry';

const meta = {
  title: 'Components/ExperienceEntry',
  component: ExperienceEntry,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Job title line, e.g. "Company — Role"' },
    period: { control: 'text', description: 'Date range' },
    items: { control: 'object', description: 'Bullet points' },
  },
} satisfies Meta<typeof ExperienceEntry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Foodsmart — Director of Product Design',
    period: 'Apr 2025 – Dec 2025',
    items: [
      'Led end-to-end product design across mobile, web, and native platforms.',
      'Established DesignOps governance and standardized handoffs; reduced design→dev cycle time by ~40%.',
      'Founded the Ambrosia Design System (token-based) adopted across platforms to improve velocity + consistency.',
      'Partnered with Eng leadership to embed quality metrics into delivery pipelines and reduce design debt.',
    ],
  },
};

export const ShortList: Story = {
  args: {
    title: 'otto by DEVCON — Director of UX',
    period: 'Feb 2021 – Oct 2021',
    items: [
      'Directed UX strategy for a SaaS platform mitigating JavaScript vulnerabilities.',
      'Designed dashboards for real-time threat detection + remediation workflows.',
    ],
  },
};

export const MultipleEntries: Story = {
  render: () => (
    <div className="space-y-8">
      <ExperienceEntry
        title="Foodsmart — Director of Product Design"
        period="Apr 2025 – Dec 2025"
        items={[
          'Led end-to-end product design across mobile, web, and native platforms.',
          'Established DesignOps governance and standardized handoffs.',
        ]}
      />
      <ExperienceEntry
        title="Medable — Senior Product Designer"
        period="Oct 2021 – Aug 2023"
        items={[
          "Led creation of Nucleus, Medable's first unified design system.",
          'Defined governance for component lifecycle and documentation.',
        ]}
      />
    </div>
  ),
};
