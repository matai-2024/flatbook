import request from 'superagent'
import { Chore, ChoreData } from '../../types/Chore'

const baseUrl = '/api/v1/chores'

export async function getChores(token: string, flatId: string) {
  const res = await request
    .get(`${baseUrl}/${flatId}`)
    .set('Authorization', `Bearer ${token}`)
  return res.body as Chore[]
}

export async function addChore(token: string, newChore: ChoreData) {
  const res = await request
    .post(`${baseUrl}/${newChore.flatId}`)
    .send({ ...newChore })
    .set('Authorization', `Bearer ${token}`)
  return res
}
