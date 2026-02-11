/**
 * Storybook manager configuration for @igortullio-ui/docs
 *
 * Configures the Storybook UI appearance with dark theme.
 *
 * @see https://storybook.js.org/docs/8/configure/features-and-behavior
 */
import { addons } from 'storybook/manager-api'
import { themes } from 'storybook/theming'

addons.setConfig({
  theme: themes.dark,
})
