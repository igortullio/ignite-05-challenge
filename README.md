# igortullio-ui

A React Design System built on **shadcn/ui** components with custom design tokens. Published on npm as [`@igortullio-ui/react`](https://www.npmjs.com/package/@igortullio-ui/react).

## Tech Stack

- [React 18+](https://react.dev/) - UI library
- [TypeScript 5+](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS with CSS-first configuration
- [shadcn/ui](https://ui.shadcn.com/) - Component primitives
- [Radix UI](https://www.radix-ui.com/) - Accessible primitives
- [Changesets](https://github.com/changesets/changesets) - Versioning and publishing
- [tsup](https://tsup.egoist.dev/) - TypeScript bundler
- [Turborepo](https://turbo.build/) - Monorepo build system

## Getting Started

### Development

```bash
git clone https://github.com/igortullio/igortullio-ui.git
cd igortullio-ui
npm install
npm run dev
```

### Available Commands

```bash
npm run dev          # Start all packages in dev mode
npm run build        # Build all packages
npm run lint         # Run linting
npm run test         # Run tests
```

## Installation

```bash
npm install @igortullio-ui/react
```

## Usage

> ⚠️ **Important:** You MUST import the CSS file for components to be styled correctly.

```tsx
// 1. Import the styles (REQUIRED)
import '@igortullio-ui/react/styles.css'

// 2. Import components
import { Button, Text, Box, Avatar, Heading } from '@igortullio-ui/react'

function App() {
  return (
    <Box>
      <Heading>Welcome</Heading>
      <Text>Hello World</Text>
      <Button variant="primary" size="md">Click me</Button>
    </Box>
  )
}
```

## Components

| Component | Description | Variants |
|-----------|-------------|----------|
| `Avatar` | User profile image with fallback | - |
| `Box` | Container with default styling | - |
| `Button` | Interactive button | `variant`: primary, secondary, tertiary; `size`: sm, md |
| `Checkbox` | Accessible checkbox input | - |
| `Heading` | Semantic heading element | `size`: sm, md, lg, 2xl, 3xl, 4xl, 5xl, 6xl |
| `MultiStep` | Step progress indicator | - |
| `Text` | Text paragraph element | `size`: xxs, xs, sm, md, lg, xl, 2xl, 4xl-9xl |
| `TextArea` | Multi-line text input | - |
| `TextInput` | Single-line text input with optional prefix | `size`: sm, md |

## Styling Architecture

This library uses **Tailwind CSS v4** with a CSS-first approach:

- **Design tokens** are defined using `@theme inline` directive in CSS
- **Component variants** are implemented with [Tailwind Variants](https://www.tailwind-variants.org/)
- **Accessible primitives** from Radix UI for Avatar and Checkbox

### Design Tokens

Tokens are available as CSS custom properties:

```css
/* Colors */
--color-ignite-500: #00875f;  /* Brand primary */
--color-gray-100: #e1e1e6;    /* Text primary */
--color-gray-900: #121214;    /* Background */

/* Typography */
--font-default: 'Roboto', sans-serif;
--font-size-md: 1rem;

/* Spacing & Radius */
--radius-md: 8px;
--spacing-4: 1rem;
```

### Extending Components

You can customize components using the `className` prop:

```tsx
<Button className="my-custom-class">Custom Button</Button>
```

## Migration from v1.x

If upgrading from a version that used Stitches, see the [Migration Guide](./MIGRATION.md) for detailed instructions.

**Key changes in v2.0:**
- ✅ Must import `@igortullio-ui/react/styles.css`
- ✅ `@igortullio-ui/tokens` package removed (tokens now in CSS)
- ✅ Component API remains unchanged

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines.

## License

MIT
