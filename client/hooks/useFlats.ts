import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { addFlat, getFlats } from '../apis/flats.ts'
import { FlatData } from '../../types/Flat.ts'

export function useFlats() {
  const query = useQuery({ queryKey: ['flats'], queryFn: getFlats })
  return {
    ...query,
    // Extra queries go here e.g. addFlat: useAddFlat()
  }
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
