import { keyframes, styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${25}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${25}px))` },
})

export const ToastRoot = styled(Toast.Root, {
  boxSizing: 'border-box',
  background: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '6px',
  padding: '.75rem 1.25rem',

  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  alignItems: 'center',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  color: '$white',
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$base',
  fontFamily: '$default',
})

export const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',
  fontSize: '$sm',
  color: '$gray200',
  fontWeight: '$regular',
  fontFamily: '$code',
})

export const Button = styled('button', {
  background: '$gray800',
  color: '$gray100',
  fontSize: '$md',
  fontWeight: '$medium',
  border: '1px solid $gray600',
  cursor: 'pointer',
  padding: '.75rem 1.25rem',
  borderRadius: '6px',

  '&:hover': {
    filter: 'brightness(1.1)',
  },
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '.75rem 1.25rem',
  gap: 10,
  width: 360,
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})
