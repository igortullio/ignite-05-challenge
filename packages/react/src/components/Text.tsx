import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentProps, type ElementType, forwardRef } from 'react'
import { cn } from '../lib/utils'

export const textVariants = cva('leading-base m-0 text-gray-100', {
  variants: {
    size: {
      xxs: 'text-xxs',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type TextVariants = VariantProps<typeof textVariants>

export interface TextProps extends ComponentProps<'p'>, TextVariants {
  as?: ElementType
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ as: Component = 'p', size, className, ...props }, ref) => {
    return <Component ref={ref} className={cn(textVariants({ size, className }))} {...props} />
  },
)

Text.displayName = 'Text'
