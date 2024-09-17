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
    <Button
      onClick={() =>
        loginWithRedirect({
          authorizationParams: {
            redirect_uri: `${window.location.origin}/dashboard`, // Todo: can redirect to User Profile page as well when ready
          },
        })
      }
      data-testid="loginButton"
    >
      Log In
    </Button>
  )
}

export default LoginButton
