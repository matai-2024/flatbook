import { useAuth0 } from '@auth0/auth0-react'
import Button from './UI/Button'

const RegisterButton = () => {
  const { loginWithRedirect } = useAuth0()

  function handleRegister() {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup',
      },
    })
  }

  return <Button onClick={handleRegister}>Get Started</Button>
}

export default RegisterButton
