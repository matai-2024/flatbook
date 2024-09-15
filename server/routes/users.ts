import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'

import * as db from '../db/users.ts'

const router = Router()

//TODO-- ADD CHECKJWT STUFF

router.get('/', async (req, res) => {
  try {
    const users = await db.getAllUsers()

    res.json(users)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {
      auth0Id,
      flatId,
      firstName,
      lastName,
      nickName,
      about,
      email,
      mobile,
      profilePhoto,
      createdAt,
    } = req.body
    const id = await db.addUser({
      auth0Id,
      flatId,
      firstName,
      lastName,
      nickName,
      about,
      email,
      mobile,
      profilePhoto,
      createdAt,
    })
    res
      .setHeader('Location', `${req.baseUrl}/${id}`)
      .json(id)
      .sendStatus(StatusCodes.CREATED)
  } catch (err) {
    next(err)
  }
})

export default router
