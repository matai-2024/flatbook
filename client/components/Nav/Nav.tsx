import LoginButton from '../LoginButton'
import logo from '../../assets/flatbook-logo.png'
import LogoutButton from '../LogoutButton'
import Button from '../UI/Button'
import { useNavigate } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'
import { useIsFetching } from '@tanstack/react-query'
import { GlobalSpinner } from '../UI/WaitingSpinners'

function Nav() {
  const navigate = useNavigate()
  const isFetching = useIsFetching()

  return (
    <div className="bg-base100 navbar relative drop-shadow-xl">
      <div className="ml-8 flex-1">
        <button onClick={() => navigate('/')}>
          <img src={logo} alt="logo" className="w- btn btn-ghost h-28" />
        </button>
        {Boolean(isFetching) && <GlobalSpinner />}
      </div>
      <div className="mr-20">
        <IfNotAuthenticated>
          <LoginButton />
        </IfNotAuthenticated>
        <IfAuthenticated>
          <div>
            {/* todo-change profile button to be dynamic */}
            {/* TODO - Change dashboard route to be dynamic */}
            <Button
              onClick={() => navigate('/dashboard')}
              className="btn btn-accent"
            >
              Profile Page
            </Button>
            <Button
              onClick={() => navigate('/dashboard/1')}
              className="btn btn-accent m-1"
            >
              Flat Dashboard
            </Button>
            <LogoutButton />
          </div>
        </IfAuthenticated>
      </div>
    </div>
  )
}

export default Nav
