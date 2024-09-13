import * as z from 'zod'


const flatBasis = z.object({
  name: z.string(),
  address: z.string(),
  adminId: z.string(),
  imageURL: z.string(),
  description: z.string().nullable()
})