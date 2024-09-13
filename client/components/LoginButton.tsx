import { useAuth0 } from '@auth0/auth0-react'
import Button from './UI/Button'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Button onClick={() => loginWithRedirect()} data-testid="loginButton">
      Log In
    </Button>
  )
}

export default LoginButton
