import { Avatar, AvatarFallback, AvatarImage } from '@igortullio-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

type AvatarStoryProps = ComponentProps<typeof Avatar> & {
  src?: string
  alt?: string
}

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
  render: (args: AvatarStoryProps) => (
    <Avatar {...args}>
      <AvatarImage src={args.src} alt={args.alt} />
      <AvatarFallback />
    </Avatar>
  ),
} as Meta<AvatarStoryProps>

export const Primary: StoryObj<AvatarStoryProps> = {
  args: {
    src: 'https://github.com/igortullio.png',
    alt: 'Igor Túllio',
  },
}

export const WithFallback: StoryObj<AvatarStoryProps> = {
  args: {
    src: undefined,
  },
}
