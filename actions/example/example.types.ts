import { z } from 'zod';

export const exampleSchema = z.object({
  example: z.string()
})

export type ExampleParams = z.infer<typeof exampleSchema>

export type ExampleResponse = { example: string }