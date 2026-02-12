import type { StorybookConfig } from '@storybook/react-vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-themes',
    '@storybook/addon-docs',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook'
  ],
  framework: '@storybook/react-vite',
  viteFinal(config) {
    config.plugins ??= []
    config.plugins.push(tailwindcss(), react())

    return config
  },
}

export default config
