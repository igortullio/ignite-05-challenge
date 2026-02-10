import { tv } from 'tailwind-variants'

export const checkboxStyles = tv({
  slots: {
    container: [
      'w-6 h-6 bg-gray-900 rounded-xs leading-none cursor-pointer overflow-hidden box-border',
      'flex justify-center items-center border-2 border-gray-900',
      'data-[state=checked]:bg-ignite-300',
      'focus:border-ignite-300 data-[state=checked]:border-ignite-300',
    ],
    indicator: [
      'text-white w-4 h-4',
      'data-[state=checked]:animate-slide-in',
      'data-[state=unchecked]:animate-slide-out',
    ],
  },
})
