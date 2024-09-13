import db from './connection.ts'
import { Flat, FlatData } from '../../models/flat.ts'

export async function getAllFlats() {
  const fruit = await db('flats').select()
  return fruit as Flat[]
}

export async function getFlatById(id: number | string) {
  const fruit = await db('flats').select().first().where({ id })
  return fruit as Flat
}

export async function addFlat(data: FlatData) {
  const [id] = await db('flats').insert(data)
  return id
}
