import { useFlats } from '../hooks/useFlats.ts'

function App() {
  const { data } = useFlats()

  return (
    <>
      <div className="app">
        <h1 className="text-3xl font-bold underline">
          Fullstack Boilerplate - with Flats!
        </h1>
        <ul>{data && data.map((flat) => <li key={flat}>{flat}</li>)}</ul>
      </div>
    </>
  )
}

export default App
