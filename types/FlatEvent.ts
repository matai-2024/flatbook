import * as z from 'zod'

export const flatEventData = z.object({
  flatId: z.number(),
  authorId: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  location: z.string(),
  startTime: z.string().datetime(),
  endTime: z.string().datetime(),
  createdAt: z.string().date(),
})

export const flatEventDataSchema = flatEventData // For validation, call choreDataSchema.safeParse(param) function

export const flatEvent = flatEventData.extend({
  id: z.number(),
})

/*
  How to Use:
    1. Import and use FlatEventData and FlatEvent in your code
    2. Validate the data in server routes using safeParse(), e.g.
      const form = req.body
      const validationResult = flatEventDataSchema.safeParse(form)

      if (!validationResult.success) {
        // Code that handles the error
      }
*/
export type FlatEventData = z.infer<typeof flatEventData>
export type FlatEvent = z.infer<typeof flatEvent>
