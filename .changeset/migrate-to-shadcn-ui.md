---
'@igortullio-ui/react': major
---

### Breaking Changes

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
