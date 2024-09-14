import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { ChoreData } from '../../types/Chore'
import { Params } from 'react-router-dom'

export default function useCreateChore(flatId: Readonly<Params<string>>) {
  const qc = useQueryClient()
  const { id } = flatId
  return useMutation({
    mutationFn: async (chore: ChoreData) => {
      await request.post(`/api/v1/chores/${id}`).send(chore)
    },
    onSuccess: async () => {
      qc.invalidateQueries({ queryKey: ['chores'] })
    },
  })
}
