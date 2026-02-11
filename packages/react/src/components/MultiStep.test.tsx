import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MultiStep } from './MultiStep'

describe('MultiStep Component', () => {
  it('should render the correct label', () => {
    render(<MultiStep size={4} currentStep={2} />)
    expect(screen.getByText('Passo 2 de 4')).toBeInTheDocument()
  })

  it('should render the correct number of steps', () => {
    const { container } = render(<MultiStep size={4} />)
    const steps = container.querySelectorAll('.h-1')
    expect(steps).toHaveLength(4)
  })

  it('should apply active class to completed steps', () => {
    const { container } = render(<MultiStep size={4} currentStep={2} />)
    const steps = container.querySelectorAll('.h-1')
    expect(steps[0].className).toContain('bg-gray-100')
    expect(steps[1].className).toContain('bg-gray-100')
    expect(steps[2].className).not.toContain('bg-gray-100')
    expect(steps[3].className).not.toContain('bg-gray-100')
  })

  it('should default currentStep to 1', () => {
    render(<MultiStep size={3} />)
    expect(screen.getByText('Passo 1 de 3')).toBeInTheDocument()
  })

  it('should apply custom className', () => {
    const { container } = render(<MultiStep size={2} className="custom" />)
    expect(container.firstElementChild?.className).toContain('custom')
  })
})
