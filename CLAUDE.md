# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React Design System monorepo (`@igortullio-ui/*`) built on **shadcn/ui** components with custom design tokens. Published to npm as `@igortullio-ui/react`. Acts as a "theme layer" — consumers get pre-themed shadcn components.

## Commands

```bash
npm install          # Install all workspace dependencies
npm run dev          # Dev mode for all packages (turbo, parallel)
npm run build        # Build all packages (turbo, respects dependency graph)
npm run format       # Format all files with Biome
npm run check        # Check all files with Biome (lint + format, no write)
```

**Per-package commands** (run from package directory):
```bash
npm run build        # Build single package
npm run dev          # Watch mode build
npm run lint         # Biome check with autofix
npm run test         # Run tests (react package)
```

**Release workflow:**
```bash
npm run changeset          # Create a changeset for versioning
npm run version-packages   # Apply changesets to bump versions
npm run release            # Build + publish to npm
```

**Adding new shadcn components** (from `packages/react`):
```bash
npx shadcn@latest add [component-name]   # Install a new shadcn component
```
After adding, fix `@/` path aliases to relative imports and run `npm run lint` to format.

## Architecture

**Monorepo**: Turborepo + npm workspaces. All packages live in `packages/`.

### Packages

| Package | Published | Purpose |
|---------|-----------|---------|
| `react` | Yes | shadcn/ui component library (23 components) with Tailwind CSS v4 |

### Components (shadcn/ui)

All components live in `packages/react/src/components/ui/` and are re-exported from `packages/react/src/index.tsx`:

accordion, alert, alert-dialog, avatar, badge, button, card, checkbox, dialog, dropdown-menu, input, label, popover, progress, radio-group, select, separator, skeleton, switch, table, tabs, textarea, tooltip

### Linting & Formatting

- **Biome** (`@biomejs/biome`) handles linting, formatting, and import sorting from the root `biome.json`
- Config: single quotes, no semicolons, trailing commas, 2-space indent, 80 chars
- Lint rules: recommended + React hooks, a11y, unused vars/imports
- `npm run lint` runs `biome check --write ./src` per package via Turbo
- `npm run format` / `npm run check` at root for the whole repo

### Styling Architecture

- **Tailwind CSS v4** with CSS-first approach using `@theme inline` directive
- Design tokens defined in `packages/react/src/index.css` as CSS custom properties (shadcn format)
- **`cn()`** utility (`clsx` + `tailwind-merge`) for class merging
- **`cva()`** (`class-variance-authority`) for component variant definitions
- Components are **shadcn/ui** components installed via CLI, using Radix UI primitives
- **Lucide React** for icons
- Consumers must import `@igortullio-ui/react/styles.css` for styles to work

### Design Tokens

Design tokens follow shadcn/ui's CSS variable pattern with oklch colors:

```css
@theme inline {
  --color-primary: var(--primary);
  --color-secondary: var(--secondary);
  --radius-lg: var(--radius);
}

:root {
  --primary: oklch(0.646 0.222 41.116);
  --radius: 0.45rem;
}

.dark {
  --primary: oklch(0.705 0.213 47.604);
}
```

Token categories: colors (semantic), font families, border radii, sidebar tokens, chart tokens.

### Build

- **tsup** bundles `react` package (ESM + CJS + `.d.ts`)
- **Tailwind CLI** compiles CSS from `index.css` to `dist/styles.css`
- Build script runs both: `build:js` (tsup) + `build:css` (Tailwind CLI)
- Turbo `build` pipeline has `dependsOn: ["^build"]`
- **Important**: shadcn CLI generates `@/` path aliases — these must be replaced with relative imports for tsup to resolve them

### Releases

- **Changesets** handles versioning and npm publishing
- Internal dependency updates use `patch` strategy
- Commits are auto-created on version bumps
