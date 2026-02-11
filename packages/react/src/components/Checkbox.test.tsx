import { describe, it, expect } from 'vitest'
import { checkboxStyles } from './Checkbox'

describe('Checkbox Component', () => {
  it('should generate container classes', () => {
    const { container } = checkboxStyles()
    const classes = container()
    expect(classes).toContain('w-6')
    expect(classes).toContain('h-6')
    expect(classes).toContain('bg-gray-900')
    expect(classes).toContain('rounded-xs')
    expect(classes).toContain('cursor-pointer')
    expect(classes).toContain('flex')
    expect(classes).toContain('justify-center')
    expect(classes).toContain('items-center')
    expect(classes).toContain('border-2')
  })

  it('should have checked state classes', () => {
    const { container } = checkboxStyles()
    const classes = container()
    expect(classes).toContain('data-[state=checked]:bg-primary-300')
    expect(classes).toContain('data-[state=checked]:border-primary-300')
  })

  it('should generate indicator classes', () => {
    const { indicator } = checkboxStyles()
    const classes = indicator()
    expect(classes).toContain('text-white')
    expect(classes).toContain('w-4')
    expect(classes).toContain('h-4')
  })

  it('should have animation classes', () => {
    const { indicator } = checkboxStyles()
    const classes = indicator()
    expect(classes).toContain('data-[state=checked]:animate-slide-in')
    expect(classes).toContain('data-[state=unchecked]:animate-slide-out')
  })

  it('should merge custom className', () => {
    const checkbox = checkboxStyles()
    expect(checkbox.container({ className: 'custom' })).toContain('custom')
  })

  it('should export variant types correctly', () => {
    expect(typeof checkboxStyles).toBe('function')
  })
})
