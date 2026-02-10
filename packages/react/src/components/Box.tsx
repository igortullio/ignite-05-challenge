import { ComponentProps, ElementType, forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export const boxStyles = tv({
  base: 'p-6 rounded-md bg-gray-800 border border-gray-600',
})

export type BoxVariants = VariantProps<typeof boxStyles>

export interface BoxProps extends ComponentProps<'div'>, BoxVariants {
  as?: ElementType
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ as: Component = 'div', className, ...props }, ref) => {
    return (
      <Component ref={ref} className={boxStyles({ className })} {...props} />
    )
  },
)

Box.displayName = 'Box'
