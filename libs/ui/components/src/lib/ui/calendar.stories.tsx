import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './calendar';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: 'Calendar',
};
export default meta;
type Story = StoryObj<typeof Calendar>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Calendar!/gi)).toBeTruthy();
  },
};
