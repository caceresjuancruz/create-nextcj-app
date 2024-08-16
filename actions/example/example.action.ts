'use server'


import { getErrorMessage } from '@/lib/utils'
import { ActionResponse } from '../shared.types'
import { ExampleParams, ExampleResponse, exampleSchema } from './example.types'

export async function example(params: ExampleParams): Promise<ActionResponse<ExampleResponse>> {
  try {
    //always validate the input data before using it
    const validatedValues = exampleSchema.parse(params)

    // Your code here
    return {
      data: {
        example: 'example'
      }
    }
  } catch (error) {
    return {
      error: getErrorMessage(error)
    }
  }
}
