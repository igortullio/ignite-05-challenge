import type { Meta, StoryObj } from '@storybook/react-vite'

const colorCategories = [
  {
    name: 'Base',
    tokens: [
      { variable: '--background', tw: 'bg-background' },
      { variable: '--foreground', tw: 'text-foreground' },
    ],
  },
  {
    name: 'Card',
    tokens: [
      { variable: '--card', tw: 'bg-card' },
      { variable: '--card-foreground', tw: 'text-card-foreground' },
    ],
  },
  {
    name: 'Popover',
    tokens: [
      { variable: '--popover', tw: 'bg-popover' },
      { variable: '--popover-foreground', tw: 'text-popover-foreground' },
    ],
  },
  {
    name: 'Primary',
    tokens: [
      { variable: '--primary', tw: 'bg-primary' },
      { variable: '--primary-foreground', tw: 'text-primary-foreground' },
    ],
  },
  {
    name: 'Secondary',
    tokens: [
      { variable: '--secondary', tw: 'bg-secondary' },
      {
        variable: '--secondary-foreground',
        tw: 'text-secondary-foreground',
      },
    ],
  },
  {
    name: 'Muted',
    tokens: [
      { variable: '--muted', tw: 'bg-muted' },
      { variable: '--muted-foreground', tw: 'text-muted-foreground' },
    ],
  },
  {
    name: 'Accent',
    tokens: [
      { variable: '--accent', tw: 'bg-accent' },
      { variable: '--accent-foreground', tw: 'text-accent-foreground' },
    ],
  },
  {
    name: 'Destructive',
    tokens: [{ variable: '--destructive', tw: 'bg-destructive' }],
  },
  {
    name: 'Utility',
    tokens: [
      { variable: '--border', tw: 'border-border' },
      { variable: '--input', tw: 'border-input' },
      { variable: '--ring', tw: 'ring-ring' },
    ],
  },
  {
    name: 'Chart',
    tokens: [
      { variable: '--chart-1', tw: 'bg-chart-1' },
      { variable: '--chart-2', tw: 'bg-chart-2' },
      { variable: '--chart-3', tw: 'bg-chart-3' },
      { variable: '--chart-4', tw: 'bg-chart-4' },
      { variable: '--chart-5', tw: 'bg-chart-5' },
    ],
  },
  {
    name: 'Sidebar',
    tokens: [
      { variable: '--sidebar', tw: 'bg-sidebar' },
      { variable: '--sidebar-foreground', tw: 'text-sidebar-foreground' },
      { variable: '--sidebar-primary', tw: 'bg-sidebar-primary' },
      {
        variable: '--sidebar-primary-foreground',
        tw: 'text-sidebar-primary-foreground',
      },
      { variable: '--sidebar-accent', tw: 'bg-sidebar-accent' },
      {
        variable: '--sidebar-accent-foreground',
        tw: 'text-sidebar-accent-foreground',
      },
      { variable: '--sidebar-border', tw: 'border-sidebar-border' },
      { variable: '--sidebar-ring', tw: 'ring-sidebar-ring' },
    ],
  },
]

function ColorSwatch({ variable }: { variable: string }) {
  return <div className="size-10 rounded-md border border-border" style={{ backgroundColor: `var(${variable})` }} />
}

function ColorPalette() {
  return (
    <div className="space-y-8 p-4">
      {colorCategories.map((category) => (
        <div key={category.name}>
          <h3 className="mb-3 text-lg font-semibold text-foreground">{category.name}</h3>
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 py-2 text-left font-medium text-muted-foreground">Swatch</th>
                  <th className="px-4 py-2 text-left font-medium text-muted-foreground">CSS Variable</th>
                  <th className="px-4 py-2 text-left font-medium text-muted-foreground">Tailwind Class</th>
                </tr>
              </thead>
              <tbody>
                {category.tokens.map((token) => (
                  <tr key={token.variable} className="border-b border-border last:border-b-0">
                    <td className="px-4 py-2">
                      <ColorSwatch variable={token.variable} />
                    </td>
                    <td className="px-4 py-2 font-mono text-foreground">{token.variable}</td>
                    <td className="px-4 py-2 font-mono text-muted-foreground">{token.tw}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  )
}

const meta = {
  title: 'Design Tokens/Colors',
  component: ColorPalette,
  tags: ['autodocs'],
} satisfies Meta<typeof ColorPalette>

export default meta

type Story = StoryObj<typeof meta>

export const AllColors: Story = {}
