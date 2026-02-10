import { ComponentProps, forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export const textAreaStyles = tv({
  base: [
    'bg-gray-900 py-3 px-4 rounded-sm box-border border-2 border-gray-900',
    'text-sm text-white resize-y min-h-[80px]',
    'focus:outline-none focus:border-ignite-300',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'placeholder:text-gray-400',
  ],
})

export type TextAreaVariants = VariantProps<typeof textAreaStyles>

export interface TextAreaProps
  extends ComponentProps<'textarea'>,
    TextAreaVariants {}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={textAreaStyles({ className })}
        {...props}
      />
    )
  },
)

TextArea.displayName = 'TextArea'
