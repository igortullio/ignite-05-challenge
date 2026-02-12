import { Tabs, TabsContent, TabsList, TabsTrigger } from '@igortullio-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The default active tab value',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the tabs',
    },
  },
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: 'account',
    orientation: 'horizontal',
  },
  render: (args) => (
    <Tabs {...args} className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-sm text-muted-foreground">Make changes to your account here.</p>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-sm text-muted-foreground">Change your password here.</p>
      </TabsContent>
    </Tabs>
  ),
}

export const Line: Story = {
  args: {
    defaultValue: 'overview',
    orientation: 'horizontal',
  },
  render: (args) => (
    <Tabs {...args} className="w-[400px]">
      <TabsList variant="line">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p className="text-sm text-muted-foreground">Overview content.</p>
      </TabsContent>
      <TabsContent value="analytics">
        <p className="text-sm text-muted-foreground">Analytics content.</p>
      </TabsContent>
      <TabsContent value="reports">
        <p className="text-sm text-muted-foreground">Reports content.</p>
      </TabsContent>
    </Tabs>
  ),
}

export const Vertical: Story = {
  args: {
    defaultValue: 'general',
    orientation: 'vertical',
  },
  render: (args) => (
    <Tabs {...args} className="w-[400px]">
      <TabsList>
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <p className="text-sm text-muted-foreground">General settings.</p>
      </TabsContent>
      <TabsContent value="security">
        <p className="text-sm text-muted-foreground">Security settings.</p>
      </TabsContent>
      <TabsContent value="notifications">
        <p className="text-sm text-muted-foreground">Notification preferences.</p>
      </TabsContent>
    </Tabs>
  ),
}

export const DisabledTab: Story = {
  args: {
    defaultValue: 'active',
    orientation: 'horizontal',
  },
  render: (args) => (
    <Tabs {...args} className="w-[400px]">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="other">Other</TabsTrigger>
      </TabsList>
      <TabsContent value="active">
        <p className="text-sm text-muted-foreground">Active tab content.</p>
      </TabsContent>
      <TabsContent value="other">
        <p className="text-sm text-muted-foreground">Other tab content.</p>
      </TabsContent>
    </Tabs>
  ),
}
