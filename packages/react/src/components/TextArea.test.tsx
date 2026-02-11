import { describe, it, expect } from 'vitest'
import { textAreaStyles } from './TextArea'

describe('TextArea Component', () => {
  it('should generate base classes', () => {
    const classes = textAreaStyles()
    expect(classes).toContain('bg-gray-900')
    expect(classes).toContain('rounded-sm')
    expect(classes).toContain('border-2')
    expect(classes).toContain('text-sm')
    expect(classes).toContain('text-white')
    expect(classes).toContain('resize-y')
    expect(classes).toContain('min-h-[80px]')
  })

  it('should have focus state classes', () => {
    const classes = textAreaStyles()
    expect(classes).toContain('focus:outline-none')
    expect(classes).toContain('focus:border-primary-300')
  })

  it('should have disabled state classes', () => {
    const classes = textAreaStyles()
    expect(classes).toContain('disabled:opacity-50')
    expect(classes).toContain('disabled:cursor-not-allowed')
  })

  it('should have placeholder classes', () => {
    const classes = textAreaStyles()
    expect(classes).toContain('placeholder:text-gray-400')
  })

  it('should merge custom className', () => {
    const classes = textAreaStyles({ className: 'custom' })
    expect(classes).toContain('custom')
  })

  it('should export variant types correctly', () => {
    expect(typeof textAreaStyles).toBe('function')
  })
})
