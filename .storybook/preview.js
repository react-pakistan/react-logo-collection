import { themes } from '@storybook/theming';
import { parameters as parameter, globalTypes as globalType } from '@react-pakistan/util-functions';

export const parameters = {
  ...parameter,
  docs: {
    theme: themes.dark,
  },
};

export const globalTypes = {
  ...globalType,
};
