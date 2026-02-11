import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentProps, type ElementType, forwardRef } from 'react'
import { cn } from '../lib/utils'

export const headingVariants = cva('leading-shorter m-0 text-gray-100', {
  variants: {
    size: {
      sm: 'text-xl',
      md: 'text-2xl',
      lg: 'text-4xl',
      xl: 'text-5xl',
      '2xl': 'text-6xl',
      '3xl': 'text-7xl',
      '4xl': 'text-8xl',
      '5xl': 'text-9xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type HeadingVariants = VariantProps<typeof headingVariants>

export interface HeadingProps extends ComponentProps<'h2'>, HeadingVariants {
  as?: ElementType
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Component = 'h2', size, className, ...props }, ref) => {
    return <Component ref={ref} className={cn(headingVariants({ size, className }))} {...props} />
  },
)

Heading.displayName = 'Heading'
