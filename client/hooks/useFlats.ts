import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addFlat, getFlatById } from '../apis/flats.ts'
import { FlatData } from '../../types/Flat.ts'
import { useAuth0 } from '@auth0/auth0-react'
import { getFlatByAuthId, getFlattiesByFlatId } from '../apis/users.ts'

export function useGetFlatByAuthId() {
  const { getAccessTokenSilently, user } = useAuth0()
  const authId = user?.sub ? user.sub : ''

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['userFlatId'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      const res = await getFlatByAuthId(authId, accessToken)

      return res.flatId
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
