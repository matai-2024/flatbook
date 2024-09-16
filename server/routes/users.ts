import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'

import * as db from '../db/users.ts'
import { userDataSchema } from '../../types/User.ts'
import { useParams } from 'react-router-dom'

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

router.post('/', async (req, res, next) => {
  const validationResult = userDataSchema.safeParse(useParams)

  if (!validationResult.success) {
    res.status(400).json({ message: 'Validation denied' }) // Bad request
  }
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
