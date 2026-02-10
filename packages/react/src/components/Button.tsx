import { ComponentProps, ElementType, forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export const buttonStyles = tv({
  base: [
    'rounded-sm text-sm font-medium font-default text-center min-w-[120px] box-border px-4',
    'flex items-center justify-center gap-2 cursor-pointer',
    '[&_svg]:w-4 [&_svg]:h-4',
    'disabled:cursor-not-allowed',
    'focus:shadow-[0_0_0_2px_var(--color-gray-100)]',
  ],
  variants: {
    variant: {
      primary: [
        'text-white bg-ignite-500',
        'enabled:hover:bg-ignite-300',
        'disabled:bg-gray-200',
      ],
      secondary: [
        'text-ignite-300 bg-transparent border-2 border-ignite-500',
        'enabled:hover:bg-ignite-500 enabled:hover:text-white',
        'disabled:text-gray-200 disabled:border-gray-200',
      ],
      tertiary: [
        'text-gray-100 bg-transparent',
        'enabled:hover:text-white',
        'disabled:text-gray-600',
      ],
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
})

export type ButtonVariants = VariantProps<typeof buttonStyles>

export interface ButtonProps extends ComponentProps<'button'>, ButtonVariants {
  as?: ElementType
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ as: Component = 'button', variant, size, className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={buttonStyles({ variant, size, className })}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'
