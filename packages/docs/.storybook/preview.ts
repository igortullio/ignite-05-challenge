/**
 * Storybook preview configuration for @igortullio-ui/docs
 *
 * Imports Tailwind CSS v4 via @tailwindcss/vite plugin for HMR support.
 * The tailwind.css file configures source scanning and imports design tokens.
 * Theme is set to dark mode by default.
 *
 * Chromatic visual testing is configured with responsive viewport modes.
 *
 * @see https://storybook.js.org/docs/8/configure#configure-story-rendering
 * @see https://www.chromatic.com/docs/modes/
 */
import type { Preview } from '@storybook/react-vite'
import { themes } from 'storybook/theming'
import { allModes } from './modes'
import '../src/styles/tailwind.css'

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
    chromatic: {
      // Default diff threshold (0-1, lower = more sensitive)
      diffThreshold: 0.063,
      // Enable modes for responsive visual testing
      modes: {
        mobile: allModes.mobile,
        desktop: allModes.desktop,
      },
    },
  },
}

export default preview
