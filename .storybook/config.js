import { configure, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import requireContext from 'require-context.macro';

function loadStories() {
  //require('../src/stories');
  const req = requireContext('../src', true, /.stories.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
