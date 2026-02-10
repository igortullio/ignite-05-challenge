import { tv } from 'tailwind-variants'

export const avatarStyles = tv({
  slots: {
    container: 'rounded-full inline-block w-16 h-16 overflow-hidden',
    image: 'w-full h-full object-cover rounded-[inherit]',
    fallback: [
      'w-full h-full flex items-center justify-center',
      'bg-gray-600 text-gray-800',
      '[&_svg]:w-6 [&_svg]:h-6',
    ],
  },
})
