import { type ComponentProps, forwardRef } from 'react'
import { cn } from '../lib/utils'

export interface TextAreaProps extends ComponentProps<'textarea'> {}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        'bg-gray-900 py-3 px-4 rounded-sm box-border border-2 border-gray-900',
        'text-sm text-white resize-y min-h-[80px]',
        'focus:outline-none focus:border-primary-300',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'placeholder:text-gray-400',
        className,
      )}
      {...props}
    />
  )
})

TextArea.displayName = 'TextArea'
