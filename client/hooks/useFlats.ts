import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getFlats } from '../apis/flats.ts'

export function useFlats() {
  const query = useQuery({ queryKey: ['flats'], queryFn: getFlats })
  return {
    ...query,
    // Extra queries go here e.g. addFlat: useAddFlat()
  }
}

export function useFlatsMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['flats'] })
    },
  })

  return mutation
}

// Query functions go here e.g. useAddFlat
/* function useAddFlat() {
  return useFlatsMutation(addFlat)
} */
