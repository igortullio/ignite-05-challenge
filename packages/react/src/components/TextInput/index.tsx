import { ComponentProps, forwardRef } from 'react'
import { textInputStyles, type TextInputVariants } from './styles'

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
