import type { Meta, StoryObj } from '@storybook/react';
import { ArtifactGallery } from './ArtifactGallery';

const meta = {
  title: 'Components/ArtifactGallery',
  component: ArtifactGallery,
  tags: ['autodocs'],
} satisfies Meta<typeof ArtifactGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleArtifacts = [
  {
    image: 'https://placehold.co/600x400',
    caption: 'Component library overview',
  },
  {
    image: 'https://placehold.co/600x400',
    caption: 'Design tokens documentation',
  },
  {
    image: 'https://placehold.co/600x400',
    caption: 'Usage examples',
  },
];

export const Default: Story = {
  args: {
    artifacts: sampleArtifacts,
  },
};

export const TwoColumns: Story = {
  args: {
    artifacts: sampleArtifacts,
    columns: 2,
  },
};

export const FourColumns: Story = {
  args: {
    artifacts: [
      ...sampleArtifacts,
      {
        image: 'https://placehold.co/600x400',
        caption: 'Additional artifact',
      },
    ],
    columns: 4,
  },
};

export const WithoutCaptions: Story = {
  args: {
    artifacts: [
      {
        image: 'https://placehold.co/600x400',
      },
      {
        image: 'https://placehold.co/600x400',
      },
      {
        image: 'https://placehold.co/600x400',
      },
    ],
  },
};
