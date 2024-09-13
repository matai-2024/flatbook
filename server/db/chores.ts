import db from './connection.ts'
import { Flat, FlatData } from '../../models/flat.ts'

export async function getAllFlats() {
  const chores = await db('chores').select()
  // return flat as Flat[]
}

export async function getFlatById(id: number | string) {
  const flat = await db('flats').select().first().where({ id })
  // return flat as Flat
}

export async function addFlat(data: FlatData) {
  const [id] = await db('flats').insert(data)
  // return id
}
