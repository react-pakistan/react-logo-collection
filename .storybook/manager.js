import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import customTheme from './custom-theme';

addons.setConfig({
  theme: {
    ...customTheme,
    ...themes.dark
  },
});

window.STORYBOOK_GA_ID = 'UA-145839845-1';
