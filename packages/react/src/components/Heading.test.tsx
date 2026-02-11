import { describe, expect, it } from 'vitest'
import { headingVariants } from './Heading'

describe('Heading Component', () => {
  it('should generate base classes', () => {
    const classes = headingVariants()
    expect(classes).toContain('leading-shorter')
    expect(classes).toContain('text-gray-100')
  })

  it('should apply default size variant (md)', () => {
    const classes = headingVariants()
    expect(classes).toContain('text-2xl')
  })

  it('should apply size variants correctly', () => {
    expect(headingVariants({ size: 'sm' })).toContain('text-xl')
    expect(headingVariants({ size: 'md' })).toContain('text-2xl')
    expect(headingVariants({ size: 'lg' })).toContain('text-4xl')
    expect(headingVariants({ size: 'xl' })).toContain('text-5xl')
    expect(headingVariants({ size: '2xl' })).toContain('text-6xl')
    expect(headingVariants({ size: '3xl' })).toContain('text-7xl')
    expect(headingVariants({ size: '4xl' })).toContain('text-8xl')
    expect(headingVariants({ size: '5xl' })).toContain('text-9xl')
  })

  it('should merge custom className', () => {
    const classes = headingVariants({ className: 'custom' })
    expect(classes).toContain('custom')
  })

  it('should export variant types correctly', () => {
    expect(typeof headingVariants).toBe('function')
  })
})
