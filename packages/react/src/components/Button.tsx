import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentProps, type ElementType, forwardRef } from 'react'
import { cn } from '../lib/utils'

export const buttonVariants = cva(
  [
    'rounded-sm text-sm font-medium text-center min-w-[120px] box-border px-4',
    'flex items-center justify-center gap-2 cursor-pointer',
    '[&_svg]:w-4 [&_svg]:h-4',
    'disabled:cursor-not-allowed',
    'focus:shadow-[0_0_0_2px_var(--color-gray-100)]',
  ].join(' '),
  {
    variants: {
      variant: {
        primary: ['text-white bg-primary-500', 'enabled:hover:bg-primary-300', 'disabled:bg-gray-200'].join(' '),
        secondary: [
          'text-primary-300 bg-transparent border-2 border-primary-500',
          'enabled:hover:bg-primary-500 enabled:hover:text-white',
          'disabled:text-gray-200 disabled:border-gray-200',
        ].join(' '),
        tertiary: ['text-gray-100 bg-transparent', 'enabled:hover:text-white', 'disabled:text-gray-600'].join(' '),
      },
      size: {
        sm: 'h-[38px]',
        md: 'h-[46px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>

export interface ButtonProps extends ComponentProps<'button'>, ButtonVariants {
  as?: ElementType
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ as: Component = 'button', variant, size, className, ...props }, ref) => {
    return <Component ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
  },
)

Button.displayName = 'Button'
