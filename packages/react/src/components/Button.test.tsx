import { describe, expect, it } from 'vitest'
import { buttonVariants } from './Button'

describe('Button Component', () => {
  it('should generate base classes', () => {
    const classes = buttonVariants()
    expect(classes).toContain('rounded-sm')
    expect(classes).toContain('text-sm')
    expect(classes).toContain('font-medium')
    expect(classes).toContain('flex')
    expect(classes).toContain('items-center')
    expect(classes).toContain('justify-center')
    expect(classes).toContain('cursor-pointer')
  })

  it('should apply default variant (primary)', () => {
    const classes = buttonVariants()
    expect(classes).toContain('bg-primary-500')
    expect(classes).toContain('text-white')
  })

  it('should apply default size (md)', () => {
    const classes = buttonVariants()
    expect(classes).toContain('h-[46px]')
  })

  it('should apply variant prop correctly', () => {
    expect(buttonVariants({ variant: 'primary' })).toContain('bg-primary-500')
    expect(buttonVariants({ variant: 'secondary' })).toContain('border-primary-500')
    expect(buttonVariants({ variant: 'tertiary' })).toContain('bg-transparent')
  })

  it('should apply size prop correctly', () => {
    expect(buttonVariants({ size: 'sm' })).toContain('h-[38px]')
    expect(buttonVariants({ size: 'md' })).toContain('h-[46px]')
  })

  it('should handle disabled state classes', () => {
    const classes = buttonVariants()
    expect(classes).toContain('disabled:cursor-not-allowed')
  })

  it('should merge custom className', () => {
    const classes = buttonVariants({ className: 'custom' })
    expect(classes).toContain('custom')
  })

  it('should export variant types correctly', () => {
    expect(typeof buttonVariants).toBe('function')
  })
})
