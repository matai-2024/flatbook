import * as z from 'zod'

export const billData = z.object({
  flatId: z.number(),
  title: z.string(),
  description: z.string().nullable(),
  priority: z.number().default(0),
  deadline: z.string().date().nullable(),
  createdAt: z.string().date(),
  isCompleted: z.boolean().default(false),
})

export const billDataSchema = billData // For validation, call billDataSchema.safeParse(param) function

export const bill = billData.extend({
  id: z.number(),
})

/*
  How to Use:
    1. Import and use BillData and Bill in your code
    2. Validate the data in server routes using safeParse(), e.g.
      const form = req.body
      const validationResult = billDataSchema.safeParse(form)

      if (!validationResult.success) {
        // Code that handles the error
      }
*/
export type BillData = z.infer<typeof billData>
export type Chore = z.infer<typeof bill>
