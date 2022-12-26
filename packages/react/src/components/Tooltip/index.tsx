import * as ToolTip from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import { Button, TooltipArrow, TooltipContent } from './styles'

export interface TooltipProps extends ComponentProps<typeof ToolTip.Root> {
  tooltipText: string
}

export function Tooltip({ tooltipText }: TooltipProps) {
  return (
    <ToolTip.Provider>
      <ToolTip.Root delayDuration={2}>
        <ToolTip.Trigger asChild>
          <Button>21</Button>
        </ToolTip.Trigger>

        <ToolTip.Portal>
          <TooltipContent sideOffset={5}>
            {tooltipText}
            <TooltipArrow />
          </TooltipContent>
        </ToolTip.Portal>
      </ToolTip.Root>
    </ToolTip.Provider>
  )
}
