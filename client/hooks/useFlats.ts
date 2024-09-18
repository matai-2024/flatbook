import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addFlat, getFlatById } from '../apis/flats.ts'
import { FlatData } from '../../types/Flat.ts'
import { useAuth0 } from '@auth0/auth0-react'
import { getFlattiesByFlatId } from '../apis/users.ts'

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

export function useFlatbyId(flatId: string) {
  const { getAccessTokenSilently } = useAuth0()

  return useQuery({
    queryKey: ['flat-info'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      const flatInfo = await getFlatById(accessToken, flatId)
      return flatInfo
    },
  })
}

export function useFlattiesInfo(flatId: string) {
  const { getAccessTokenSilently } = useAuth0()

  return useQuery({
    queryKey: ['flatties-info'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      const flatInfo = await getFlattiesByFlatId(accessToken, flatId)
      return flatInfo
    },
  })
}
