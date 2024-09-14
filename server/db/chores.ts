import { Chore, ChoreData } from '../../types/Chore.ts'
import db from './connection.ts'

export async function getChores(flatId: number) {
  const chores = await db('chores')
    .where('flat_id', '=', flatId)
    .select(
      'flat_id as flatId',
      'title',
      'description',
      'priority',
      'deadline',
      'created_at as createdAt',
      'is_completed as isCompleted',
    )
  return chores as Chore[]
}

export async function addChore(flat_id: number, data: ChoreData) {
  const { title, description, priority, deadline, createdAt } = data

  return await db('chores').insert(
    {
      flat_id: flat_id,
      title: title,
      description: description,
      priority: priority,
      deadline: deadline,
      created_at: createdAt,
    },
    ['id'],
  )
}

// Getting chore by id to be used for referencing a chore within announcements
// Not needed for MVP

// export async function getChoreById(id: number | string) {
//   const chore = await db('chores').select().first().where({ id })
//   return chore as Chore
// }
