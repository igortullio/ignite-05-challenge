import { CSSProperties } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export const multiStepStyles = tv({
  slots: {
    container: '',
    label: 'font-default leading-base m-0 text-gray-200 text-xs',
    steps: 'grid grid-cols-steps gap-2 mt-1',
    step: 'h-1 rounded-px bg-gray-600',
  },
})

export const stepStyles = tv({
  base: 'h-1 rounded-px bg-gray-600',
  variants: {
    active: {
      true: 'bg-gray-100',
    },
  },
})

export type StepVariants = VariantProps<typeof stepStyles>

export interface MultiStepProps {
  size: number
  currentStep?: number
  className?: string
}

export function MultiStep({
  size,
  currentStep = 1,
  className,
}: MultiStepProps) {
  const { container, label, steps } = multiStepStyles()

  return (
    <div className={container({ className })}>
      <span className={label()}>
        Passo {currentStep} de {size}
      </span>

      <div
        className={steps()}
        style={{ '--steps-size': size } as CSSProperties}
      >
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return (
            <div
              key={step}
              className={stepStyles({ active: currentStep >= step })}
            />
          )
        })}
      </div>
    </div>
  )
}

MultiStep.displayName = 'MultiStep'
