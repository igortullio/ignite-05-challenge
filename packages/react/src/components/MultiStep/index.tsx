import { CSSProperties } from 'react'
import { multiStepStyles, stepStyles } from './styles'

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
