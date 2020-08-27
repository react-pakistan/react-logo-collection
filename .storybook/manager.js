import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import ReactGA from 'react-ga';
import customTheme from './custom-theme';

ReactGA.initialize('UA-145839845-1');
ReactGA.pageview(window.location.pathname + window.location.search);

addons.setConfig({
  theme: {
    ...customTheme,
    ...themes.dark
  },
});
