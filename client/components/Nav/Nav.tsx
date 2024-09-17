import LoginButton from '../LoginButton'
import logo from '../../assets/flatbook-logo.png'
import LogoutButton from '../LogoutButton'
import Button from '../UI/Button'
import { useNavigate } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'

function Nav() {
  const navigate = useNavigate()

  return (
    <div className="bg-base100 navbar shadow-md">
      <div className="ml-8 flex-1">
        <button onClick={() => navigate('/')}>
          <img src={logo} alt="logo" className=" w- btn btn-ghost h-28" />
        </button>
      </div>
      <div className="mr-20">
        <IfNotAuthenticated>
          <LoginButton />
        </IfNotAuthenticated>
        <IfAuthenticated>
          <div>
            {/* TODO - Change dashboard route to be dynamic */}
            <Button
              onClick={() => navigate('/dashboard/1')}
              className="btn btn-accent"
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
