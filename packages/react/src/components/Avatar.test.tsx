import { describe, it, expect } from 'vitest'
import { avatarStyles } from './Avatar'

describe('Avatar Component', () => {
  it('should generate container classes', () => {
    const { container } = avatarStyles()
    const classes = container()
    expect(classes).toContain('rounded-full')
    expect(classes).toContain('inline-block')
    expect(classes).toContain('w-16')
    expect(classes).toContain('h-16')
    expect(classes).toContain('overflow-hidden')
  })

  it('should generate image classes', () => {
    const { image } = avatarStyles()
    const classes = image()
    expect(classes).toContain('w-full')
    expect(classes).toContain('h-full')
    expect(classes).toContain('object-cover')
  })

  it('should generate fallback classes', () => {
    const { fallback } = avatarStyles()
    const classes = fallback()
    expect(classes).toContain('w-full')
    expect(classes).toContain('h-full')
    expect(classes).toContain('flex')
    expect(classes).toContain('items-center')
    expect(classes).toContain('justify-center')
    expect(classes).toContain('bg-gray-600')
    expect(classes).toContain('text-gray-800')
  })

  it('should merge custom className', () => {
    const avatar = avatarStyles()
    expect(avatar.container({ className: 'custom' })).toContain('custom')
  })

  it('should export variant types correctly', () => {
    expect(typeof avatarStyles).toBe('function')
  })
})
