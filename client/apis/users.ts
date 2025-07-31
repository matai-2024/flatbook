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

export async function getUserIdByAuthID(authID: string) {
  const res = await request.get(rootUrl + '/auth/' + authID)
  return res.body as UserData
}

export async function getUsersByFlatId(id: number) {
  const res = await request.get(rootUrl + 'flat/' + id)
  return res.body as User[]
}

export async function deleteUserById(id: number, token: string) {
  await request
    .delete(rootUrl + '/' + id)
    .set('Authorization', `Bearer ${token}`)
}

export async function addUserProfile(newProfile: User, token: string) {
  const res = await request
    .post(rootUrl)
    .set('Authorization', `Bearer ${token}`)
    .send({ ...newProfile, createdAt: String(Date.now()) })
  return res.body as number
}

export async function getFlattiesByFlatId(token: string, flatId: string) {
  const res = await request
    .get(`${rootUrl}/flatties/${flatId}`)
    .set('Authorization', `Bearer ${token}`)
  return res.body as User[]
}

export async function getFlatByAuthId(authId: string, token: string) {
  const res = await request
    .get(`${rootUrl}/flat/${authId}`)
    .set('Authorization', `Bearer ${token}`)
  return res.body
}

export async function setFlatId(authId: User, flatId: number, token: string) {
  const res = await request
    .post(rootUrl)
    .set('Authorization', `Bearer ${token}`)
    .send({ authId, flatId })
  return res.body as number
}
