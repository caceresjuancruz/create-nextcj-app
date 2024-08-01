import { RemoveUrlQueryParams, UrlQueryParams } from '@/types'
import qs from 'query-string'

export const getErrorMessage = (error: unknown): string => {
  let message: string

  if (error instanceof Error) {
    message = error.message
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message)
  } else if (typeof error === 'string') {
    message = error
  } else {
    message = 'An unknown error occurred'
  }

  return message
}

export const formUrlQuery = ({
  params,
  key,
  value
}: UrlQueryParams): string => {
  const currentUrl = qs.parse(params)

  currentUrl[key] = value

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl
    },
    { skipNull: true }
  )
}

export const removeKeysFromQuery = ({
  params,
  keysToRemove
}: RemoveUrlQueryParams): string => {
  const currentUrl = qs.parse(params)

  keysToRemove.forEach(key => {
    delete currentUrl[key]
  })

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl
    },
    { skipNull: true }
  )
}

function lightenColor(color: string) {
  const percent = 20
  const num = parseInt(color.slice(1), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = ((num >> 8) & 0x00ff) + amt,
    B = (num & 0x0000ff) + amt
  return `#${(0x1000000 + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 + (B < 255 ? (B < 1 ? 0 : B) : 255)).toString(16).slice(1).toUpperCase()}`
}

export function generateTailwindGradientClass(color: string) {
  const lighterColor = lightenColor(color)
  const style = `linear-gradient(129deg, ${color} 0%, ${lighterColor} 100%)`
  return style
}
