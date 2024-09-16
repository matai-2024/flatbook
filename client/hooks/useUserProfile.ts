import { useQuery } from '@tanstack/react-query'
import { User } from '../../types/User.ts'
import request from 'superagent'

export default function useUserProfile(id: string) {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await request.get(`/api/v1/users/${id}`)
      return res.body as User[]
    },
  })
}
