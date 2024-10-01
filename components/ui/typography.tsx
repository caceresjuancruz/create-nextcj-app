import React, { ElementType } from 'react'

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'small'
  | 'blockquote'

interface Props {
  variant: Variant
  children: React.ReactNode
  className?: string
  as?: ElementType
}

const tags: Record<Variant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  small: 'small',
  blockquote: 'blockquote'
}

const sizes: Record<Variant, string> = {
  h1: 'text-3xl font-semibold',
  h2: 'text-2xl font-medium',
  h3: 'text-xl font-medium',
  h4: 'text-lg font-medium',
  h5: 'text-lg font-medium',
  h6: 'text-md font-medium',
  body: 'text-md sm:text-lg font-light',
  small: 'text-xs sm:text-md font-light',
  blockquote:
    'text-md sm:text-lg border-l-2 pl-6 italic tracking-tight font-thin'
}

const Typography = ({ variant, children, className, as }: Props) => {
  const sizeClasses = sizes[variant]
  const Tag = as || tags[variant]

  return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>
}

export { Typography }
