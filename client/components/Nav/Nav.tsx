import LoginButton from '../LoginButton'
import logo from '../../assets/flatbook-logo.png'
import LogoutButton from '../LogoutButton'
import Button from '../UI/Button'

interface Props {
  navState: boolean
}

function Nav(props: Props) {
  return (
    <div className="bg-base100 navbar mb-5 shadow-md">
      <div className="ml-8 flex-1">
        <img src={logo} alt="logo" className=" w- btn btn-ghost h-28" />
      </div>
      <div className="mr-20">
        {props.navState === false ? (
          <LoginButton />
        ) : (
          <div>
            <Button className="btn btn-accent">Flat Dashboard</Button>{' '}
            <LogoutButton />
          </div>
        )}
      </div>
    </div>
  )
}

export default Nav
