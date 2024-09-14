import useFetchChores from '../hooks/useFetchChores'
import { Chore } from '../../types/Chore'
import { useParams } from 'react-router-dom'

export default function ChoresList() {
  const flatId = useParams()

  const { data: chores, isLoading, isError, error } = useFetchChores(flatId)

  const handleRenderChores = () => {
    if (chores) {
      return (
        <ul>
          {chores.map((chore: Chore) => (
            <li key={chore.id}>{chore.title}</li>
          ))}
        </ul>
      )
    } else {
      return <p>No data...</p>
    }
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError || !chores) {
    return <p>Failed {String(error)}</p>
  }

  return <>{handleRenderChores()}</>
}
