import * as React from 'react'

import { cn } from '@/lib/cn'
import { generateTailwindGradientClass } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

const cardVariants = cva(
  'border rounded-md bg-card text-card-foreground shadow-sm',
  {
    variants: {
      variant: {
        default: '',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80'
      },
      size: {
        xs: '',
        sm: '',
        default: '',
        lg: '',
        icon: 'flex-center h-20 w-20'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  size?: 'xs' | 'default' | 'sm' | 'lg' | 'icon'
  variant?: 'default' | 'outline' | 'secondary'
  gradientColor?: string
  title: string
  description?: string
  icon?: React.ReactNode
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      size = 'default',
      variant = 'default',
      gradientColor,
      title,
      description,
      icon,
      ...props
    },
    ref
  ) => {
    let extraClasses = ''
    size = icon ? 'icon' : size
    const gradient = gradientColor
      ? generateTailwindGradientClass(gradientColor)
      : ''

    let titleSize = 'text-md'
    if (size === 'xs') titleSize = 'text-xs'
    if (size === 'sm') titleSize = 'text-sm'
    if (size === 'lg') titleSize = 'text-lg'

    let descriptionSize = ''
    if (size === 'xs') descriptionSize = 'text-xs'
    if (size === 'sm') descriptionSize = 'text-sm'
    if (size === 'lg') descriptionSize = 'text-lg'

    extraClasses += gradient ? 'border-none' : ''

    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, size, className }), extraClasses)}
        {...props}
        style={{
          background: gradient
        }}
      >
        {icon ? (
          icon
        ) : (
          <CardHeader>
            <CardTitle className={cn(titleSize)}>{title}</CardTitle>
            <CardDescription className={cn(descriptionSize)}>
              {description}
            </CardDescription>
          </CardHeader>
        )}
      </div>
    )
  }
)
Card.displayName = 'Card'

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-5', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('font-semibold leading-none', className)}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-muted-foreground', className)} {...props} />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
