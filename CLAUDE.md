# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React Design System monorepo (`@igortullio-ui/*`) with design tokens, React components, and Storybook docs. Published to npm.

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
docs → react → tokens
              → ts-config
              → eslint-config
```

### Packages

| Package | Published | Purpose |
|---------|-----------|---------|
| `tokens` | Yes | Design tokens (colors, spacing, fonts, radii, etc.) as TS constants |
| `react` | Yes | React component library (9 components) |
| `eslint-config` | No | Shared ESLint config (extends `@rocketseat/eslint-config/react`) |
| `ts-config` | No | Shared tsconfig (`base.json` and `react.json`) |
| `docs` | No | Storybook documentation site |

### Styling Architecture

- **Stitches** (`@stitches/react`) for CSS-in-JS — configured in `packages/react/src/styles/index.ts`
- `createStitches()` maps all token packages into the Stitches theme
- Custom `themeMap`: `height` and `width` resolve to `space` tokens
- Components use Stitches `styled()` API with `variants` for component APIs
- **Radix UI** primitives for Avatar and Checkbox

### Build

- **tsup** bundles `tokens` and `react` packages (ESM + CJS + `.d.ts`)
- Turbo `build` pipeline has `dependsOn: ["^build"]` — tokens builds before react
- Storybook uses Vite builder

### Releases

- **Changesets** handles versioning and npm publishing
- `docs` package is excluded from changesets/publishing
- Internal dependency updates use `patch` strategy
- Commits are auto-created on version bumps
