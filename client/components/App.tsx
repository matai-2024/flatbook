import { useFlats } from '../hooks/useFlats.ts'
import Nav from './Nav'
import AppLayout from './AppLayout'

function App() {
  const { data } = useFlats()
  return (
    <>
      <ul>{data && data.map((flat) => <li key={flat}>{flat}</li>)}</ul>
      <Nav />
      <AppLayout />
    </>
  )
}

export default App
