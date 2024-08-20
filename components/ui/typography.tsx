import React, { ElementType } from 'react'

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'bodysmall'
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
  bodysmall: 'p',
  small: 'small',
  blockquote: 'blockquote'
}

const sizes: Record<Variant, string> = {
  h1: 'text-5xl font-bold sm:text-4xl scroll-m-20 tracking-tight',
  h2: 'text-4xl font-bold sm:text-3xl scroll-m-20 tracking-tight',
  h3: 'text-3xl font-bold sm:text-2xl scroll-m-20 tracking-tight',
  h4: 'text-2xl font-bold sm:text-1xl scroll-m-20 tracking-tight',
  h5: 'text-xl font-bold sm:text-lg scroll-m-20 tracking-tight',
  h6: 'text-lg font-bold sm:text-md scroll-m-20 tracking-tight',
  body: 'text-lg sm:text-md leading-7 [&:not(:first-child)]:mt-6 tracking-tight',
  bodysmall: 'text-md sm:text-sm tracking-tight',
  small: 'text-sm sm:text-xs tracking-tight',
  blockquote: 'text-lg sm:text-md mt-6 border-l-2 pl-6 italic tracking-tight'
}

const Typography = ({ variant, children, className, as }: Props) => {
  const sizeClasses = sizes[variant]
  const Tag = as || tags[variant]

  return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>
}

export { Typography }
