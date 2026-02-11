/**
 * Unit tests for migrated components
 *
 * Tests verify that all components migrated from Stitches to tailwind-variants
 * generate correct classes, support variants, and maintain TypeScript types.
 */
import { describe, it, expect } from 'vitest'

// Import styles functions from components
import { boxStyles } from '../components/Box'
import { textStyles } from '../components/Text'
import { headingStyles } from '../components/Heading'
import { buttonStyles } from '../components/Button'
import { textAreaStyles } from '../components/TextArea'
import { avatarStyles } from '../components/Avatar'
import { checkboxStyles } from '../components/Checkbox'
import { textInputStyles } from '../components/TextInput'
import { multiStepStyles, stepStyles } from '../components/MultiStep'

describe('Box Component', () => {
  it('should generate base classes', () => {
    const classes = boxStyles()
    expect(classes).toContain('p-6')
    expect(classes).toContain('rounded-md')
    expect(classes).toContain('bg-gray-800')
    expect(classes).toContain('border')
    expect(classes).toContain('border-gray-600')
  })

  it('should merge custom className', () => {
    const classes = boxStyles({ className: 'custom-class' })
    expect(classes).toContain('custom-class')
  })
})

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
})

describe('Heading Component', () => {
  it('should generate base classes', () => {
    const classes = headingStyles()
    expect(classes).toContain('font-default')
    expect(classes).toContain('leading-shorter')
    expect(classes).toContain('text-gray-100')
  })

  it('should apply default size variant (md)', () => {
    const classes = headingStyles()
    expect(classes).toContain('text-2xl')
  })

  it('should apply size variants correctly', () => {
    expect(headingStyles({ size: 'sm' })).toContain('text-xl')
    expect(headingStyles({ size: 'md' })).toContain('text-2xl')
    expect(headingStyles({ size: 'lg' })).toContain('text-4xl')
    expect(headingStyles({ size: 'xl' })).toContain('text-5xl')
    expect(headingStyles({ size: '2xl' })).toContain('text-6xl')
    expect(headingStyles({ size: '3xl' })).toContain('text-7xl')
    expect(headingStyles({ size: '4xl' })).toContain('text-8xl')
    expect(headingStyles({ size: '5xl' })).toContain('text-9xl')
  })
})

describe('Button Component', () => {
  it('should generate base classes', () => {
    const classes = buttonStyles()
    expect(classes).toContain('rounded-sm')
    expect(classes).toContain('text-sm')
    expect(classes).toContain('font-medium')
    expect(classes).toContain('flex')
    expect(classes).toContain('items-center')
    expect(classes).toContain('justify-center')
    expect(classes).toContain('cursor-pointer')
  })

  it('should apply default variant (primary)', () => {
    const classes = buttonStyles()
    expect(classes).toContain('bg-ignite-500')
    expect(classes).toContain('text-white')
  })

  it('should apply default size (md)', () => {
    const classes = buttonStyles()
    expect(classes).toContain('h-[46px]')
  })

  it('should apply variant prop correctly', () => {
    expect(buttonStyles({ variant: 'primary' })).toContain('bg-ignite-500')
    expect(buttonStyles({ variant: 'secondary' })).toContain(
      'border-ignite-500',
    )
    expect(buttonStyles({ variant: 'tertiary' })).toContain('bg-transparent')
  })

  it('should apply size prop correctly', () => {
    expect(buttonStyles({ size: 'sm' })).toContain('h-[38px]')
    expect(buttonStyles({ size: 'md' })).toContain('h-[46px]')
  })

  it('should handle disabled state classes', () => {
    const classes = buttonStyles()
    expect(classes).toContain('disabled:cursor-not-allowed')
  })
})

describe('TextArea Component', () => {
  it('should generate base classes', () => {
    const classes = textAreaStyles()
    expect(classes).toContain('bg-gray-900')
    expect(classes).toContain('rounded-sm')
    expect(classes).toContain('border-2')
    expect(classes).toContain('text-sm')
    expect(classes).toContain('text-white')
    expect(classes).toContain('resize-y')
    expect(classes).toContain('min-h-[80px]')
  })

  it('should have focus state classes', () => {
    const classes = textAreaStyles()
    expect(classes).toContain('focus:outline-none')
    expect(classes).toContain('focus:border-ignite-300')
  })

  it('should have disabled state classes', () => {
    const classes = textAreaStyles()
    expect(classes).toContain('disabled:opacity-50')
    expect(classes).toContain('disabled:cursor-not-allowed')
  })

  it('should have placeholder classes', () => {
    const classes = textAreaStyles()
    expect(classes).toContain('placeholder:text-gray-400')
  })
})

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
})

