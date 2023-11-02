import { withThemeByDataAttribute } from '@storybook/addon-themes';

import '../../tailwind-preset/src/global.css';

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'class',
  }),
];

export const parameters = {
  backgrounds: {
    disable: true,
  },
};
