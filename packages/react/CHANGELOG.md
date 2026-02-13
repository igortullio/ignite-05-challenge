# @igortullio-ui/react

## 3.3.1

### Patch Changes

- b2f14c3: move scroll-behavior and reduced-motion styles out of @layer base

## 3.3.0

### Minor Changes

- bd1088d: add Poppins heading font and improve base styles

## 3.2.2

### Patch Changes

- f7e32e9: add style export condition for source.css

## 3.2.1

### Patch Changes

- 6f06af8: skip auto changeset when PR is already merged
- 8fb1870: remove duplicate git tag step from release workflow

## 3.2.0

### Minor Changes

- 289ac7e: add Storybook documentation package with CI tests
- b36fb0c: add Storybook stories and improve design tokens

## 3.1.0

### Minor Changes

- 287c64a: add auto changeset generation from PR titles

## 3.0.3

### Patch Changes

- 9a4d597: ci: test trusted publishers with OIDC provenance

## 3.0.2

### Patch Changes

- 975cc90: fix: add require shim for ESM output to resolve dynamic require errors in Vite/browser environments

## 4.0.0

### Major Changes

- 0a8e695: ### Breaking Changes

  - Migrate from Stitches to Tailwind CSS v4 with shadcn/ui components
  - Remove all custom components (Button, Heading, Text, TextInput, TextArea, Checkbox, Avatar, MultiStep, Tooltip, Box)
  - Replace with 23 shadcn/ui components: accordion, alert, alert-dialog, avatar, badge, button, card, checkbox, dialog, dropdown-menu, input, label, popover, progress, radio-group, select, separator, skeleton, switch, table, tabs, textarea, tooltip
  - Remove `@igortullio-ui/tokens` package — design tokens are now CSS custom properties in oklch format
  - Consumers must import `@igortullio-ui/react/styles.css` for styles to work
  - Replace ESLint with Biome for linting and formatting

  ### Features

  - shadcn/ui components built on Radix UI primitives
  - Tailwind CSS v4 with `@theme inline` directive and CSS-first configuration
  - `cn()` utility (clsx + tailwind-merge) for class merging
  - `cva()` (class-variance-authority) for component variant definitions
  - Customizable theme via CSS custom properties (oklch colors)
  - Automatic dark mode support via `.dark` class
  - Roboto font included via `@fontsource-variable/roboto`

## 3.0.0

### Major Changes

- Migrate from Stitches to Tailwind CSS v4 with shadcn/ui components
- Remove all custom components (Button, Heading, Text, TextInput, TextArea, Checkbox, Avatar, MultiStep, Tooltip, Box)
- Replace with 23 shadcn/ui components: accordion, alert, alert-dialog, avatar, badge, button, card, checkbox, dialog, dropdown-menu, input, label, popover, progress, radio-group, select, separator, skeleton, switch, table, tabs, textarea, tooltip
- Remove `@igortullio-ui/tokens` package — design tokens are now CSS custom properties in oklch format
- Consumers must import `@igortullio-ui/react/styles.css` for styles to work
- Replace ESLint with Biome for linting and formatting

### Features

- shadcn/ui components built on Radix UI primitives
- Tailwind CSS v4 with `@theme inline` directive and CSS-first configuration
- `cn()` utility (clsx + tailwind-merge) for class merging
- `cva()` (class-variance-authority) for component variant definitions
- Customizable theme via CSS custom properties (oklch colors)
- Automatic dark mode support via `.dark` class
- Roboto font included via `@fontsource-variable/roboto`

## 2.0.9

### Patch Changes

- 639a5e8: Fix to deploy

## 2.0.7

### Patch Changes

- dc56dcb: Test export

## 2.0.6

### Patch Changes

- 8474e11: Update stitches exports

## 2.0.5

### Patch Changes

- 3b55639: Update npmignore

## 2.0.4

### Patch Changes

- f798bb2: Add npm ignore

## 2.0.3

### Patch Changes

- 311af2f: Update stitches exports

## 2.0.2

### Patch Changes

- 48f8527: Update stitches exports

## 2.0.1

### Patch Changes

- Update to publish

## 2.0.0

### Major Changes

- Fix publish

## 1.0.2

### Patch Changes

- Add workflows
