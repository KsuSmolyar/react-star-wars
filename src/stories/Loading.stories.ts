import type { Meta, StoryObj } from '@storybook/react';
import  UiLoading  from '../components/UI/UiLoading';

const meta = {
  title: 'Example/Loader',
  component: UiLoading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: { 
      options: ['yellow', 'black', 'white'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof UiLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loader: Story = {
  args: {
    theme: "yellow",
    isShadow: true,
  },
};
