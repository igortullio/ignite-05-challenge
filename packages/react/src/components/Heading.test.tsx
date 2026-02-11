import { describe, it, expect } from 'vitest'
import { headingStyles } from './Heading'

describe('Heading Component', () => {
  it('should generate base classes', () => {
    const classes = headingStyles()
    expect(classes).toContain('font-default')
    expect(classes).toContain('leading-shorter')
    expect(classes).toContain('text-gray-100')
  })

  it('should apply default size variant (md)', () => {
    const classes = headingStyles()
    expect(classes).toContain('text-2xl')
  })

  it('should apply size variants correctly', () => {
    expect(headingStyles({ size: 'sm' })).toContain('text-xl')
    expect(headingStyles({ size: 'md' })).toContain('text-2xl')
    expect(headingStyles({ size: 'lg' })).toContain('text-4xl')
    expect(headingStyles({ size: 'xl' })).toContain('text-5xl')
    expect(headingStyles({ size: '2xl' })).toContain('text-6xl')
    expect(headingStyles({ size: '3xl' })).toContain('text-7xl')
    expect(headingStyles({ size: '4xl' })).toContain('text-8xl')
    expect(headingStyles({ size: '5xl' })).toContain('text-9xl')
  })

  it('should merge custom className', () => {
    const classes = headingStyles({ className: 'custom' })
    expect(classes).toContain('custom')
  })

  it('should export variant types correctly', () => {
    expect(typeof headingStyles).toBe('function')
  })
})
