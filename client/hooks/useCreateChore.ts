import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'

export default function useCreateChore() {
  const qc = useQueryClient()

  return useMutation({
    mutationFn: async (chore) => {
      await request.post('/api/v1/chores/').send(chore)
    },
    onSuccess: async () => {
      qc.invalidateQueries({ queryKey: ['chore'] })
    },
  })
}
