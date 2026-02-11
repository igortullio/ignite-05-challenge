import { type ComponentProps, type ElementType, forwardRef } from 'react'
import { cn } from '../lib/utils'

export interface BoxProps extends ComponentProps<'div'> {
  as?: ElementType
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(({ as: Component = 'div', className, ...props }, ref) => {
  return (
    <Component ref={ref} className={cn('p-6 rounded-md bg-gray-800 border border-gray-600', className)} {...props} />
  )
})

Box.displayName = 'Box'
