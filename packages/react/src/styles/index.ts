/**
 * @igortullio-ui/react Styles Entry Point
 *
 * This file replaces the old Stitches configuration.
 * Tailwind CSS v4 is now used for styling with CSS-first configuration.
 *
 * Migration notes:
 * - Design tokens are now defined in globals.css using @theme inline
 * - Components use tailwind-variants (tv) for variant-based styling
 * - Consumers should import '@igortullio-ui/react/styles.css' for tokens
 *
 * @see globals.css for design token definitions
 */

import React, { ComponentType, forwardRef } from 'react'

// Re-export tailwind-variants for component usage
export { tv, type VariantProps } from 'tailwind-variants'

// Export CSS file path hint for documentation
export const STYLES_PATH = '@igortullio-ui/react/styles.css'

/**
 * DEPRECATED: Stitches compatibility stubs
 *
 * These stubs exist only to allow compilation during the migration period.
 * Components will be migrated to use tailwind-variants (tv) in the next task.
 *
 * @deprecated Use tailwind-variants (tv) instead. These stubs will be removed
 * after all components are migrated.
 */

/**
 * Stitches-compatible styled component type
 * Accepts base element props plus any additional props (for variants support)
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StyledComponent<P = any> = React.ForwardRefExoticComponent<
  P & React.RefAttributes<unknown> & { css?: unknown } & Record<string, unknown>
>

/**
 * @deprecated Use tailwind-variants (tv) instead
 * This is a temporary stub that wraps a component or creates a basic element.
 * Components using this stub need to be migrated to tailwind-variants.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function styled<
  T extends keyof JSX.IntrinsicElements | ComponentType<any>,
>(
  element: T,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _styles?: Record<string, unknown>,
): StyledComponent<
  T extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[T]
    : T extends ComponentType<infer P>
    ? P
    : unknown
> {
  if (process.env.NODE_ENV === 'development') {
    console.warn(
      `[DEPRECATED] styled() is deprecated. Migrate to tailwind-variants (tv).`,
    )
  }

  // If element is a React component, return a wrapper that passes props through
  if (typeof element !== 'string') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const WrappedComponent = forwardRef<any, any>((props, ref) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { css: _css, ...rest } = props
      return React.createElement(element, { ...rest, ref })
    })
    WrappedComponent.displayName = `Styled(${
      (element as ComponentType).displayName || 'Component'
    })`
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return WrappedComponent as any
  }

  // For intrinsic elements (strings like 'div', 'span', etc.)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = forwardRef<any, any>((props, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { css: _css, ...rest } = props
    return React.createElement(element, { ...rest, ref })
  })
  Component.displayName = `Styled(${element})`
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Component as any
}

/**
 * @deprecated Use tailwind-variants (tv) instead
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function css(_styles: Record<string, unknown>): string {
  if (process.env.NODE_ENV === 'development') {
    console.warn(
      `[DEPRECATED] css() is deprecated. Migrate to tailwind-variants (tv).`,
    )
  }
  return ''
}

/**
 * @deprecated Use globals.css instead
 */
export function globalCss(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _styles: Record<string, unknown>,
): () => void {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return () => {}
}

/**
 * @deprecated Use CSS animations or tailwind-variants instead
 */
export function keyframes(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _animation: Record<string, unknown>,
): string {
  return ''
}

/**
 * @deprecated No longer needed with Tailwind CSS
 */
export function getCssText(): string {
  return ''
}

/**
 * @deprecated Use CSS variables from globals.css instead
 */
export const theme = {} as const

/**
 * @deprecated Use CSS variables from globals.css instead
 */
export function createTheme(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _theme: Record<string, unknown>,
): string {
  return ''
}

/**
 * @deprecated No longer needed with Tailwind CSS
 */
export const config = {} as const

/**
 * @deprecated No longer needed with Tailwind CSS
 */
// eslint-disable-next-line @typescript-eslint/no-empty-function
export function reset(): void {}

/**
 * @deprecated No longer needed with Tailwind CSS
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function prefix(_value: string): string {
  return ''
}
