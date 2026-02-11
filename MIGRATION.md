# Migration Guide: Stitches to Tailwind CSS v4

This guide covers the migration from Stitches (@stitches/react) to Tailwind CSS v4 with Tailwind Variants in the `@igortullio-ui/react` package.

## Overview

The library has migrated from Stitches CSS-in-JS to Tailwind CSS v4 with the following key changes:

| Before | After |
|--------|-------|
| `@stitches/react` | `tailwindcss v4` + `tailwind-variants` |
| `@igortullio-ui/tokens` package | CSS variables via `@theme inline` |
| JavaScript-based tokens | CSS-first configuration |
| No CSS import needed | **Must import `styles.css`** |

## Breaking Changes

### 1. Required CSS Import (Critical)

**Before (Stitches):**
```tsx
// Styles were bundled automatically
import { Button } from '@igortullio-ui/react'
```

**After (Tailwind v4):**
```tsx
// You MUST import the CSS file
import '@igortullio-ui/react/styles.css'
import { Button } from '@igortullio-ui/react'
```

> ⚠️ **If components appear unstyled, you're missing the CSS import!**

### 2. Tokens Package Removed

The `@igortullio-ui/tokens` package has been removed. Design tokens are now defined as CSS custom properties in the component library's CSS file.

**Before:**
```tsx
// Remove this import - package no longer exists
import { colors, fonts } from '@igortullio-ui/tokens'
```

**After:**
```css
/* Access tokens via CSS custom properties */
.my-element {
  color: var(--color-ignite-500);
  font-family: var(--font-default);
}
```

### 3. Component API (Unchanged)

The component props API remains the same. If you were using variant props, they work identically:

```tsx
// This still works exactly the same way
<Button variant="primary" size="md">Click me</Button>
<Text size="lg">Hello World</Text>
```

## Step-by-Step Migration

### Step 1: Update Dependencies

```bash
# Remove the old tokens package if installed
npm uninstall @igortullio-ui/tokens

# Update to the latest version of the react package
npm install @igortullio-ui/react@latest
```

### Step 2: Add CSS Import

Add the CSS import at the root of your application:

```tsx
// app/layout.tsx (Next.js) or main.tsx (Vite)
import '@igortullio-ui/react/styles.css'
```

### Step 3: Remove Token Imports

Search your codebase and remove any imports from `@igortullio-ui/tokens`:

```bash
# Find files using the tokens package
grep -r "@igortullio-ui/tokens" ./src
```

Replace with CSS custom properties or Tailwind utilities if needed.

### Step 4: Update Custom Styling

If you were extending Stitches styled components, update to use Tailwind classes:

**Before (Stitches):**
```tsx
import { styled } from '@stitches/react'
import { Button } from '@igortullio-ui/react'

const CustomButton = styled(Button, {
  backgroundColor: '$ignite500',
  '&:hover': {
    backgroundColor: '$ignite300',
  },
})
```

**After (Tailwind):**
```tsx
import { Button } from '@igortullio-ui/react'

function CustomButton(props) {
  return (
    <Button
      className="bg-ignite-500 hover:bg-ignite-300"
      {...props}
    />
  )
}
```

## Token Reference

### Colors

| CSS Variable | Value | Usage |
|-------------|-------|-------|
| `--color-ignite-300` | `#00b37e` | Brand light |
| `--color-ignite-500` | `#00875f` | Brand primary |
| `--color-ignite-700` | `#015f43` | Brand dark |
| `--color-ignite-900` | `#00291d` | Brand darkest |
| `--color-gray-100` | `#e1e1e6` | Text primary |
| `--color-gray-200` | `#a9a9b2` | Text secondary |
| `--color-gray-400` | `#7c7c8a` | Text muted |
| `--color-gray-500` | `#505059` | Borders |
| `--color-gray-600` | `#323238` | Backgrounds light |
| `--color-gray-700` | `#29292e` | Backgrounds |
| `--color-gray-800` | `#202024` | Backgrounds dark |
| `--color-gray-900` | `#121214` | Backgrounds darkest |

### Typography

