'use client'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn, generateTailwindGradientClass, variantColorMap } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md w-fit text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
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
        link: 'text-primary underline-offset-4 hover:underline',
        warning: 'bg-warning text-warning-foreground hover:bg-warning/90',
        info: 'bg-info text-info-foreground hover:bg-info/90',
        success: 'bg-success text-success-foreground hover:bg-success/90'
      },
      size: {
        xs: 'h-7 text-xs px-2',
        sm: 'h-8 text-sm px-3',
        default: 'h-9 text-sm px-4',
        lg: 'h-10 text-sm px-5',
        icon: 'size-9 text-xs'
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
  color?: string
  gradient?: boolean
  heartbeat?: boolean
  hoverExpand?: boolean
  pill?: boolean
  loading?: boolean
  icon?: React.ReactNode
}

const Button = React.memo(
  React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
      {
        className,
        variant,
        size,
        asChild = false,
        color,
        gradient,
        heartbeat,
        hoverExpand,
        pill,
        loading,
        icon,
        ...props
      },
      ref
    ) => {
      const Comp = asChild ? Slot : 'button'

      const btnColor = color ? color : variantColorMap[variant ?? 'default']

      const gradientColor = React.useMemo(() => {
        return gradient ? generateTailwindGradientClass(btnColor) : btnColor
      }, [gradient, btnColor])

      const buttonRef = React.useRef<HTMLButtonElement | null>(null)
      const [buttonWidth, setButtonWidth] = React.useState<number | undefined>(
        undefined
      )

      const setRefs = React.useCallback(
        (node: HTMLButtonElement | null) => {
          buttonRef.current = node
          if (typeof ref === 'function') {
            ref(node)
          } else if (ref) {
            ;(ref as React.MutableRefObject<HTMLButtonElement | null>).current =
              node
          }
        },
        [ref]
      )

      React.useEffect(() => {
        if (!loading && buttonRef.current) {
          setButtonWidth(buttonRef.current.offsetWidth)
        }
      }, [loading])

      let extraClasses = ''

      if (!heartbeat && !loading) {
        extraClasses +=
          'transform transition-transform duration-150 ease-in-out active:scale-95'
      }

      if (heartbeat) {
        extraClasses += 'animate-buttonheartbeat'
      }

      if (hoverExpand) {
        extraClasses +=
          ' transform transition duration-400 hover:scale-110 ease-in-out'
      }

      if (pill) {
        extraClasses += ' rounded-full'
      }

      if (loading) {
        extraClasses += ' cursor-not-allowed animate-pulse'
        props.children = (
          <div role='status'>
            <svg
              className='animate-spin text-neutral-300 opacity-25'
              viewBox='0 0 64 64'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
            >
              <path
                d='M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z'
                stroke='currentColor'
                strokeWidth='6'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
              <path
                d='M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762'
                stroke='currentColor'
                strokeWidth='5'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='text-neutral-900'
              ></path>
            </svg>
            <span className='sr-only'>Loading...</span>
          </div>
        )
      }

      if (icon) {
        props.children = (
          <span className='flex-center gap-2'>
            {props.children}
            {icon}
          </span>
        )
      }

      return (
        <Comp
          className={cn(
            buttonVariants({ variant, size, className }),
            extraClasses
          )}
          ref={setRefs}
          {...props}
          style={{
            background: gradient ? gradientColor : undefined,
            width: loading && buttonWidth ? `${buttonWidth}px` : undefined
          }}
          aria-busy={loading}
          disabled={loading}
        />
      )
    }
  ),
  (prevProps, nextProps) => {
    return (
      prevProps.variant === nextProps.variant &&
      prevProps.size === nextProps.size &&
      prevProps.color === nextProps.color &&
      prevProps.gradient === nextProps.gradient &&
      prevProps.heartbeat === nextProps.heartbeat &&
      prevProps.hoverExpand === nextProps.hoverExpand &&
      prevProps.pill === nextProps.pill &&
      prevProps.loading === nextProps.loading &&
      prevProps.icon === nextProps.icon &&
      prevProps.children === nextProps.children &&
      prevProps.className === nextProps.className &&
      prevProps.asChild === nextProps.asChild
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
