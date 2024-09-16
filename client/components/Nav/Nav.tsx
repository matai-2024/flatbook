import LoginButton from '../LoginButton'
import logo from '../../assets/flatbook-logo.png'
import LogoutButton from '../LogoutButton'
import Button from '../UI/Button'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

function Nav() {
  const { isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  return (
    <div className="bg-base100 navbar absolute py-0 shadow-md">
      <div className="ml-6 flex-1">
        <button onClick={() => navigate('/')}>
          <img src={logo} alt="logo" className=" w- btn btn-ghost h-28" />
        </button>
      </div>
      <div className="mr-20">
        {isAuthenticated === false ? (
          <LoginButton />
        ) : (
          <div>
            <button onClick={() => navigate('/profile')}>
              <Button className="btn btn-accent">Profile Page</Button>
            </button>
            <button onClick={() => navigate('/dashboard')}>
              <Button className="btn btn-accent m-1">Flat Dashboard</Button>
            </button>
            <LogoutButton />
          </div>
        )}
      </div>
    </div>
  )
}

export default Nav
