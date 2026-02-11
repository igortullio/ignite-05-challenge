import { describe, it, expect } from 'vitest'
import { boxStyles } from './Box'

describe('Box Component', () => {
  it('should generate base classes', () => {
    const classes = boxStyles()
    expect(classes).toContain('p-6')
    expect(classes).toContain('rounded-md')
    expect(classes).toContain('bg-gray-800')
    expect(classes).toContain('border')
    expect(classes).toContain('border-gray-600')
  })

  it('should merge custom className', () => {
    const classes = boxStyles({ className: 'custom-class' })
    expect(classes).toContain('custom-class')
  })

  it('should export variant types correctly', () => {
    expect(typeof boxStyles).toBe('function')
  })
})
