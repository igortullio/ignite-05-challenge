/**
 * tsup configuration for @igortullio-ui/react
 *
 * Bundles React components for npm distribution.
 * CSS is processed separately using Tailwind CLI (see build:css script).
 *
 * Build outputs:
 * - dist/index.js (CJS)
 * - dist/index.mjs (ESM)
 * - dist/index.d.ts (TypeScript declarations)
 * - dist/styles.css (compiled by Tailwind CLI, not tsup)
 *
 * @see package.json build:css script for CSS compilation
 */
import { defineConfig } from 'tsup'

export default defineConfig({
  dts: true,
  entry: ['src/index.tsx'],
  external: ['react', 'react-dom'],
  format: ['esm', 'cjs'],
  sourcemap: true,
  clean: true,
  minify: true,
  treeshake: true,
  splitting: false,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    }
  },
})
