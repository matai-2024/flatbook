import LoginButton from '../LoginButton'
import logo from '../Nav/flatbook-logo.png'
import LogoutButton from '../LogoutButton'

interface Props {
  navState: boolean
}

function Nav(props: Props) {
  return (
    <div className="bg-base100 navbar mb-5 shadow-md">
      <div className="ml-8 flex-1">
        <img src={logo} alt="logo" className=" btn btn-ghost h-28 w-32" />
      </div>
      <div className="mr-20">
        {props.navState === false ? <LoginButton /> : <LogoutButton />}
      </div>
    </div>
  )
}

export default Nav
