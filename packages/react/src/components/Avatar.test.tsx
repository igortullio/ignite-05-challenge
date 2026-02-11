import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Avatar, AvatarFallback, AvatarImage } from './Avatar'

describe('Avatar Component', () => {
  it('should render the avatar root', () => {
    const { container } = render(
      <Avatar data-testid="avatar">
        <AvatarFallback />
      </Avatar>,
    )
    const root = container.firstElementChild
    expect(root?.className).toContain('rounded-full')
    expect(root?.className).toContain('inline-block')
    expect(root?.className).toContain('w-16')
    expect(root?.className).toContain('h-16')
    expect(root?.className).toContain('overflow-hidden')
  })

  it('should render AvatarImage with correct classes', () => {
    const { container } = render(
      <Avatar>
        <AvatarImage src="test.png" alt="Test" />
        <AvatarFallback />
      </Avatar>,
    )
    const img = container.querySelector('img')
    if (img) {
      expect(img.className).toContain('w-full')
      expect(img.className).toContain('h-full')
      expect(img.className).toContain('object-cover')
    }
  })

  it('should render AvatarFallback with correct classes', async () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback />
      </Avatar>,
    )
    // Radix AvatarFallback with delayMs renders after a delay
    // Wait for fallback to appear
    await new Promise((resolve) => setTimeout(resolve, 700))
    const fallback = container.querySelector('span span')
    expect(fallback).not.toBeNull()
    expect(fallback?.className).toContain('flex')
    expect(fallback?.className).toContain('items-center')
    expect(fallback?.className).toContain('justify-center')
    expect(fallback?.className).toContain('bg-gray-600')
    expect(fallback?.className).toContain('text-gray-800')
  })

  it('should merge custom className on root', () => {
    const { container } = render(
      <Avatar className="custom">
        <AvatarFallback />
      </Avatar>,
    )
    expect(container.firstElementChild?.className).toContain('custom')
  })
})
