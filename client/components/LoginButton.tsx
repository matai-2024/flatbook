import { useAuth0 } from '@auth0/auth0-react'
import Button from './UI/Button'

function LoginButton() {
  const { loginWithRedirect } = useAuth0()

  function handleLogin() {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${window.location.origin}/landing-page`,
      },
    })
  }

  return <Button onClick={handleLogin}>Log In</Button>
}

export default LoginButton
