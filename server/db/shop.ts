import { ShoppingItem, ShoppingItemData } from '../../types/Shop.ts'
import db from './connection.ts'

// currently using flatId such that one flat has one shopping list
// to add more shopping lists, a join table would be required (stretch goal)
// e.g, .join('shopping_items', 'shopping_items.id', '=', 'shopping_lists.id')
// TODO: create join table from shopping_items and shopping_lists
export async function getShoppingListItems(shoppingListId: number) {
  const shoppingLists: ShoppingItem[] = await db('shopping_items')
    .where('shopping_list_id', '=', shoppingListId)
    .select(
      'id',
      'shopping_list_id as shoppingListId',
      'product_name as productName',
      'quantity',
    )

  return shoppingLists
}

export async function addShoppingListItem(data: ShoppingItemData) {
  const { shoppingListId, productName, quantity } = data
  return await db('shopping_items')
    .where('shopping_lists_id', '=', shoppingListId)
    .insert(
      {
        shopping_list_id: shoppingListId,
        product_name: productName,
        quantity: quantity,
      },
      ['id'],
    )
}

export async function delShoppingListItem(flatId: number, itemId: string) {
  return await db('shopping_items')
    .where('shopping_list_id', '=', flatId)
    .where('id', '=', itemId)
    .delete()
}
