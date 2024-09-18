import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'

import * as db from '../db/users.ts'

const router = Router()

//TODO-- add checkJWT & revisit ID

router.get('/', async (req, res) => {
  try {
    const users = await db.getAllUsers()

    res.json(users)
  } catch (error) {
    res.status(200).json({ message: 'Something went wrong' })
  }
})

router.get('/:flatId', async (req, res) => {
  try {
    const flatId = req.params.flatId
    const usersWithFlatId = await db.getUsersByFlatId(flatId)

    res.json(usersWithFlatId)
  } catch (error) {
    res.status(200).json({ message: 'Something went wrong' })
  }
})

router.post('/', async (req, res, next) => {
  try {
    const data = req.body
    const id = await db.addUser({
      ...data,
    })
    res.json(id).sendStatus(StatusCodes.CREATED)
  } catch (err) {
    next(err)
  }
})

export default router
