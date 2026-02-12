import { Checkbox, Input, Label } from '@igortullio-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    children: 'Label',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Label content',
    },
    htmlFor: {
      control: 'text',
      description: 'The ID of the form element the label is associated with',
    },
  },
} satisfies Meta<typeof Label>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithInput: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
}

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
}
