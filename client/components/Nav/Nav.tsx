import LoginButton from '../LoginButton'
import logo from '../Nav/flatbook-logo.png'
import Button from '../UI/Button'
import LogoutButton from '../LogoutButton'

interface Props {
  navState: boolean
}

function Nav(props: Props) {
  return (
    <div className="bg-base100 navbar m-5  ">
      <div className="ml-20 flex-1">
        <img src={logo} alt="logo" className=" btn btn-ghost h-32 w-36" />
      </div>
      <div className="mr-20">
        <Button className="btn-ghost mr-5">About</Button>
        {props.navState === false ? <LoginButton /> : <LogoutButton />}
      </div>
    </div>
  )
}

export default Nav
