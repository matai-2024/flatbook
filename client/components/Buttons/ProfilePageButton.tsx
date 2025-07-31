import { useNavigate } from 'react-router-dom'
import Button from '../UI/Button'
import useUserAuthIDForID from '../../hooks/useUserAuthIDForID'
import { useAuth0 } from '@auth0/auth0-react'

export default function ProfilePageButton() {
  const navigate = useNavigate()
  const { loginWithRedirect } = useAuth0()
  const { data: user } = useUserAuthIDForID()

  const handleProfilePage = async () => {
    if (!user) {
      loginWithRedirect({
        authorizationParams: {
          redirect_uri: `${window.location.origin}/signup`,
        },
      })
      return
    }

    const internalUser = user[0]
    if (internalUser === undefined || user[0].id === undefined) {
      navigate('/signup')
    } else {
      navigate(`/profile/${user[0].id}`)
    }
  }

  return (
    <Button onClick={handleProfilePage} className="btn btn-accent">
      Profile Page
    </Button>
  )
}
