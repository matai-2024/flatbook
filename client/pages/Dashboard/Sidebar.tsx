import { LocalSpinner } from '../../components/UI/WaitingSpinners'
import { useFlatbyId, useFlattiesInfo } from '../../hooks/useFlats'

interface Props {
  flatId: string
}

export default function Sidebar({ flatId }: Props) {
  const { data } = useFlatbyId(flatId)
  const { data: flatties, isLoading, isError, error } = useFlattiesInfo(flatId)

  if (isLoading) {
    return (
      <LocalSpinner
        loadingText="Loading flat info..."
        testId="flat-info-loader"
      />
    )
  }

  if (isError || !flatties) {
    return <p>Failed to load flat information due to {String(error)}</p>
  }

  if (flatties && data) {
    return (
      <>
        {/* <h2 className="text-5xl font-bold">{flatties.firstName}</h2>
        <br />
        <p>{flatties.description}</p> */}
        <br />
        <h2 className="text-3xl font-bold">{data.title}</h2>
        <p>{data.description}</p>
        <p>{data.streetAddress}</p>

        <br />
        <ul>
          {flatties.map((name, index) => {
            return <li key={index}>{`${name.firstName} ${name.lastName}`}</li>
          })}
        </ul>
        <br />
        <p>{`Admin: ${data.flatAdmin}`}</p>
      </>
    )
  }
}
