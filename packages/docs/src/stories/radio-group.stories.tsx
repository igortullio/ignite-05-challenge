import { Label, RadioGroup, RadioGroupItem } from '@igortullio-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The default selected value',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio group is disabled',
    },
  },
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { defaultValue: 'comfortable' },
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  args: { defaultValue: 'option-1', disabled: true },
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-1" id="d1" />
        <Label htmlFor="d1" className="text-muted-foreground">
          Option 1
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-2" id="d2" />
        <Label htmlFor="d2" className="text-muted-foreground">
          Option 2
        </Label>
      </div>
    </RadioGroup>
  ),
}

export const Horizontal: Story = {
  args: { defaultValue: 'card' },
  render: (args) => (
    <RadioGroup {...args} className="flex gap-4">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="card" id="h1" />
        <Label htmlFor="h1">Card</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="paypal" id="h2" />
        <Label htmlFor="h2">PayPal</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="apple" id="h3" />
        <Label htmlFor="h3">Apple Pay</Label>
      </div>
    </RadioGroup>
  ),
}
