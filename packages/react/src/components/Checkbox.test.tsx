import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Checkbox } from './Checkbox'

describe('Checkbox Component', () => {
  it('should render a checkbox', () => {
    render(<Checkbox aria-label="Accept" />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('should render with base classes', () => {
    render(<Checkbox aria-label="Accept" />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox.className).toContain('w-6')
    expect(checkbox.className).toContain('h-6')
    expect(checkbox.className).toContain('bg-gray-900')
    expect(checkbox.className).toContain('rounded-xs')
    expect(checkbox.className).toContain('cursor-pointer')
    expect(checkbox.className).toContain('border-2')
  })

  it('should have checked state classes', () => {
    render(<Checkbox aria-label="Accept" />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox.className).toContain('data-[state=checked]:bg-primary-300')
    expect(checkbox.className).toContain('data-[state=checked]:border-primary-300')
  })

  it('should merge custom className', () => {
    render(<Checkbox aria-label="Accept" className="custom" />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox.className).toContain('custom')
  })
})
