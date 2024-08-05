'use server'

import { getErrorMessage } from '@/lib/utils'
import { ExampleParams, exampleSchema } from './example.types'

export async function example(params: ExampleParams) {
  try {
    //always validate the input data before using it 
    const validatedValues = exampleSchema.parse(params)

    // Your code here
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
}
