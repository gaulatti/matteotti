import { Theme } from '@radix-ui/themes';
import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/styles/index.css';
import { useDarkMode } from './hooks/useDarkMode';

const preview: Preview = {
  decorators: [
    (Story) => {
      const { isDarkMode } = useDarkMode();
      return (
        <Theme appearance={isDarkMode ? 'dark' : 'light'} accentColor='orange' grayColor='sand' radius='large'>
          <Story />
        </Theme>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
