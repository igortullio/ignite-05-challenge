import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TextArea } from './TextArea'

describe('TextArea Component', () => {
  it('should render with base classes', () => {
    render(<TextArea data-testid="textarea" />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea.className).toContain('bg-gray-900')
    expect(textarea.className).toContain('rounded-sm')
    expect(textarea.className).toContain('border-2')
    expect(textarea.className).toContain('text-sm')
    expect(textarea.className).toContain('text-white')
    expect(textarea.className).toContain('resize-y')
    expect(textarea.className).toContain('min-h-[80px]')
  })

  it('should have focus state classes', () => {
    render(<TextArea data-testid="textarea" />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea.className).toContain('focus:outline-none')
    expect(textarea.className).toContain('focus:border-primary-300')
  })

  it('should have disabled state classes', () => {
    render(<TextArea data-testid="textarea" />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea.className).toContain('disabled:opacity-50')
    expect(textarea.className).toContain('disabled:cursor-not-allowed')
  })

  it('should have placeholder classes', () => {
    render(<TextArea data-testid="textarea" />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea.className).toContain('placeholder:text-gray-400')
  })

  it('should merge custom className', () => {
    render(<TextArea data-testid="textarea" className="custom" />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea.className).toContain('custom')
  })

  it('should render as textarea element', () => {
    render(<TextArea data-testid="textarea" />)
    const textarea = screen.getByTestId('textarea')
    expect(textarea.tagName).toBe('TEXTAREA')
  })
})
