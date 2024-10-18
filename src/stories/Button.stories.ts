import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import  UiButton  from '../components/UI/UiButton';

const meta = {
  title: 'Example/Button',
  component: UiButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: { 
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof UiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    theme: "light",
    children: 'Button',
  },
};
