import { Checkbox, Label } from '@igortullio-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked by default',
    },
    'aria-invalid': {
      control: 'boolean',
      description: 'Whether the checkbox is in an invalid state',
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Checked: Story = {
  args: { defaultChecked: true },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled" {...args} />
      <Label htmlFor="disabled" className="text-muted-foreground">
        Disabled checkbox
      </Label>
    </div>
  ),
}

export const Invalid: Story = {
  args: { 'aria-invalid': true },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="invalid" {...args} />
      <Label htmlFor="invalid">Required field</Label>
    </div>
  ),
}

export const MultipleOptions: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox id="option-1" defaultChecked />
        <Label htmlFor="option-1">Email notifications</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option-2" />
        <Label htmlFor="option-2">SMS notifications</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option-3" />
        <Label htmlFor="option-3">Push notifications</Label>
      </div>
    </div>
  ),
}
