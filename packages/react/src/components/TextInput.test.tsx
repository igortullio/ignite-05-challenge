import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TextInput, textInputVariants } from './TextInput'

describe('TextInput Component', () => {
  it('should generate container classes', () => {
    const classes = textInputVariants()
    expect(classes).toContain('bg-gray-900')
    expect(classes).toContain('rounded-sm')
    expect(classes).toContain('border-2')
    expect(classes).toContain('flex')
    expect(classes).toContain('items-center')
  })

  it('should apply default size (md)', () => {
    const classes = textInputVariants()
    expect(classes).toContain('py-3')
    expect(classes).toContain('px-4')
  })

  it('should apply size variants correctly', () => {
    const sm = textInputVariants({ size: 'sm' })
    expect(sm).toContain('py-2')
    expect(sm).toContain('px-3')

    const md = textInputVariants({ size: 'md' })
    expect(md).toContain('py-3')
    expect(md).toContain('px-4')
  })

  it('should have focus state on container', () => {
    const classes = textInputVariants()
    expect(classes).toContain('has-[input:focus]:border-primary-300')
  })

  it('should have disabled state on container', () => {
    const classes = textInputVariants()
    expect(classes).toContain('has-[input:disabled]:opacity-50')
    expect(classes).toContain('has-[input:disabled]:cursor-not-allowed')
  })

  it('should render prefix when provided', () => {
    render(<TextInput prefix="https://" placeholder="example.com" />)
    expect(screen.getByText('https://')).toBeInTheDocument()
  })

  it('should render input element', () => {
    render(<TextInput placeholder="Type here" />)
    expect(screen.getByPlaceholderText('Type here')).toBeInTheDocument()
  })

  it('should merge custom className', () => {
    const classes = textInputVariants({ className: 'custom' })
    expect(classes).toContain('custom')
  })

  it('should export variant types correctly', () => {
    expect(typeof textInputVariants).toBe('function')
  })
})
