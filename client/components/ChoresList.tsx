import useFetchChores from '../hooks/useFetchChores'
import { Chore } from '../../types/Chore'
import { useParams } from 'react-router-dom'
import CreateChore from './CreateChore'

export default function ChoresList() {
  const flatId = useParams()

  const { data: chores, isLoading, isError, error } = useFetchChores(flatId)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError || !chores) {
    return <p>Failed {String(error)}</p>
  }

  if (chores) {
    console.log(chores)
    return (
      <>
        <CreateChore flatId={flatId} />
        <ul>
          {chores.map((chore: Chore) => (
            <div className="collapse collapse-arrow bg-base-200" key={chore.id}>
              <input type="radio" name={`chore-list-item`} />
              <h2 className="collapse-title text-xl font-medium">
                {chore.title}
              </h2>
              <div className="collapse-content">
                {typeof chore.description === 'string' &&
                chore.description.length > 0 ? (
                  <li>
                    <h3 className="inline-block">Description: </h3>
                    <p className="text-primary">{chore.description}</p>
                  </li>
                ) : null}

                <li>Priority:</li>
                <progress
                  className="progress w-56"
                  value={`${chore.priority}`}
                  max="10"
                ></progress>
                <li>
                  Created: {chore.createdAt?.split('-').reverse().join('-')}
                </li>
                <li>
                  Deadline: {chore.deadline?.split('-').reverse().join('-')}
                </li>
              </div>
            </div>
          ))}
        </ul>
      </>
    )
  } else {
    return <p>No data...</p>
  }
}
