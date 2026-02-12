import { Label, Switch } from '@igortullio-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default'],
      description: 'The size of the switch',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Whether the switch is checked by default',
    },
  },
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Checked: Story = {
  args: { defaultChecked: true },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
}

export const Small: Story = {
  args: { size: 'sm' },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch id="small-switch" {...args} />
      <Label htmlFor="small-switch">Small switch</Label>
    </div>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch id="disabled-switch" {...args} />
      <Label htmlFor="disabled-switch" className="text-muted-foreground">
        Disabled
      </Label>
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="marketing">Marketing emails</Label>
        <Switch id="marketing" />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="security">Security emails</Label>
        <Switch id="security" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="notifications">Push notifications</Label>
        <Switch id="notifications" />
      </div>
    </div>
  ),
}
