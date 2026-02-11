import { describe, it, expect } from 'vitest'
import { buttonStyles } from './Button'

describe('Button Component', () => {
  it('should generate base classes', () => {
    const classes = buttonStyles()
    expect(classes).toContain('rounded-sm')
    expect(classes).toContain('text-sm')
    expect(classes).toContain('font-medium')
    expect(classes).toContain('flex')
    expect(classes).toContain('items-center')
    expect(classes).toContain('justify-center')
    expect(classes).toContain('cursor-pointer')
  })

  it('should apply default variant (primary)', () => {
    const classes = buttonStyles()
    expect(classes).toContain('bg-primary-500')
    expect(classes).toContain('text-white')
  })

  it('should apply default size (md)', () => {
    const classes = buttonStyles()
    expect(classes).toContain('h-[46px]')
  })

  it('should apply variant prop correctly', () => {
    expect(buttonStyles({ variant: 'primary' })).toContain('bg-primary-500')
    expect(buttonStyles({ variant: 'secondary' })).toContain(
      'border-primary-500',
    )
    expect(buttonStyles({ variant: 'tertiary' })).toContain('bg-transparent')
  })

  it('should apply size prop correctly', () => {
    expect(buttonStyles({ size: 'sm' })).toContain('h-[38px]')
    expect(buttonStyles({ size: 'md' })).toContain('h-[46px]')
  })

  it('should handle disabled state classes', () => {
    const classes = buttonStyles()
    expect(classes).toContain('disabled:cursor-not-allowed')
  })

  it('should merge custom className', () => {
    const classes = buttonStyles({ className: 'custom' })
    expect(classes).toContain('custom')
  })

  it('should export variant types correctly', () => {
    expect(typeof buttonStyles).toBe('function')
  })
})
