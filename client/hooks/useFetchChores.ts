import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Chore } from '../../types/Chore'

export default function useFetchChores(flatId: string) {
  return useQuery({
    queryKey: ['chores'],
    queryFn: async () => {
      const res = await request.get(`/api/v1/chores/${flatId}`)
      return res.body as Chore[]
    },
  })
}
