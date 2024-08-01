'use server'

import { getErrorMessage } from '@/lib/utils'

export async function example() {
  try {
    // Your code here
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
}
