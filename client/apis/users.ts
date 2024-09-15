import request from 'superagent'
import { UserProfile, UserProfileData } from '../../models/forms.ts'

const rootUrl = '/api/v1/users'

export async function getProfile() {
  const res = await request.get(rootUrl)
  return res.body as UserProfile[]
}

export async function getProfileById(id: number) {
  const res = await request.get(rootUrl + '/' + id)
  return res.body as UserProfile
}

export async function getProfileByFlatId(id: number) {
  const res = await request.get(rootUrl + 'flat/' + id)
  return res.body as UserProfile[]
}

export async function deleteProfileById(id: number, token: string) {
  await request
    .delete(rootUrl + '/' + id)
    .set('Authorization', `Bearer ${token}`)
}

export async function addProfile(newProfile: UserProfileData, token: string) {
  const res = await request
    .post(rootUrl)
    .set('Authorization', `Bearer ${token}`)
    .send(newProfile)
  return res.body as number
}
