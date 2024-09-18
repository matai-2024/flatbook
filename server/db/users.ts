import db from './connection.ts'
import { User } from '../../types/User.ts'

export async function getAllUsers() {
  const users = await db('users').select()
  return users as User[]
}

export async function addUser(data: User) {
  const [id] = await db('users').insert(data)
  return id
}

export async function getUsersByFlatId(flatId: string) {
  const users: User[] = await db('users').where({ flatId })
  return users
}

