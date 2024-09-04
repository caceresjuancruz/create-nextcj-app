'use server'

import { getErrorMessage } from '@/lib/utils'
import { ExampleParams, ExampleResponse, exampleSchema } from './example.types'

export async function example(params: ExampleParams): Promise<ExampleResponse> {
  try {
    //always validate the input data before using it
    const validatedValues = exampleSchema.parse(params)

    // Your code here
    return {
      example: validatedValues.example
    }
  } catch (error) {
    throw new Error(getErrorMessage(error))
  }
}
