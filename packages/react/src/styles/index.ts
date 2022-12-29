import {
  colors,
  space,
  radii,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
} from '@igortullio-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
  reset,
  prefix,
} = createStitches({
  theme: {
    colors,
    space,
    radii,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
  },
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
})
