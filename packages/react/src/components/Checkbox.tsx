import { Check } from 'lucide-react'
import { Checkbox as RadixCheckbox } from 'radix-ui'
import type { ComponentProps } from 'react'
import { cn } from '../lib/utils'

export interface CheckboxProps extends ComponentProps<typeof RadixCheckbox.Root> {
  className?: string
}

export function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <RadixCheckbox.Root
      className={cn(
        'w-6 h-6 bg-gray-900 rounded-xs leading-none cursor-pointer overflow-hidden box-border',
        'flex justify-center items-center border-2 border-gray-900',
        'data-[state=checked]:bg-primary-300',
        'focus:border-primary-300 data-[state=checked]:border-primary-300',
        className,
      )}
      {...props}
    >
      <RadixCheckbox.Indicator
        className={cn(
          'text-white w-4 h-4',
          'data-[state=checked]:animate-slide-in',
          'data-[state=unchecked]:animate-slide-out',
        )}
        asChild
      >
        <Check strokeWidth={3} />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  )
}

Checkbox.displayName = 'Checkbox'
