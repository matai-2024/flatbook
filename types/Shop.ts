import * as z from 'zod'

/* Shopping List */
export const shoppingListData = z.object({
  flatId: z.number(),
  authorId: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  isCompleted: z.boolean().default(false),
})

export const shoppingListDataSchema = shoppingListData
export const shoppingList = shoppingListData.extend({
  id: z.number(),
})

export type ShoppingListData = z.infer<typeof shoppingListData>
export type ShoppingList = z.infer<typeof shoppingList>

/* Shopping Item */
export const shoppingItemData = z.object({
  shoppingListId: z.number(),
  productName: z.string(),
  price: z.number(),
})

export const shoppingItemDataSchema = shoppingItemData
export const shoppingItem = shoppingItemData.extend({
  id: z.number(),
})

export type ShoppingItemData = z.infer<typeof shoppingItemData>
export type ShoppingItem = z.infer<typeof shoppingItem>
