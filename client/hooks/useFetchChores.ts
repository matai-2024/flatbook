import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Chore } from '../../types/Chore'

export default function useFetchChores(id: string) {
  return useQuery({
    queryKey: ['chores'],
    queryFn: async () => {
      const res = await request.get(`/api/v1/chores/${id}`)
      return res.body as Chore[]
    },
  })
}
