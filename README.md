# igortullio-ui

A React Design System with components and interactive Storybook documentation. Published on npm as [`@igortullio-ui/react`](https://www.npmjs.com/package/@igortullio-ui/react).

> Built as part of [Rocketseat Ignite](https://www.rocketseat.com.br/ignite) course.

## Demo

[Storybook](https://igortullio.github.io/igortullio-ui/?path=/story/home--page)

## Packages

| Package | Description |
|---------|-------------|
| `@igortullio-ui/react` | React components (Avatar, Box, Button, Checkbox, Heading, MultiStep, Text, TextArea, TextInput) |
| `@igortullio-ui/eslint-config` | Shared ESLint configuration |
| `@igortullio-ui/ts-config` | Shared TypeScript configuration |
| `docs` | Storybook documentation |

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Tailwind Variants](https://www.tailwind-variants.org/)
- [Radix UI](https://www.radix-ui.com/)
- [Storybook](https://storybook.js.org/)
- [Changesets](https://github.com/changesets/changesets) for versioning
- [tsup](https://tsup.egoist.dev/) for bundling

## Getting Started

```bash
git clone https://github.com/igortullio/igortullio-ui.git
cd igortullio-ui
npm install
npm run dev
```

## Usage

Install the package:

```bash
npm install @igortullio-ui/react
```

Import styles and components:

```tsx
// Import the styles (required for components to work)
import '@igortullio-ui/react/styles.css'

// Import components
import { Button, Text, Box } from '@igortullio-ui/react'

function App() {
  return (
    <Box>
      <Text>Hello World</Text>
      <Button>Click me</Button>
    </Box>
  )
}
```