| CSS Variable | Value |
|-------------|-------|
| `--font-default` | `'Roboto', sans-serif` |
| `--font-code` | `monospace` |
| `--font-size-xxs` | `0.625rem` |
| `--font-size-xs` | `0.75rem` |
| `--font-size-sm` | `0.875rem` |
| `--font-size-md` | `1rem` |
| `--font-size-lg` | `1.125rem` |
| `--font-size-xl` | `1.25rem` |
| `--font-size-2xl` | `1.5rem` |
| `--font-size-4xl` - `9xl` | `2rem` - `6rem` |

### Spacing & Radius

| CSS Variable | Value |
|-------------|-------|
| `--radius-xs` | `4px` |
| `--radius-sm` | `6px` |
| `--radius-md` | `8px` |
| `--radius-lg` | `16px` |
| `--radius-full` | `99999px` |
| `--spacing-1` to `--spacing-80` | `0.25rem` - `20rem` |

## Tailwind Classes Reference

With Tailwind CSS v4, you can use these utility classes that map to our design tokens:

```css
/* Colors */
.bg-ignite-500    /* Brand background */
.text-gray-100    /* Primary text */
.border-gray-600  /* Borders */

/* Typography */
.font-default     /* Roboto font */
.text-md          /* Base font size */
.leading-base     /* 160% line height */

/* Spacing */
.p-4              /* 1rem padding */
.gap-2            /* 0.5rem gap */
.rounded-md       /* 8px border radius */
```

## Troubleshooting

### Components appear unstyled

**Cause:** Missing CSS import.

**Solution:** Add the CSS import at your app's entry point:
```tsx
import '@igortullio-ui/react/styles.css'
```

### "Cannot find module '@igortullio-ui/tokens'"

**Cause:** The tokens package was removed in v2.0.

**Solution:** Remove the import and use CSS custom properties instead:
```css
color: var(--color-ignite-500);
```

### Custom styles not working

**Cause:** Stitches `styled()` API is no longer available.

**Solution:** Use the `className` prop with Tailwind classes:
```tsx
<Button className="my-custom-class">Click</Button>
```

### Dark theme not applying

**Cause:** The library uses a dark theme by default.

**Solution:** The base styles set `background-color: var(--color-gray-900)` on `:root`. Override in your CSS if needed.

### Tailwind classes not detected in your project

If you're using Tailwind in your own project and want to use our tokens:

**Solution:** Add a source directive in your CSS:
```css
@import "tailwindcss";
@source "node_modules/@igortullio-ui/react/src/**/*.tsx";
```

### Font not loading

**Cause:** Roboto font not imported.

**Solution:** Add the font to your HTML head:
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
```

## Styling Comparison

### Stitches Patterns → Tailwind Variants

**Variants:**

```tsx
// Before (Stitches)
const Button = styled('button', {
  variants: {
    variant: {
      primary: { backgroundColor: '$ignite500' },
      secondary: { backgroundColor: 'transparent' },
    },
  },
})

// After (Tailwind Variants)
const buttonStyles = tv({
  variants: {
    variant: {
      primary: 'bg-ignite-500',
      secondary: 'bg-transparent',
    },
  },
})
```

**Compound Variants:**

```tsx
// Before (Stitches)
const Button = styled('button', {
  compoundVariants: [{
    variant: 'primary',
    size: 'sm',
    css: { padding: '4px 8px' },
  }],
})

// After (Tailwind Variants)
const buttonStyles = tv({
  compoundVariants: [{
    variant: 'primary',
    size: 'sm',
    class: 'px-2 py-1',
  }],
})
```

**Slots (multi-element components):**

```tsx
// After (Tailwind Variants)
const textInputStyles = tv({
  slots: {
    container: 'flex items-center border-2',
    input: 'bg-transparent border-0 w-full',
    prefix: 'text-gray-400',
  },
})

// Usage
const { container, input, prefix } = textInputStyles()
return (
  <div className={container()}>
    <span className={prefix()}>https://</span>
    <input className={input()} />
  </div>
)
```

## Need Help?

- [GitHub Issues](https://github.com/igortullio/igortullio-ui/issues)
- [Tailwind Variants Documentation](https://www.tailwind-variants.org/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
