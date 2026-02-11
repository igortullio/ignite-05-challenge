import { defineConfig } from 'tsup'

export default defineConfig({
  tsconfig: 'tsconfig.app.json',
  dts: true,
  entry: ['src/index.tsx'],
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  format: ['esm', 'cjs'],
  sourcemap: true,
  clean: true,
  minify: true,
  treeshake: true,
  splitting: false,
  esbuildOptions(options) {
    if (options.format === 'esm') {
      options.banner = {
        js: [
          '"use client"',
          'import * as __cjs_react from "react";',
          'import * as __cjs_react_dom from "react-dom";',
          'var require = (id) => ({ "react": __cjs_react, "react-dom": __cjs_react_dom }[id]);',
        ].join('\n'),
      }
    } else {
      options.banner = {
        js: '"use client"',
      }
    }
  },
})
