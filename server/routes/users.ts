import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'

import * as db from '../db/users.ts'

const router = Router()

//TODO-- add checkJWT & revisit ID

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const users = await db.getUserById(+id)

    res.json(users)
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
