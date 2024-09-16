import db from './connection.ts'
import { FlatData } from '../../types/Flat.ts'

export async function getAllFlats() {
  const flat = await db('flats').select()
  return flat as FlatData[]
}

export async function getFlatById(id: number | string) {
  const flat = await db('flats').select().first().where({ id })
  return flat as FlatData
}

export async function addFlat(data: FlatData) {
  const [id] = await db('flats').insert(data)
  return id
}
