# @igortullio-ui/react

[![npm version](https://img.shields.io/npm/v/@igortullio-ui/react)](https://www.npmjs.com/package/@igortullio-ui/react)

Pre-themed [shadcn/ui](https://ui.shadcn.com/) component library for React, built with Tailwind CSS v4 and Radix UI primitives.

## Installation

```bash
npm install @igortullio-ui/react
```

### Peer Dependencies

```bash
npm install react react-dom
```

## Setup

Import the stylesheet in your app's entry point:

```tsx
import '@igortullio-ui/react/styles.css'
```

This package uses **Tailwind CSS v4**. Make sure your project is configured with Tailwind CSS v4.

## Usage

```tsx
import { Button } from '@igortullio-ui/react'

export function App() {
  return <Button variant="outline">Click me</Button>
}
```

## Components

Accordion, Alert, AlertDialog, Avatar, Badge, Button, Card, Checkbox, Dialog, DropdownMenu, Input, Label, Popover, Progress, RadioGroup, Select, Separator, Skeleton, Switch, Table, Tabs, Textarea, Tooltip

## Theming

Components are styled via CSS custom properties using `oklch` colors. Override them in your own CSS to customize the theme:

```css
:root {
  --primary: oklch(0.646 0.222 41.116);
  --secondary: oklch(0.967 0.001 286.375);
  --radius: 0.45rem;
}
```

For dark mode, add the `.dark` class to a parent element and override the variables:

```css
.dark {
  --primary: oklch(0.705 0.213 47.604);
  --background: oklch(0.13 0.028 261.692);
}
```

See [all available tokens](https://github.com/igortullio/igortullio-ui/blob/main/packages/react/src/index.css) in `index.css`.

## Utilities

The package exports two utilities for building custom components:

- **`cn(...inputs)`** — merges class names with `clsx` + `tailwind-merge`
- **`cva(base, config)`** — creates variant-based class definitions via `class-variance-authority`

```tsx
import { cn, cva, type VariantProps } from '@igortullio-ui/react'
```

## License

MIT
