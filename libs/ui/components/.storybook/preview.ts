import { withThemeByClassName } from '@storybook/addon-themes';

import '../../tailwind-preset/src/global.css';

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
