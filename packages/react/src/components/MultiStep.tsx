import type { CSSProperties } from 'react'
import { cn } from '../lib/utils'

export interface MultiStepProps {
  size: number
  currentStep?: number
  className?: string
}

export function MultiStep({ size, currentStep = 1, className }: MultiStepProps) {
  return (
    <div className={cn(className)}>
      <span className="leading-base m-0 text-gray-200 text-xs">
        Passo {currentStep} de {size}
      </span>

      <div className="grid grid-cols-steps gap-2 mt-1" style={{ '--steps-size': size } as CSSProperties}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <div key={step} className={cn('h-1 rounded-px bg-gray-600', currentStep >= step && 'bg-gray-100')} />
        })}
      </div>
    </div>
  )
}

MultiStep.displayName = 'MultiStep'
