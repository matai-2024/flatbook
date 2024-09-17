import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addFlat } from '../apis/flats.ts'
import { FlatData } from '../../types/Flat.ts'

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
