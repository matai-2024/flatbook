import { LocalSpinner } from '../../components/UI/WaitingSpinners'
import { useFlatInfo } from '../../hooks/useFlats'

export default function Sidebar() {
  const { data, isLoading, isError, error } = useFlatInfo('1') // TODO: set the flatId dynamically

  if (isLoading) {
    return (
      <LocalSpinner
        loadingText="Loading flat info..."
        testId="flat-info-loader"
      />
    )
  }

  if (isError || !data) {
    return <p>Failed to load flat information due to {String(error)}</p>
  }

  const flatties = ['Alicia', 'Elias', 'Logan', 'Ryan'] // query flatties by flat id

  return (
    <>
      <h2 className="text-5xl font-bold">{data.title}</h2>
      <br />
      <p>{data.description}</p>
      <br />
      <h2 className="text-3xl font-bold">Flatties</h2>
      <ul>
        {flatties.map((name, index) => {
          return <li key={index}>name</li>
        })}
      </ul>
    </>
  )
}
