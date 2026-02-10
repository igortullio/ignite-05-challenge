/**
 * Vite configuration for @igortullio-ui/react
 *
 * Uses @tailwindcss/vite plugin for Tailwind CSS v4 integration.
 * This enables CSS-first configuration and automatic class detection.
 *
 * @see https://tailwindcss.com/docs/installation/using-vite
 */
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
})
