# Contributing to igortullio-ui

Thank you for your interest in contributing to igortullio-ui! This document provides guidelines and instructions for contributing to the project.

## Development Setup

### Prerequisites

- Node.js 18+ and npm 9+
- Git

### Getting Started

```bash
# Clone the repository
git clone https://github.com/igortullio/igortullio-ui.git
cd igortullio-ui

# Install dependencies
npm install

# Start development mode
npm run dev
```

### Project Structure

```
packages/
├── react/          # Component library (published)
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── styles/       # Global CSS with design tokens
│   │   └── index.ts      # Public exports
│   └── package.json
├── docs/           # Storybook documentation
│   ├── .storybook/       # Storybook config
│   └── src/stories/      # Component stories
└── docs/           # Storybook documentation
```

## Development Workflow

### Available Commands

```bash
# Root commands (all packages)
npm run dev          # Watch mode for all packages
npm run build        # Build all packages
npm run lint         # Lint all packages

# Package-specific (from package directory)
cd packages/react
npm run test         # Run tests
npm run lint         # Run linting

cd packages/docs
npm run dev          # Start Storybook
npm run build        # Build Storybook
```

### Making Changes

1. Create a feature branch from `main`
2. Make your changes following the coding standards below
3. Write/update tests as needed
4. Run `npm run lint` and `npm run test`
5. Create a changeset: `npm run changeset`
6. Submit a pull request

## Styling Guidelines

### Tailwind CSS v4

This project uses Tailwind CSS v4 with a CSS-first configuration. All design tokens are defined in `packages/react/src/styles/globals.css`.

### Design Tokens

Tokens are defined using the `@theme inline` directive:

```css
@theme inline {
  --color-ignite-500: #00875f;
  --font-default: 'Roboto', sans-serif;
  --radius-md: 8px;
}
```

**Token namespaces:**
- `--color-*` - Color tokens → `bg-*`, `text-*`, `border-*`
- `--font-*` - Font family → `font-*`
- `--font-size-*` - Font sizes → `text-*`
- `--radius-*` - Border radius → `rounded-*`
- `--spacing-*` - Spacing scale → `p-*`, `m-*`, `gap-*`

### Tailwind Variants

All component styling uses [Tailwind Variants](https://www.tailwind-variants.org/). This provides a Stitches-like API for defining component variants.

#### Basic Component Pattern

```typescript
import { tv, type VariantProps } from 'tailwind-variants'
import { ComponentProps, forwardRef } from 'react'

// 1. Define styles with tv()
export const buttonStyles = tv({
  base: 'rounded-md font-medium transition-colors',
  variants: {
    variant: {
      primary: 'bg-ignite-500 text-white hover:bg-ignite-300',
      secondary: 'bg-transparent border-2 border-ignite-500',
    },
    size: {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-4 text-base',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

// 2. Export variant types
export type ButtonVariants = VariantProps<typeof buttonStyles>

// 3. Define component props
export interface ButtonProps extends ComponentProps<'button'>, ButtonVariants {}

// 4. Create component with forwardRef
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonStyles({ variant, size, className })}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'
```

#### Slots Pattern (Multi-element Components)

For components with multiple styled elements, use the `slots` API:

```typescript
export const textInputStyles = tv({
  slots: {
    container: 'flex items-center border-2 rounded-sm',
    input: 'bg-transparent border-0 w-full focus:outline-none',
    prefix: 'text-gray-400 text-sm',
  },
  variants: {
    size: {
      sm: {
        container: 'py-2 px-3',
      },
      md: {
        container: 'py-3 px-4',
      },
    },
  },
})

// Usage in component
function TextInput({ size, ...props }) {
  const { container, input, prefix } = textInputStyles({ size })

  return (
    <div className={container()}>
      <span className={prefix()}>https://</span>
      <input className={input()} {...props} />
    </div>
  )
}
```

#### Compound Variants

For styles that depend on multiple variant combinations:

```typescript
const buttonStyles = tv({
  variants: {
    variant: {
      primary: 'bg-ignite-500',
      secondary: 'bg-transparent',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      disabled: true,
      class: 'bg-gray-200',
    },
  ],
})
```

### Component File Organization

**Simple components** (single element):
```
components/
├── Button.tsx       # Styles + component in one file
├── Text.tsx
└── Box.tsx
```

**Complex components** (multiple elements or Radix integration):
```
components/
├── Avatar/
│   ├── index.tsx    # Component implementation
│   └── styles.ts    # Tailwind Variants styles
├── Checkbox/
│   ├── index.tsx
│   └── styles.ts
└── TextInput/
    ├── index.tsx
    └── styles.ts
```

### Styling Best Practices

1. **Use design tokens**: Always use theme variables (`bg-ignite-500`) instead of arbitrary values (`bg-[#00875f]`)

2. **Prefer Tailwind utilities**: Use built-in utilities over custom CSS when possible

3. **Support className prop**: Always merge the `className` prop with component styles:
   ```typescript
   buttonStyles({ variant, size, className })
   ```

4. **Use array syntax for readability**: Group related classes:
   ```typescript
   base: [
     'rounded-md font-medium',      // Base appearance
     'flex items-center gap-2',     // Layout
     'transition-colors',           // Interactions
   ],
   ```

5. **Handle states properly**: Use Tailwind modifiers:
   ```typescript
   'enabled:hover:bg-ignite-300',
   'disabled:opacity-50 disabled:cursor-not-allowed',
   'focus:ring-2 focus:ring-ignite-500',
   ```

6. **Use CSS nesting for complex selectors**:
   ```typescript
   '[&_svg]:w-4 [&_svg]:h-4',           // SVG children
   'has-[input:focus]:border-ignite-300', // Parent of focused input
   ```

## Component Guidelines

### Accessibility

- Use semantic HTML elements
- Support keyboard navigation
- Include proper ARIA attributes
- Use Radix UI primitives for complex interactive components

### Props

- Extend native element props (`ComponentProps<'button'>`)
- Use `forwardRef` for ref forwarding
- Set `displayName` for debugging
- Support polymorphic `as` prop where appropriate

### TypeScript

- Export prop types for consumers
- Use `VariantProps` for variant types
- Avoid `any` types

## Testing

### Running Tests

```bash
cd packages/react
npm run test        # Run once
npm run test:watch  # Watch mode
```

### Writing Tests

Tests use Vitest. Place test files next to components:

```
components/
├── Button.tsx
├── Button.test.tsx
```

## Documentation

### Storybook

Each component should have a story in `packages/docs/src/stories/`:

```typescript
import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@igortullio-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Click me',
    variant: 'primary',
  },
}
```

### Running Storybook

```bash
cd packages/docs
npm run dev
```

## Release Process

This project uses [Changesets](https://github.com/changesets/changesets) for versioning.

### Creating a Changeset

After making changes:

```bash
npm run changeset
```

Follow the prompts to describe your changes and select the appropriate version bump:

- `patch` - Bug fixes, documentation
- `minor` - New features (backwards compatible)
- `major` - Breaking changes

### Version Types

- **Major**: Breaking API changes, removed features
- **Minor**: New components, new variants, new props
- **Patch**: Bug fixes, style adjustments, documentation

## Code Review

Pull requests should:

- [ ] Follow the styling guidelines above
- [ ] Include tests for new functionality
- [ ] Update Storybook documentation
- [ ] Include a changeset
- [ ] Pass all CI checks (lint, test, build)

## Questions?

- Open an [issue](https://github.com/igortullio/igortullio-ui/issues)
- Check existing documentation in [Storybook](https://igortullio.github.io/igortullio-ui/)
