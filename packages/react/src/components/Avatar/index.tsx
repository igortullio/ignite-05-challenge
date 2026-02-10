import * as RadixAvatar from '@radix-ui/react-avatar'
import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { avatarStyles } from './styles'

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
