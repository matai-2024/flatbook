import request from 'superagent'
import { FlatData } from '../../types/Flat'

const rootUrl = '/api/v1/flats'

export function getFlats(): Promise<string[]> {
  return request.get(rootUrl + '/flats').then((res) => {
    return res.body.flats
  })
}

export async function addFlat(newFlat: FlatData, token: string) {
  const date = new Date(Date.now()).toISOString()

  const res = await request
    .post(rootUrl)
    .set('Authorization', `Bearer ${token}`)
    .send({ ...newFlat, createdAt: date })
  return res.body as number
}
