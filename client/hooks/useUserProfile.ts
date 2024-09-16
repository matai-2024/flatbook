import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addUserProfile } from '../apis/users.ts'
import { User } from '../../models/forms.ts'

interface Props {
  data: User
  token: string
}

export default function useUserProfile() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ data, token }: Props) => {
      const id = addUserProfile(data, token)
      return id
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profiles'] })
    },
  })
}
