/**
 * tsup configuration for @igortullio-ui/react
 *
 * Bundles React components for npm distribution.
 * CSS is processed separately using Tailwind CLI (see build:css script).
 *
 * Build outputs:
 * - dist/index.js (CJS)
 * - dist/index.mjs (ESM)
 * - dist/index.d.ts (TypeScript declarations) - TEMPORARILY DISABLED
 * - dist/styles.css (compiled by Tailwind CLI, not tsup)
 *
 * @see package.json build:css script for CSS compilation
 *
 * NOTE: TypeScript declarations (dts) are temporarily disabled during the
 * Tailwind CSS v4 migration. They will be re-enabled after all components
 * are migrated from Stitches to tailwind-variants in the subsequent task.
 * The current Stitches compatibility stubs cause type inference issues that
 * will be resolved once components use the new styling approach.
 */
import { defineConfig } from 'tsup'

export default defineConfig({
  // TODO: Re-enable dts after component migration to tailwind-variants
  dts: false,
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
