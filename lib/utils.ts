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
