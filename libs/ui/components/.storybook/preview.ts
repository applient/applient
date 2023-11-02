import { withThemeByClassName } from '@storybook/addon-themes';

import '@applient/tailwind-preset';

export const decorators = [
  withThemeByClassName({
    themes: {
      light: '',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];

export const parameters = {
  backgrounds: {
    disable: true,
  },
};
