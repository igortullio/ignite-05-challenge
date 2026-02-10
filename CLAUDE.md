# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React Design System monorepo (`@igortullio-ui/*`) with React components and Storybook docs. Published to npm as `@igortullio-ui/react`.

## Commands

```bash
npm install          # Install all workspace dependencies
npm run dev          # Dev mode for all packages (turbo, parallel)
npm run build        # Build all packages (turbo, respects dependency graph)
```

**Per-package commands** (run from package directory):
```bash
npm run build        # Build single package
npm run dev          # Watch mode build
npm run lint         # ESLint with autofix (react package)
npm run test         # Run tests (react package)
```

**Release workflow:**
```bash
npm run changeset          # Create a changeset for versioning
npm run version-packages   # Apply changesets to bump versions
npm run release            # Build (excluding docs) + publish to npm
```

**Storybook** (from `packages/docs`):
```bash
npm run dev                # Start Storybook dev server
npm run build             # Build static Storybook
npm run deploy-storybook  # Deploy to GitHub Pages
```

## Architecture

**Monorepo**: Turborepo + npm workspaces. All packages live in `packages/`.

### Package Dependency Graph

```
docs → react → ts-config
              → eslint-config
```

### Packages

| Package | Published | Purpose |
|---------|-----------|---------|
| `react` | Yes | React component library (9 components) with Tailwind CSS v4 |
| `eslint-config` | No | Shared ESLint config (extends `@rocketseat/eslint-config/react`) |
| `ts-config` | No | Shared tsconfig (`base.json` and `react.json`) |
| `docs` | No | Storybook documentation site |

### Styling Architecture

- **Tailwind CSS v4** with CSS-first approach using `@theme inline` directive
- Design tokens defined in `packages/react/src/styles/globals.css` as CSS custom properties
- **Tailwind Variants** (`tailwind-variants`) for component variant definitions
- Components use `tv()` API with variants for component APIs
- **Radix UI** primitives for Avatar and Checkbox
- Consumers must import `@igortullio-ui/react/styles.css` for styles to work

### Design Tokens

Design tokens are defined in CSS using Tailwind v4's `@theme inline` directive:

```css
@theme inline {
  --color-ignite-500: #00875f;
  --font-default: 'Roboto', sans-serif;
  --radius-md: 8px;
  --spacing-4: 1rem;
}
```

Token categories:
- Colors (gray scale, ignite brand)
- Font families, sizes, weights
- Line heights
- Border radii
- Spacing scale

### Build

- **tsup** bundles `react` package (ESM + CJS + `.d.ts`)
- **Tailwind CLI** compiles CSS from `globals.css` to `dist/styles.css`
- Build script runs both: `build:js` (tsup) + `build:css` (Tailwind CLI)
- Turbo `build` pipeline has `dependsOn: ["^build"]`
- Storybook uses Vite builder with `@tailwindcss/vite`

### Releases

- **Changesets** handles versioning and npm publishing
- `docs` package is excluded from changesets/publishing
- Internal dependency updates use `patch` strategy
- Commits are auto-created on version bumps
