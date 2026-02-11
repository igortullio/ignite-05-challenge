import { User } from 'lucide-react'
import { Avatar as RadixAvatar } from 'radix-ui'
import { type ComponentProps, forwardRef } from 'react'
import { cn } from '../lib/utils'

export const Avatar = forwardRef<HTMLSpanElement, ComponentProps<typeof RadixAvatar.Root>>(
  ({ className, ...props }, ref) => (
    <RadixAvatar.Root
      ref={ref}
      className={cn('rounded-full inline-block w-16 h-16 overflow-hidden', className)}
      {...props}
    />
  ),
)

Avatar.displayName = 'Avatar'

export const AvatarImage = forwardRef<HTMLImageElement, ComponentProps<typeof RadixAvatar.Image>>(
  ({ className, ...props }, ref) => (
    <RadixAvatar.Image ref={ref} className={cn('w-full h-full object-cover rounded-[inherit]', className)} {...props} />
  ),
)

AvatarImage.displayName = 'AvatarImage'

export const AvatarFallback = forwardRef<HTMLSpanElement, ComponentProps<typeof RadixAvatar.Fallback>>(
  ({ className, children, ...props }, ref) => (
    <RadixAvatar.Fallback
      ref={ref}
      className={cn(
        'w-full h-full flex items-center justify-center',
        'bg-gray-600 text-gray-800',
        '[&_svg]:w-6 [&_svg]:h-6',
        className,
      )}
      delayMs={600}
      {...props}
    >
      {children ?? <User />}
    </RadixAvatar.Fallback>
  ),
)

AvatarFallback.displayName = 'AvatarFallback'
