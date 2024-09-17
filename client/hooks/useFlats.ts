import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addFlat } from '../apis/flats.ts'
import { FlatData } from '../../types/Flat.ts'
import { useAuth0 } from '@auth0/auth0-react'
import { getFlatByAuthId } from '../apis/users.ts'

export function useGetFlatByAuthId() {
  const { getAccessTokenSilently, user } = useAuth0()
  const authId = user?.sub ? user.sub : ''

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['userFlatId'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      const flatId = await getFlatByAuthId(authId, accessToken)
      return flatId
    },
  })
  return { data, isLoading, isError, error }
}

interface createFlatData {
  data: FlatData
  token: string
}

export function useCreateFlat() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ data, token }: createFlatData) => {
      const flatId = addFlat(data, token)
      return flatId
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['flats'] })
    },
  })
}
