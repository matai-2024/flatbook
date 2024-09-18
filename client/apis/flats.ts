import request from 'superagent'
import { Flat, FlatData } from '../../types/Flat'

const baseUrl = '/api/v1/flats/'

export async function getFlatById(
  token: string,
  flatId: string,
): Promise<Flat> {
  const res = await request
    .get(`${baseUrl}/${flatId}`)
    .set('Authorization', `Bearer ${token}`)
  return res.body as Flat
}

export async function addFlat(newFlat: FlatData, token: string) {
  const date = new Date(Date.now()).toISOString()

  const res = await request
    .post(baseUrl)
    .set('Authorization', `Bearer ${token}`)
    .send({ ...newFlat, createdAt: date })
  return res.body as number
}
