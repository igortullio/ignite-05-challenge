import { describe, it, expect } from 'vitest'
import { textInputStyles } from './TextInput'

describe('TextInput Component', () => {
  it('should generate container classes', () => {
    const { container } = textInputStyles()
    const classes = container()
    expect(classes).toContain('bg-gray-900')
    expect(classes).toContain('rounded-sm')
    expect(classes).toContain('border-2')
    expect(classes).toContain('flex')
    expect(classes).toContain('items-center')
  })

  it('should apply default size (md)', () => {
    const { container } = textInputStyles()
    const classes = container()
    expect(classes).toContain('py-3')
    expect(classes).toContain('px-4')
  })

  it('should apply size variants correctly', () => {
    const sm = textInputStyles({ size: 'sm' })
    expect(sm.container()).toContain('py-2')
    expect(sm.container()).toContain('px-3')

    const md = textInputStyles({ size: 'md' })
    expect(md.container()).toContain('py-3')
    expect(md.container()).toContain('px-4')
  })

  it('should generate prefix classes', () => {
    const { prefix } = textInputStyles()
    const classes = prefix()
    expect(classes).toContain('text-sm')
    expect(classes).toContain('text-gray-400')
  })

  it('should generate input classes', () => {
    const { input } = textInputStyles()
    const classes = input()
    expect(classes).toContain('text-sm')
    expect(classes).toContain('text-white')
    expect(classes).toContain('bg-transparent')
    expect(classes).toContain('border-0')
    expect(classes).toContain('w-full')
    expect(classes).toContain('focus:outline-none')
    expect(classes).toContain('placeholder:text-gray-500')
  })

  it('should have focus state on container', () => {
    const { container } = textInputStyles()
    const classes = container()
    expect(classes).toContain('has-[input:focus]:border-primary-300')
  })

  it('should have disabled state on container', () => {
    const { container } = textInputStyles()
    const classes = container()
    expect(classes).toContain('has-[input:disabled]:opacity-50')
    expect(classes).toContain('has-[input:disabled]:cursor-not-allowed')
  })

  it('should merge custom className', () => {
    const textInput = textInputStyles()
    expect(textInput.container({ className: 'custom' })).toContain('custom')
  })

  it('should export variant types correctly', () => {
    expect(typeof textInputStyles).toBe('function')
  })
})
