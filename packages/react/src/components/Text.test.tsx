import { describe, it, expect } from 'vitest'
import { textStyles } from './Text'

describe('Text Component', () => {
  it('should generate base classes', () => {
    const classes = textStyles()
    expect(classes).toContain('font-default')
    expect(classes).toContain('leading-base')
    expect(classes).toContain('text-gray-100')
  })

  it('should apply default size variant (md)', () => {
    const classes = textStyles()
    expect(classes).toContain('text-md')
  })

  it('should apply size variants correctly', () => {
    expect(textStyles({ size: 'xxs' })).toContain('text-xxs')
    expect(textStyles({ size: 'xs' })).toContain('text-xs')
    expect(textStyles({ size: 'sm' })).toContain('text-sm')
    expect(textStyles({ size: 'lg' })).toContain('text-lg')
    expect(textStyles({ size: 'xl' })).toContain('text-xl')
    expect(textStyles({ size: '2xl' })).toContain('text-2xl')
    expect(textStyles({ size: '4xl' })).toContain('text-4xl')
    expect(textStyles({ size: '9xl' })).toContain('text-9xl')
  })

  it('should merge custom className', () => {
    const classes = textStyles({ className: 'custom-text' })
    expect(classes).toContain('custom-text')
  })

  it('should export variant types correctly', () => {
    expect(typeof textStyles).toBe('function')
  })
})
