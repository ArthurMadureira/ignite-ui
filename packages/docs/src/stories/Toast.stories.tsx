import type { Meta, StoryObj } from '@storybook/react'
import { ToastNotification, ToastNotificationProps } from '@ignite-ui/react'

export default {
  title: 'Alert Messages/Toast',
  component: ToastNotification,
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
} as Meta<ToastNotificationProps>

export const Primary: StoryObj<ToastNotificationProps> = {
  args: {
    buttonText: 'Open toast',
  },
}
