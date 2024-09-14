import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Chore } from '../../types/Chore'
import { Params } from 'react-router-dom'

export default function useFetchChores(flatParams: Readonly<Params<string>>) {
  const { id } = flatParams
  return useQuery({
    queryKey: ['chores'],
    queryFn: async () => {
      const res = await request.get(`/api/v1/chores/${id}`)
      return res.body as Chore[]
    },
  })
}
