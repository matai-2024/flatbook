import { Chore, ChoreData } from '../../types/Chore.ts'
import db from './connection.ts'

export async function getChores(flatId: number) {
  const chores = await db('chores').select().where('flat_id', '=', flatId)
  return chores as Chore[]
}

export async function addChore(data: ChoreData) {
  const {
    flatId,
    title,
    description,
    priority,
    deadline,
    createdAt,
    isCompleted,
  } = data

  return await db('chores').insert(
    {
      flat_id: flatId,
      title: title,
      description: description,
      priority: priority,
      deadline: deadline,
      created_at: createdAt,
      is_completed: isCompleted,
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
