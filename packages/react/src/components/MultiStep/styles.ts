import { tv, type VariantProps } from 'tailwind-variants'

export const multiStepStyles = tv({
  slots: {
    container: '',
    label: 'font-default leading-base m-0 text-gray-200 text-xs',
    steps: 'grid grid-cols-steps gap-2 mt-1',
    step: 'h-1 rounded-px bg-gray-600',
  },
})

export const stepStyles = tv({
  base: 'h-1 rounded-px bg-gray-600',
  variants: {
    active: {
      true: 'bg-gray-100',
    },
  },
})

export type StepVariants = VariantProps<typeof stepStyles>
