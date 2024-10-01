'use server'

import { getErrorMessage } from '@/lib/utils'
import { Language } from '@/types'
import { cookies } from 'next/headers'

export async function changeLng(lng: Language) {
  try {
    cookies().set('accept-language', lng)
  } catch (error) {
    throw new Error(getErrorMessage(error))
  }
}
