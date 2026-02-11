import * as RadixAvatar from '@radix-ui/react-avatar'
import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
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

export interface AvatarProps extends ComponentProps<typeof RadixAvatar.Image> {
  className?: string
}

export function Avatar({ className, ...props }: AvatarProps) {
  const { container, image, fallback } = avatarStyles()

  return (
    <RadixAvatar.Root className={container({ className })}>
      <RadixAvatar.Image className={image()} {...props} />

      <RadixAvatar.Fallback className={fallback()} delayMs={600}>
        <User />
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}

Avatar.displayName = 'Avatar'
