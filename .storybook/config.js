import { configure, addDecorator, addParameters } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
// import { addReadme } from "storybook-readme";
import customTheme from "./customTheme";

/* Decorators configuration */
addDecorator(withKnobs);
addDecorator(withA11y);
// addDecorator(addReadme);
addDecorator(withInfo({
  header: false,
  text: "React Pakistan - Commons Collection",
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

function loadStories() {
  const req = require.context("../src", true, /\.story\.tsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
