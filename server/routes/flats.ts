import { Router } from 'express'
// import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'

import * as db from '../db/flats.ts'
import { flatDataSchema } from '../../types/Flat.ts'
import { Flat } from '../../types/Flat.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const flats: Flat[] = await db.getAllFlats()

    res.json({ flats: flats.map((flat) => flat.id) })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/auth/:id', async (req, res, next) => {
  try {
    // get the flat id back from the db as assign to variable
    // e.g. const flatId = await db.getFlatByAuthId
    // then getFlatById(flatId)
    const flat = await db.getFlatById(req.params.id)
    res.json(flat)
  } catch (err) {
    next(err)
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

router.post('/', async (req, res, next) => {
  try {
    const form = req.body
    const validationResult = flatDataSchema.safeParse(form)

    if (!validationResult.success) {
      res.sendStatus(StatusCodes.BAD_REQUEST)
      next()
    }

    const id = await db.addFlat(form)
    res.json(id)
  } catch (err) {
    next(err)
  }
})

export default router
