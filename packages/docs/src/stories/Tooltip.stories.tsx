import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Alert Messages/Tooltip',
  component: Tooltip,
  args: {
    src: 'https://www.github.com/ArthurMadureira.png',
    alt: 'Arthur Madureira',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    tooltipText: 'Tooltip',
  },
}
