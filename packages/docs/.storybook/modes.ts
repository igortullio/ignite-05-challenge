/**
 * Storybook Modes configuration for Chromatic visual testing
 *
 * Defines viewport and theme modes for responsive visual regression testing.
 * Used by Chromatic to capture snapshots at different screen sizes.
 *
 * @see https://www.chromatic.com/docs/modes/
 */

export const allModes = {
  mobile: {
    viewport: 320,
  },
  tablet: {
    viewport: 768,
  },
  desktop: {
    viewport: 1024,
  },
  wide: {
    viewport: 1440,
  },
  dark: {
    backgrounds: { value: '#121214' },
  },
  light: {
    backgrounds: { value: '#ffffff' },
  },
  'dark mobile': {
    backgrounds: { value: '#121214' },
    viewport: 320,
  },
  'dark tablet': {
    backgrounds: { value: '#121214' },
    viewport: 768,
  },
  'dark desktop': {
    backgrounds: { value: '#121214' },
    viewport: 1024,
  },
} as const

export type Mode = keyof typeof allModes
