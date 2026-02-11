import { defineConfig } from 'tsup'

export default defineConfig({
  tsconfig: 'tsconfig.app.json',
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
