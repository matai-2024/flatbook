import { ChoreData } from './../../types/Chore'
import { Router } from 'express'
import * as db from '../db/chores.ts'
import { choreDataSchema } from '../../types/Chore.ts'

const router = Router()

const invalidChoreResponse = {
  error: 'Invalid chore data',
  message: 'Valid chores must be structured as below',
  validChore: {
    flatId: 'number',
    title: 'string',
    description: 'string',
    priority: 'string (0-10)',
    deadline: 'ISO date string',
    createdAt: 'ISO date string',
    isCompleted: 'boolean',
  },
}

router.get('/:id', async (req, res) => {
  try {
    const flatId = req.params.id
    const chores = await db.getChores(+flatId)
    res.json(chores)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/:id', async (req, res, next) => {
  try {
    const newChore: ChoreData = req.body
    const validationResult = choreDataSchema.safeParse(newChore)

    if (!validationResult.success) {
      res.status(400).json(invalidChoreResponse)
      return
    }

    await db.addChore(newChore)
    res.sendStatus(201)
  } catch (err) {
    next(err)
  }
})

export default router
