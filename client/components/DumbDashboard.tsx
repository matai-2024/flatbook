import { useParams } from 'react-router-dom'
import ChoresList from './ChoresList/ChoresList'
import CreateChore from './CreateChore/CreateChore'

export default function DumbDashboard() {
  const { id } = useParams()

  if (id)
    return (
      <>
        <CreateChore id={id} />
        <ChoresList id={id} />
      </>
    )
}
