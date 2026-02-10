/**
 * @igortullio-ui/react Styles Entry Point
 *
 * Tailwind CSS v4 is used for styling with CSS-first configuration.
 * All components use tailwind-variants (tv) for variant-based styling.
 *
 * Usage:
 * - Consumers should import '@igortullio-ui/react/styles.css' for design tokens
 *
 * @see globals.css for design token definitions
 */

// Re-export tailwind-variants for component usage
export { tv, type VariantProps } from 'tailwind-variants'

// Export CSS file path hint for documentation
export const STYLES_PATH = '@igortullio-ui/react/styles.css'
