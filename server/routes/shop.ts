import { Router } from 'express'
import * as db from '../db/shop.ts'
import { ShoppingItemData, shoppingItemDataSchema } from '../../types/Shop.ts'

const router = Router()

router.get('/:flatId', async (req, res) => {
  try {
    const flatId = req.params.flatId
    const shoppingListItems = await db.getShoppingListItems(+flatId)
    res.json(shoppingListItems)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/:flatId', async (req, res, next) => {
  try {
    const newItem: ShoppingItemData = req.body
    const validationResult = shoppingItemDataSchema.safeParse(newItem)

    if (!validationResult.success) {
      res.status(400).json({})
      return
    }

    await db.addShoppingListItem(newItem)
    res.sendStatus(201)
  } catch (err) {
    next(err)
  }
})

router.delete('/:flatId', async (req, res) => {
  try {
    const flatId = req.params.flatId
    const { itemId } = req.body

    await db.delShoppingListItem(+flatId, itemId)

    res.sendStatus(204)
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Something went wrong when trying to delete the item' })
  }
})
export default router
