import * as z from 'zod'

export const choreData = z.object({
  flatId: z.number(),
  title: z.string(),
  description: z.string().nullable(),
  priority: z.number().default(0),
  dealine: z.string().date().nullable(),
  createdAt: z.string().date(),
  isCompleted: z.boolean().default(false),
})

export const choreDataSchema = choreData // For validation, call choreDataSchema.safeParse(param) function

export const chore = choreData.extend({
  id: z.number(),
})

/*
  How to Use:
    1. Import and use ChoreData and Chore in your code
    2. Validate the data in server routes using safeParse(), e.g.
      const form = req.body
      const validationResult = choreDataSchema.safeParse(form)

      if (!validationResult.success) {
        // Code that handles the error
      }
*/
export type ChoreData = z.infer<typeof choreData>
export type Chore = z.infer<typeof chore>
