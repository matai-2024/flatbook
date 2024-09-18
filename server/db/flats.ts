import db from './connection.ts'
import { Flat, FlatData } from '../../types/Flat.ts'

export async function getAllFlats() {
  const flat = await db('flats').select()
  return flat as Flat[]
}

export async function getFlatById(id: number | string) {
  const flat = await db('flats').select().first().where({ id })
  return flat as Flat
}

export async function addFlat(data: FlatData) {
  const [id] = await db('flats').insert(data)
  await db('users').where({ auth0Id: data.flatAdmin }).update({ flatId: id })

  return id
}
