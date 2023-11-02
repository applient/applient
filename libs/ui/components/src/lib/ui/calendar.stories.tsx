import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './calendar';

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: 'Primitives / Calendar',
};
export default meta;
type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {
  args: {},
};
