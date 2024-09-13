import { useAuth0 } from '@auth0/auth0-react'
import Button from './UI/Button'

function RegisterButton() {
  const { loginWithRedirect } = useAuth0()

  function handleRegister() {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${window.location.origin}/placeholder(user-signup-form)`,
      },
    })
  }

  return <Button onClick={handleRegister}>Get Started</Button>
}

export default RegisterButton
