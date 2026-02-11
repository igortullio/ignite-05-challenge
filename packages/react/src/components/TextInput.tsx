import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentProps, forwardRef } from 'react'
import { cn } from '../lib/utils'

export const textInputVariants = cva(
  [
    'bg-gray-900 rounded-sm box-border border-2 border-gray-900',
    'flex items-center',
    'has-[input:focus]:border-primary-300',
    'has-[input:disabled]:opacity-50 has-[input:disabled]:cursor-not-allowed',
  ].join(' '),
  {
    variants: {
      size: {
        sm: 'py-2 px-3',
        md: 'py-3 px-4',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export type TextInputVariants = VariantProps<typeof textInputVariants>

export interface TextInputProps extends Omit<ComponentProps<'input'>, 'size'>, TextInputVariants {
  prefix?: string
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({ prefix, size, className, ...props }, ref) => {
  return (
    <div className={cn(textInputVariants({ size, className }))}>
      {!!prefix && <span className="text-sm text-gray-400">{prefix}</span>}
      <input
        ref={ref}
        className={cn(
          'text-sm text-white bg-transparent border-0 w-full',
          'focus:outline-none',
          'disabled:cursor-not-allowed',
          'placeholder:text-gray-500',
        )}
        {...props}
      />
    </div>
  )
})

TextInput.displayName = 'TextInput'
