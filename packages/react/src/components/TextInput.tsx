import { ComponentProps, forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export const textInputStyles = tv({
  slots: {
    container: [
      'bg-gray-900 rounded-sm box-border border-2 border-gray-900',
      'flex items-center',
      'has-[input:focus]:border-ignite-300',
      'has-[input:disabled]:opacity-50 has-[input:disabled]:cursor-not-allowed',
    ],
    prefix: 'text-sm text-gray-400',
    input: [
      'text-sm text-white bg-transparent border-0 w-full',
      'focus:outline-none',
      'disabled:cursor-not-allowed',
      'placeholder:text-gray-500',
    ],
  },
  variants: {
    size: {
      sm: {
        container: 'py-2 px-3',
      },
      md: {
        container: 'py-3 px-4',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type TextInputVariants = VariantProps<typeof textInputStyles>

export interface TextInputProps
  extends Omit<ComponentProps<'input'>, 'size'>,
    TextInputVariants {
  prefix?: string
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ prefix, size, className, ...props }, ref) => {
    const { container, prefix: prefixClass, input } = textInputStyles({ size })

    return (
      <div className={container({ className })}>
        {!!prefix && <span className={prefixClass()}>{prefix}</span>}
        <input ref={ref} className={input()} {...props} />
      </div>
    )
  },
)

TextInput.displayName = 'TextInput'
