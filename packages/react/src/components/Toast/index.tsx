import * as Toast from '@radix-ui/react-toast'
import { ComponentProps, useState, useRef } from 'react'
import { X } from 'phosphor-react'
import {
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastViewport,
  Button,
} from './styles'

export interface ToastNotificationProps
  extends ComponentProps<typeof ToastRoot> {
  buttonText: string
}

export function ToastNotification({ buttonText }: ToastNotificationProps) {
  const [open, setOpen] = useState(false)
  const eventDateRef = useRef(new Date())
  const timerRef = useRef(0)

  function oneWeekAway(date?: any) {
    const now = new Date()
    const inOneWeek = now.setDate(now.getDate() + 7)
    return new Date(inOneWeek)
  }

  function prettyDate(date: any) {
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'full',
      timeStyle: 'short',
    }).format(date)
  }
  return (
    <Toast.Provider swipeDirection="right">
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway()
            setOpen(true)
          }, 100)
        }}
      >
        {buttonText}
      </Button>
      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle>Agendamento realizado</ToastTitle>

        <ToastDescription asChild>
          <time dateTime={eventDateRef.current.toISOString()}>
            {prettyDate(eventDateRef.current)}
          </time>
        </ToastDescription>

        <Toast.Action asChild altText="Close toast">
          <X size={14} color="#A9A9B2" style={{ cursor: 'pointer' }} />
        </Toast.Action>

        {/* <Toast.Close /> */}
      </ToastRoot>

      <ToastViewport />
    </Toast.Provider>
  )
}
