/**
 * Vite configuration for @igortullio-ui/docs (Storybook)
 *
 * Tailwind CSS styles are pre-compiled in @igortullio-ui/react package
 * and imported via preview.ts, so no Tailwind plugin is needed here.
 *
 * @see https://storybook.js.org/docs/8/get-started/frameworks/react-vite
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
