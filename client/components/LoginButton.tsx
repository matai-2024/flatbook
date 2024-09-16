import { useAuth0 } from '@auth0/auth0-react'
import Button from './UI/Button'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  function handleLogin() {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'login',
        redirect_uri: `${window.location.origin}/dashboard`,
      },
    })
  }

  return (
    <Button onClick={handleLogin} data-testid="loginButton">
      Log In
    </Button>
  )
}

export default LoginButton
