import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Primitives / Checkbox',
  render: (args) => (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" {...args} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  ),
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    disabled: false,
  },
};
