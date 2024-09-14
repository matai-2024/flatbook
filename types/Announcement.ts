import * as z from 'zod'

export const annoucementData = z.object({
  flatId: z.number(),
  auth0Id: z.string(),
  title: z.string(),
  content: z.string(),
  createdAt: z.string().date(),
})

export const announcementDataSchema = annoucementData // For validation, call choreDataSchema.safeParse(param) function

export const announcement = annoucementData.extend({
  id: z.number(),
})

/*
  How to Use:
    1. Import and use AnnouncementData and Announcement in your code
    2. Validate the data in server routes using safeParse(), e.g.
      const form = req.body
      const validationResult = announcementDataSchema.safeParse(form)

      if (!validationResult.success) {
        // Code that handles the error
      }
*/
export type AnnouncementData = z.infer<typeof annoucementData>
export type Announcement = z.infer<typeof announcement>
