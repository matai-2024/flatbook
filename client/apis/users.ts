import request from 'superagent'
import { User, UserData } from '../../types/User.ts'

const rootUrl = '/api/v1/users'

export async function getUser() {
  const res = await request.get(rootUrl)
  return res.body as User[]
}

export async function getUserById(id: number) {
  const res = await request.get(rootUrl + '/' + id)
  return res.body as UserData
}

export async function getUserByFlatId(id: number) {
  const res = await request.get(rootUrl + 'flat/' + id)
  return res.body as User[]
}

export async function deleteUserById(id: number, token: string) {
  await request
    .delete(rootUrl + '/' + id)
    .set('Authorization', `Bearer ${token}`)
}

export async function addUserProfile(newProfile: UserData, token: string) {
  const res = await request
    .post(rootUrl)
    .set('Authorization', `Bearer ${token}`)
    .send(newProfile)
  return res.body as number
}
