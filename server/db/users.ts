import db from './connection.ts'
import { User } from '../../types/User.ts'

export async function getAllUsers() {
  const users = await db('users').select()
  return users as User[]
}

export async function getUserById(id: number) {
  const users = await db('users').where('id', '=', id)
  return users as User[]
}

export async function getUserByAuthId(authID: string) {
  const user = await db('users').where('auth0Id', '=', authID)
  return user as User[]
}

export async function addUser(data: User) {
  const [id] = await db('users').insert(data)
  return id
}

export async function getUsersByFlatId(flatId: string) {
  const users: User[] = await db('users').where({ flatId })
  return users
}

export async function getFlatByAuthId(auth0Id: string) {
  const flatId = await db('users').select('flatId').first().where({ auth0Id })
  return flatId as string
}
