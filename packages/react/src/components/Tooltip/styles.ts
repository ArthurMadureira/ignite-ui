import * as Tooltip from '@radix-ui/react-tooltip'
import { keyframes } from '@stitches/react'
import { styled } from '../../styles'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const Button = styled('button', {
  borderRadius: '$sm',
  border: '1px solid $gray500',
  background: 'transparent',
  color: '$white',
  padding: '$4 26px',
  fontFamily: '$default',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  transition: 'background .2s ease-in-out',
  cursor: 'pointer',

  '&:hover': {
    background: '$gray400',
  },
})

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: '5px',
  padding: '$3 $4',
  fontSize: '$sm',
  fontFamily: '$default',
  color: '$gray100',
  textAlign: 'center',
  background: '$gray900',

  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
