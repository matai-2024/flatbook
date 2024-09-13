// import { useFlats } from '../hooks/useFlats.ts'
import Nav from './Nav/Nav.tsx'
import AppLayout from './AppLayout'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'

function App() {
  // const { data } = useFlats()
  const { isAuthenticated } = useAuth0()
  const [navState, setNavState] = useState(false)

  useEffect(() => {
    isAuthenticated === false ? setNavState(false) : setNavState(true)
  }, [isAuthenticated])
  return (
    <>
      <Nav navState={navState} />
      <AppLayout />
    </>
  )
}

export default App
