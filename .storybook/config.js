import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

/* Decorators configuration */
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withInfo({
  header: false,
  text: 'React Pakistan - Icon Collection',
  inline: true,
}));
addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
});

function loadStories() {
  const req = require.context('../stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
