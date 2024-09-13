import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'

import * as db from '../db/flats.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const flats = await db.getAllFlats()

    res.json({ flats: flats.map((flat) => flat.name) })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const flat = await db.getFlatById(req.params.id)
    res.json(flat)
  } catch (err) {
    next(err)
  }
})

router.post('/', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }

  try {
    const { address, name, phone } = req.body
    const id = await db.addFlat({ address, name, phone })
    res
      .setHeader('Location', `${req.baseUrl}/${id}`)
      .sendStatus(StatusCodes.CREATED)
  } catch (err) {
    next(err)
  }
})

export default router
