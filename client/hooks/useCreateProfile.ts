import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addProfile } from '../apis/apiUserProfile.ts'
import { UserProfileData } from '../../models/forms.ts'

interface Props {
  data: UserProfileData
  token: string
}

export default function useCreateProfile() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ data, token }: Props) => {
      // eslint-disable-next-line no-console
      console.log('mutation data', data)

      const id = addProfile(data, token)
      return id
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profiles'] })
    },
  })
}
