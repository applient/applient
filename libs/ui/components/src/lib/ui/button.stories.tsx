import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  argTypes: {
    children: {
      name: 'Button text',
    },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary = {
  args: {
    children: 'Button',
  },
};
