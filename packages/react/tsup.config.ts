import { defineConfig } from 'tsup'

export default defineConfig({
  dts: true,
  entry: ['src/index.tsx'],
  external: ['react'],
  format: ['esm', 'cjs'],
  sourcemap: true,
})
