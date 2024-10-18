import { UiVideo } from '../components/UI/UiVideo/UiVideo';
import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
// import { useState } from 'react';

const meta = {
  title: 'Example/Video',
  component: UiVideo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { speed: 1 },
} satisfies Meta<typeof UiVideo>;

export default meta;
type Story = StoryObj<typeof meta>;

const VideoWithHooks = () => {

  return <UiVideo speed={1} />
};
 
export const Video: Story = {
  render: () => <VideoWithHooks />,
};
