import * as z from 'zod'

export const userData = z.object({
  flatId: z.number().nullable(),
  id: z.number(),
  firstName: z.string(),
  lastName: z.string().nullable(),
  nickName: z.string().nullable(),
  about: z.string().nullable(),
  email: z.string().email().nullable(),
  mobile: z.string().nullable(),
  profilePhoto: z.string().nullable(),
  socialMedia: z.string().nullable(),
  createdAt: z.string().datetime(),
})

export const userDataSchema = userData // For validation, call userDataSchema.safeParse(param) function

export const user = userData.extend({
  auth0Id: z.string(),
})

/*
  How to Use:
    1. Import and use UserData and User in your code
    2. Validate the data in server routes using safeParse(), e.g.
      const form = req.body
      const validationResult = userDataSchema.safeParse(form)

      if (!validationResult.success) {
        // Code that handles the error
      }
*/
export type UserData = z.infer<typeof userData>
export type User = z.infer<typeof user>
