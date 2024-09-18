import { useAuth0 } from '@auth0/auth0-react'
import { LocalSpinner } from '../../components/UI/WaitingSpinners'
import { useFlatbyId, useFlattiesInfo } from '../../hooks/useFlats'

export default function Sidebar() {
  // TODO: accept user.sub as a prop to input into 'useFlatById(user.sub)'
  const { user } = useAuth0() // use user to render id

  const { data } = useFlatbyId('1') // TODO: replace '1' with authId from user to get back the flatId of that user
  const { data: flatties, isLoading, isError, error } = useFlattiesInfo('1') // TODO: replace '1' the value of above

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

  // const flatties = ['Alicia', 'Elias', 'Logan', 'Ryan'] // query flatties by flat id

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
