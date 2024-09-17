import request from 'superagent'
import { ShoppingItem, ShoppingItemData } from '../../types/Shop'

const baseUrl = '/api/v1/shop'

export async function getShoppingList(token: string, flatId: string) {
  const res = await request
    .get(`${baseUrl}/${flatId}`)
    .set('Authorization', `Bearer ${token}`)
  return res.body as ShoppingItem[]
}

export async function addShopItem(token: string, newItem: ShoppingItemData) {
  const res = await request
    .post(`${baseUrl}/${newItem.shoppingListId}`)
    .send({ ...newItem })
    .set('Authorization', `Bearer ${token}`)
  return res
}

export async function delShopItem(
  token: string,
  flatId: string,
  itemId: number,
) {
  const res = await request
    .delete(`${baseUrl}/${flatId}`)
    .send({ itemId })
    .set('Authorization', `Bearer ${token}`)
  return res
}
