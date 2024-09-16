import * as z from 'zod'

export const flatData = z.object({
  flatAdmin: z.string(),
  title: z.string(),
  image: z.string().nullable(),
  description: z.string().nullable(),
  streetAddress: z.string(),
  createdAt: z.string().datetime(),
})

export const flatDataSchema = flatData // For validation, call flatDataSchema.safeParse(param) function

export const flat = flatData.extend({
  id: z.number(),
})

/*
  How to Use:
    1. Import and use FlatData and Flat in your code
    2. Validate the data in server routes using safeParse(), e.g.
      const form = req.body
      const validationResult = flatDataSchema.safeParse(form)

      if (!validationResult.success) {
        // Code that handles the error
      }
*/
export type FlatData = z.infer<typeof flatData>
export type Flat = z.infer<typeof flat>
