import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

export const checkboxStyles = tv({
  slots: {
    container: [
      'w-6 h-6 bg-gray-900 rounded-xs leading-none cursor-pointer overflow-hidden box-border',
      'flex justify-center items-center border-2 border-gray-900',
      'data-[state=checked]:bg-primary-300',
      'focus:border-primary-300 data-[state=checked]:border-primary-300',
    ],
    indicator: [
      'text-white w-4 h-4',
      'data-[state=checked]:animate-slide-in',
      'data-[state=unchecked]:animate-slide-out',
    ],
  },
})

export interface CheckboxProps
  extends ComponentProps<typeof RadixCheckbox.Root> {
  className?: string
}

export function Checkbox({ className, ...props }: CheckboxProps) {
  const { container, indicator } = checkboxStyles()

  return (
    <RadixCheckbox.Root className={container({ className })} {...props}>
      <RadixCheckbox.Indicator className={indicator()} asChild>
        <Check weight="bold" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  )
}

Checkbox.displayName = 'Checkbox'
