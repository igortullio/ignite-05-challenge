/**
 * Vite configuration for @igortullio-ui/docs (Storybook)
 *
 * Tailwind CSS v4 is integrated via @tailwindcss/vite plugin configured
 * in .storybook/main.ts viteFinal hook for proper Storybook integration.
 * This enables HMR for Tailwind classes during development.
 *
 * @see https://storybook.js.org/docs/8/get-started/frameworks/react-vite
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
