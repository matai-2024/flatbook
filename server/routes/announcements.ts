import { Router } from 'express'
import * as db from '../db/chores.ts'
import {
  AnnouncementData,
  announcementDataSchema,
} from '../../types/Announcement.ts'

const router = Router()

// router.get('/:id', async (req, res) => {
//   try {
//     const flatId = req.params.id
//     const announcements = await db.getChores(+flatId)
//     res.json(announcements)
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong' })
//   }
// })

// router.post('/:id', async (req, res, next) => {
//   try {
//     const newAnnouncement: AnnouncementData = req.body
//     const validationResult = announcementDataSchema.safeParse(newAnnouncement)

//     if (!validationResult.success) {
//       res.status(400).json({ message: 'Invalid Announcement Schema'})
//       return
//     }

//     await db.addAnnouncement(newAnnouncement)
//     res.sendStatus(200)
//   } catch (err) {
//     next(err)
//   }
// })

// export default router
