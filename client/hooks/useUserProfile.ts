import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addUserProfile } from '../apis/users.ts'
import { UserData } from '../../types/User.ts'

interface Props {
  data: UserData
  token: string
}

export default function useUserProfile() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ data, token }: Props) => {
      const id = addUserProfile(data, token)
      return id
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profiles'] })
    },
  })
}

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
