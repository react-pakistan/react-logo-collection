import { configure, addDecorator, addParameters } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import customTheme from "./customTheme";

/* Decorators configuration */
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withInfo({
  header: false,
  text: "React Pakistan - Logo Collection",
  inline: true,
}));
addParameters({
  options: {
    theme: customTheme,
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
    sidebarAnimations: true,
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
});

configure([
  require.context("../src", true, /\.story\.tsx$/),
  require.context("../src", true, /\.story\.mdx$/),
], module);
