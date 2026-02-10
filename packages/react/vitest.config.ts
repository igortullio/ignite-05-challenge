/**
 * Vitest configuration for @igortullio-ui/react
 *
 * Configured for testing React components and Tailwind CSS setup verification.
 * Note: Tailwind CSS plugin is not needed for configuration tests.
 */
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.test.{ts,tsx}', 'src/**/*.d.ts'],
    },
  },
})
