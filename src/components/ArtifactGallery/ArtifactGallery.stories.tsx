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
    image: 'https://via.placeholder.com/400x300?text=Artifact+1',
    caption: 'Component library overview',
  },
  {
    image: 'https://via.placeholder.com/400x300?text=Artifact+2',
    caption: 'Design tokens documentation',
  },
  {
    image: 'https://via.placeholder.com/400x300?text=Artifact+3',
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
        image: 'https://via.placeholder.com/400x300?text=Artifact+4',
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
        image: 'https://via.placeholder.com/400x300?text=Image+1',
      },
      {
        image: 'https://via.placeholder.com/400x300?text=Image+2',
      },
      {
        image: 'https://via.placeholder.com/400x300?text=Image+3',
      },
    ],
  },
};
