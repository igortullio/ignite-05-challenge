import { describe, it, expect } from 'vitest'
import { multiStepStyles, stepStyles } from './MultiStep'

describe('MultiStep Component', () => {
  it('should have callable container slot', () => {
    const { container } = multiStepStyles()
    // Container is an empty slot by design
    expect(typeof container).toBe('function')
    // Empty slots return undefined in tailwind-variants
    expect(container()).toBeUndefined()
  })

  it('should generate label classes', () => {
    const { label } = multiStepStyles()
    const classes = label()
    expect(classes).toContain('text-gray-200')
    expect(classes).toContain('text-xs')
  })

  it('should generate steps container classes', () => {
    const { steps } = multiStepStyles()
    const classes = steps()
    expect(classes).toContain('grid')
    expect(classes).toContain('grid-cols-steps')
    expect(classes).toContain('gap-2')
    expect(classes).toContain('mt-1')
  })

  it('should generate step base classes', () => {
    const classes = stepStyles()
    expect(classes).toContain('h-1')
    expect(classes).toContain('rounded-px')
    expect(classes).toContain('bg-gray-600')
  })

  it('should apply active variant correctly', () => {
    const inactive = stepStyles({ active: false })
    expect(inactive).toContain('bg-gray-600')
    expect(inactive).not.toContain('bg-gray-100')

    const active = stepStyles({ active: true })
    expect(active).toContain('bg-gray-100')
  })

  it('should merge custom className', () => {
    const multiStep = multiStepStyles()
    expect(multiStep.container({ className: 'custom' })).toContain('custom')
  })

  it('should export variant types correctly', () => {
    expect(typeof multiStepStyles).toBe('function')
    expect(typeof stepStyles).toBe('function')
  })
})
