import { useAuth0 } from '@auth0/auth0-react'
import Button from './UI/Button'

const RegisterButton = () => {
  const { loginWithRedirect } = useAuth0()

  function handleRegister() {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup',
        redirect_uri: `${window.location.origin}/signup`,
      },
    })
  }

  return (
    <Button
      className="h-28 w-64 rounded-2xl text-3xl font-bold"
      onClick={handleRegister}
    >
      Get Started
    </Button>
  )
}

export default RegisterButton
