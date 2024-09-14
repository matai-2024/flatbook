import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { ChoreData } from '../../types/Chore'

export default function useCreateChore() {
  const qc = useQueryClient()

  return useMutation({
    mutationFn: async (chore: ChoreData) => {
      await request.post('/api/v1/chores/').send(chore)
    },
    onSuccess: async () => {
      qc.invalidateQueries({ queryKey: ['chores'] })
    },
  })
}
