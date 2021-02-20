import { create } from '@storybook/theming';
import { reactPakistanProjects, reactPakistanTheme } from '@react-pakistan/util-functions';

export default create({
  ...reactPakistanTheme,

  brandImage: reactPakistanProjects.reactPakistan.bannerImage,
  brandTitle: reactPakistanProjects.reactLogo.title,
  brandUrl: reactPakistanProjects.reactLogo.githubLink,
});
