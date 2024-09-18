import { Router } from 'express'

import * as db from '../db/users.ts'
import { StatusCodes } from 'http-status-codes'

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
