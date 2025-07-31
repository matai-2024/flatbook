import { Router } from 'express'

import * as db from '../db/users.ts'
import { StatusCodes } from 'http-status-codes'

const router = Router()

//TODO-- add checkJWT & revisit ID

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const users = await db.getUserById(+id)

    res.json(users)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/auth/:id', async (req, res) => {
  try {
    const id: string = req.params.id
    const userID = await db.getUserByAuthId(id)

    res.json(userID)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/flatties/:flatId', async (req, res) => {
  try {
    const flatId = req.params.flatId
    const usersWithFlatId = await db.getUsersByFlatId(flatId)

    res.json(usersWithFlatId)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/flat/:id', async (req, res, next) => {
  try {
    const flatId = await db.getFlatByAuthId(req.params.id)
    res.json(flatId)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const data = req.body
    const id = await db.addUser({
      ...data,
    })
    res.status(StatusCodes.CREATED).json(id)
  } catch (err) {
    next(err)
  }
})

export default router
