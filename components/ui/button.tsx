import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/cn'
import { generateTailwindGradientClass } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        xs: 'h-9 rounded-md px-3',
        default: 'h-11 rounded-md px-8',
        sm: 'h-10 px-4 py-2',
        lg: 'h-14 rounded-md px-12 text-md',
        icon: 'size-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  gradientColor?: string
  heartbeat?: boolean
  hoverExpand?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      gradientColor,
      heartbeat,
      hoverExpand,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'

    const gradient = gradientColor
      ? generateTailwindGradientClass(gradientColor)
      : ''

    let extraClasses = ''

    if (heartbeat) {
      extraClasses += 'animate-buttonheartbeat'
    }

    if (hoverExpand) {
      extraClasses +=
        ' transform transition duration-400 hover:scale-110 ease-in-out'
    }

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          extraClasses
        )}
        ref={ref}
        {...props}
        style={{
          background: gradient
        }}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
