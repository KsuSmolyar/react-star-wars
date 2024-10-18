import { UiInput } from '../components/UI/UiInput/UiInput';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';

const meta = {
  title: 'Example/Input',
  component: UiInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { handleInputChange: fn() },
} satisfies Meta<typeof UiInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const InputWithHooks = () => {
  const [value, setValue] = useState('');
 
  const handleInputChange = (value:string) => {
    setValue(value);
  };

  return <UiInput value={value} handleInputChange={handleInputChange} type="text" />;
};
 
export const Input: Story = {
  args: {
    value: 'text',
    type: 'text',
  },
  render: () => <InputWithHooks />,
};
