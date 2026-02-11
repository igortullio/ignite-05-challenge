/**
 * Storybook configuration for @igortullio-ui/docs
 *
 * Uses @storybook/react-vite framework with Tailwind CSS v4 integration.
 * Tailwind styles are loaded via @tailwindcss/vite plugin in viteFinal.
 *
 * Note: Uses getAbsolutePath pattern to resolve ESM/CJS interop issues
 * with Node.js 24+ in monorepo workspaces.
 *
 * @see https://storybook.js.org/docs/get-started/frameworks/react-vite
 */

import { createRequire } from 'node:module'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { StorybookConfig } from '@storybook/react-vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

const require = createRequire(import.meta.url)

/**
 * Resolves the absolute path of a package for Storybook configuration.
 * Required for proper module resolution in npm workspaces with Node.js 24+.
 */
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  stories: ['../src/pages/**/*.mdx', '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@chromatic-com/storybook'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite') as '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config, { configType }) => {
    // Import @tailwindcss/vite plugin for Tailwind CSS v4 processing
    const tailwindcss = await import('@tailwindcss/vite').then((m) => m.default)

    // Add Tailwind CSS plugin to Vite
    config.plugins = config.plugins || []
    config.plugins.push(tailwindcss())

    // Resolve @igortullio-ui/react to source files to avoid
    // "Dynamic require of react is not supported" from built ESM output
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...config.resolve.alias,
      '@igortullio-ui/react': resolve(__dirname, '../../react/src/index.tsx'),
    }

    if (configType === 'PRODUCTION') {
      config.base = '/igortullio-ui/'
    }
    return config
  },
}

export default config
