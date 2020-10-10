const fs = require('fs');
const utils = require('@react-pakistan/util-functions/storybook/generate-sitemap');
const allStories = require('../stories.json');

const baseUrl = 'https://react-pakistan.github.io/react-logo-collection/?path=/story/';

utils.generateSitemap(baseUrl, fs, allStories.stories);
