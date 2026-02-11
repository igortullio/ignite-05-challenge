import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Box } from './Box'

describe('Box Component', () => {
  it('should render with base classes', () => {
    render(<Box data-testid="box" />)
    const box = screen.getByTestId('box')
    expect(box.className).toContain('p-6')
    expect(box.className).toContain('rounded-md')
    expect(box.className).toContain('bg-gray-800')
    expect(box.className).toContain('border')
    expect(box.className).toContain('border-gray-600')
  })

  it('should merge custom className', () => {
    render(<Box data-testid="box" className="custom-class" />)
    const box = screen.getByTestId('box')
    expect(box.className).toContain('custom-class')
  })

  it('should render as a different element with as prop', () => {
    render(<Box as="section" data-testid="box" />)
    const box = screen.getByTestId('box')
    expect(box.tagName).toBe('SECTION')
  })

  it('should render children', () => {
    render(<Box>Hello</Box>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
