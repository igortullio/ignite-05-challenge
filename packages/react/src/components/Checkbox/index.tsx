import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'
import { checkboxStyles } from './styles'

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
