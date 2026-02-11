import { describe, expect, it } from 'vitest'
import { textVariants } from './Text'

describe('Text Component', () => {
  it('should generate base classes', () => {
    const classes = textVariants()
    expect(classes).toContain('leading-base')
    expect(classes).toContain('text-gray-100')
  })

  it('should apply default size variant (md)', () => {
    const classes = textVariants()
    expect(classes).toContain('text-base')
  })

  it('should apply size variants correctly', () => {
    expect(textVariants({ size: 'xxs' })).toContain('text-xxs')
    expect(textVariants({ size: 'xs' })).toContain('text-xs')
    expect(textVariants({ size: 'sm' })).toContain('text-sm')
    expect(textVariants({ size: 'lg' })).toContain('text-lg')
    expect(textVariants({ size: 'xl' })).toContain('text-xl')
    expect(textVariants({ size: '2xl' })).toContain('text-2xl')
    expect(textVariants({ size: '4xl' })).toContain('text-4xl')
    expect(textVariants({ size: '9xl' })).toContain('text-9xl')
  })

  it('should merge custom className', () => {
    const classes = textVariants({ className: 'custom-text' })
    expect(classes).toContain('custom-text')
  })

  it('should export variant types correctly', () => {
    expect(typeof textVariants).toBe('function')
  })
})
