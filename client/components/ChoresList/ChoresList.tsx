import useChores from '../../hooks/useChores'
import { Chore } from '../../../types/Chore'
import { LocalSpinner } from '../UI/WaitingSpinners'

interface Props {
  flatId: string
}

export default function ChoresList({ flatId }: Props) {
  const { data: chores, isLoading, isError, error } = useChores(flatId)

  if (isLoading) {
    return (
      <LocalSpinner
        loadingText="Loading the chores..."
        testId="chores-list-loading"
      />
    )
  }

  if (isError || !chores) {
    return <p>Failed {String(error)}</p>
  }

  if (chores) {
    return (
      <>
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
                  <p>{`Created At: ${chore.createdAt?.split('-').reverse().join('-')}`}</p>
                </li>
                <li>
                  <p>
                    {`Deadline: ${chore.deadline?.split('-').reverse().join('-')}`}
                  </p>
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
