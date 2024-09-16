import { useQuery } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { getChores } from '../apis/chores'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ChoreData } from '../../types/Chore'
import { addChore } from '../apis/chores'

function useChores(flatId: string) {
  const { getAccessTokenSilently } = useAuth0()
  const queryClient = useQueryClient()

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['chores'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      const chores = await getChores(accessToken, flatId)
      return chores
    },
  })

  const addMutation = useMutation({
    mutationFn: async (chore: ChoreData) => {
      const accessToken = await getAccessTokenSilently()
      return await addChore(accessToken, chore)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['chores'] })
    },
  })

  return { data, isLoading, isError, error, addMutation }
}

export default useChores
