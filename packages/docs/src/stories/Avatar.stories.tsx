import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@igortullio-ui/react'

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
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  args: {
    src: 'https://github.com/igortullio.png',
    alt: 'Igor Túllio',
  },
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
