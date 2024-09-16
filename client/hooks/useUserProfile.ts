import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { User, UserData } from '../../types/User'

export function useUserProfileId(id: string) {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await request.get(`/api/v1/users/${id}`)
      return res.body as User[]
    },
  })
}

export function useUserProfileData(id: string) {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await request.get(`/api/v1/users/${id}`)
      return res.body as UserData[]
    },
  })
}
