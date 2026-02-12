import { Progress } from '@igortullio-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'The progress value (0-100)',
    },
  },
} satisfies Meta<typeof Progress>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { value: 60 },
  render: (args) => <Progress {...args} className="w-[60%]" />,
}

export const Empty: Story = {
  args: { value: 0 },
  render: (args) => <Progress {...args} className="w-[60%]" />,
}

export const Half: Story = {
  args: { value: 50 },
  render: (args) => <Progress {...args} className="w-[60%]" />,
}

export const Complete: Story = {
  args: { value: 100 },
  render: (args) => <Progress {...args} className="w-[60%]" />,
}

export const AllSteps: Story = {
  render: () => (
    <div className="w-[60%] space-y-4">
      <Progress value={0} />
      <Progress value={25} />
      <Progress value={50} />
      <Progress value={75} />
      <Progress value={100} />
    </div>
  ),
}
