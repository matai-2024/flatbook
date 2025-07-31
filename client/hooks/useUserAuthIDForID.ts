import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { User } from '../../types/User'
import { useAuth0 } from '@auth0/auth0-react'

export default function useUserAuthIDForID() {
  const { user } = useAuth0()
  let authID

  return useQuery({
    queryFn: async () => {
      authID = user?.sub
      const res = await request.get(`/api/v1/users/auth/${authID}`)
      return res.body as User[]
    },
    queryKey: [`user-${authID}`],
  })
}