describe('Checkbox Component', () => {
  it('should generate container classes', () => {
    const { container } = checkboxStyles()
    const classes = container()
    expect(classes).toContain('w-6')
    expect(classes).toContain('h-6')
    expect(classes).toContain('bg-gray-900')
    expect(classes).toContain('rounded-xs')
    expect(classes).toContain('cursor-pointer')
    expect(classes).toContain('flex')
    expect(classes).toContain('justify-center')
    expect(classes).toContain('items-center')
    expect(classes).toContain('border-2')
  })

  it('should have checked state classes', () => {
    const { container } = checkboxStyles()
    const classes = container()
    expect(classes).toContain('data-[state=checked]:bg-ignite-300')
    expect(classes).toContain('data-[state=checked]:border-ignite-300')
  })

  it('should generate indicator classes', () => {
    const { indicator } = checkboxStyles()
    const classes = indicator()
    expect(classes).toContain('text-white')
    expect(classes).toContain('w-4')
    expect(classes).toContain('h-4')
  })

  it('should have animation classes', () => {
    const { indicator } = checkboxStyles()
    const classes = indicator()
    expect(classes).toContain('data-[state=checked]:animate-slide-in')
    expect(classes).toContain('data-[state=unchecked]:animate-slide-out')
  })
})

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
    expect(classes).toContain('has-[input:focus]:border-ignite-300')
  })

  it('should have disabled state on container', () => {
    const { container } = textInputStyles()
    const classes = container()
    expect(classes).toContain('has-[input:disabled]:opacity-50')
    expect(classes).toContain('has-[input:disabled]:cursor-not-allowed')
  })
})

describe('MultiStep Component', () => {
  it('should have callable container slot', () => {
    const { container } = multiStepStyles()
    // Container is an empty slot by design
    expect(typeof container).toBe('function')
    // Empty slots return undefined in tailwind-variants
    expect(container()).toBeUndefined()
  })

  it('should generate label classes', () => {
    const { label } = multiStepStyles()
    const classes = label()
    expect(classes).toContain('font-default')
    expect(classes).toContain('text-gray-200')
    expect(classes).toContain('text-xs')
  })

  it('should generate steps container classes', () => {
    const { steps } = multiStepStyles()
    const classes = steps()
    expect(classes).toContain('grid')
    expect(classes).toContain('grid-cols-steps')
    expect(classes).toContain('gap-2')
    expect(classes).toContain('mt-1')
  })

  it('should generate step base classes', () => {
    const classes = stepStyles()
    expect(classes).toContain('h-1')
    expect(classes).toContain('rounded-px')
    expect(classes).toContain('bg-gray-600')
  })

  it('should apply active variant correctly', () => {
    const inactive = stepStyles({ active: false })
    expect(inactive).toContain('bg-gray-600')
    expect(inactive).not.toContain('bg-gray-100')

    const active = stepStyles({ active: true })
    expect(active).toContain('bg-gray-100')
  })
})

describe('TypeScript Types', () => {
  it('should export variant types correctly', () => {
    // These imports should compile without errors
    // TypeScript will catch any type issues at compile time
    expect(typeof boxStyles).toBe('function')
    expect(typeof textStyles).toBe('function')
    expect(typeof headingStyles).toBe('function')
    expect(typeof buttonStyles).toBe('function')
    expect(typeof textAreaStyles).toBe('function')
    expect(typeof avatarStyles).toBe('function')
    expect(typeof checkboxStyles).toBe('function')
    expect(typeof textInputStyles).toBe('function')
    expect(typeof multiStepStyles).toBe('function')
    expect(typeof stepStyles).toBe('function')
  })
})

describe('className Prop Merging', () => {
  it('should merge custom className with all components', () => {
    expect(boxStyles({ className: 'custom' })).toContain('custom')
    expect(textStyles({ className: 'custom' })).toContain('custom')
    expect(headingStyles({ className: 'custom' })).toContain('custom')
    expect(buttonStyles({ className: 'custom' })).toContain('custom')
    expect(textAreaStyles({ className: 'custom' })).toContain('custom')

    // Slot components
    const avatar = avatarStyles()
    expect(avatar.container({ className: 'custom' })).toContain('custom')

    const checkbox = checkboxStyles()
    expect(checkbox.container({ className: 'custom' })).toContain('custom')

    const textInput = textInputStyles()
    expect(textInput.container({ className: 'custom' })).toContain('custom')

    const multiStep = multiStepStyles()
    expect(multiStep.container({ className: 'custom' })).toContain('custom')
  })
})
