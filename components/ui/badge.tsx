import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/cn'
import { generateTailwindGradientClass } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex select-none items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
        warning:
          'border-transparent bg-warning text-warning-foreground hover:bg-warning/80',
        info: 'border-transparent bg-info text-info-foreground hover:bg-info/80',
        success:
          'border-transparent bg-success text-success-foreground hover:bg-success/80'
      },
      size: {
        xs: 'px-2 py-0.5 text-xs h-4',
        default: 'px-2.5 py-0.5 text-xs h-6',
        sm: 'px-3 py-1 text-xs h-5',
        lg: 'px-4 py-1.5 text-sm h-7'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  size?: 'xs' | 'default' | 'sm' | 'lg'
  gradientColor?: string
  bounce?: boolean
}

function Badge({
  className,
  variant,
  size,
  gradientColor,
  bounce,
  ...props
}: BadgeProps) {
  const gradient = gradientColor
    ? generateTailwindGradientClass(gradientColor)
    : ''

  let extraClasses = ''
  extraClasses = gradientColor ? 'border-none' : ''

  if (bounce) {
    extraClasses += ' animate-bounce'
  }

  return (
    <div
      className={cn(badgeVariants({ variant, size }), className, extraClasses)}
      {...props}
      style={{
        background: gradient
      }}
    />
  )
}

export { Badge, badgeVariants }
