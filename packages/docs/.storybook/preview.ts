/**
 * Storybook preview configuration for @igortullio-ui/docs
 *
 * Imports Tailwind CSS v4 globals from @igortullio-ui/react package.
 * Theme is set to dark mode by default.
 *
 * @see https://storybook.js.org/docs/8/configure#configure-story-rendering
 */
import type { Preview } from '@storybook/react-vite'
import { themes } from '@storybook/theming'
import '@igortullio-ui/react/styles.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#121214' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
}

export default preview
