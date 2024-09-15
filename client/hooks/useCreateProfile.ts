import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addProfile } from '../apis/users.ts'
import { User } from '../../models/forms.ts'

interface Props {
  data: User
  token: string
}

export default function useCreateProfile() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ data, token }: Props) => {
      const id = addProfile(data, token)
      return id
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profiles'] })
    },
  })
}
