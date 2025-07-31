import Calendar from '../../components/Calendar/Calendar'
import AvatarIcon from '../../components/UI/AvatarIcon'
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
      <div className="sidebar h-full rounded-xl bg-white p-12 shadow-xl">
        <div className="flex-grow">
          <div className="">
            <h2 className="mb-4 text-center text-5xl font-bold text-primary">
              {data.title}
            </h2>
            <p className="mb-8 text-center text-lg leading-relaxed text-secondary">
              Home, sweet-home
            </p>
            <AvatarIcon
              className="h-full w-full rounded-full object-cover ring-4 ring-accent"
              src={
                'https://i.pinimg.com/736x/4b/56/28/4b56284d1fb20107551932d87453d96c.jpg'
              }
            />
            <hr className="my-8 h-px border-0 bg-info" />
          </div>
          <h2 className="mb-4 text-center text-3xl font-semibold text-primary">
            Flat Calendar
          </h2>
          <Calendar />
          <h2 className="mb-4 text-center text-3xl font-semibold text-primary">
            Flatties
          </h2>

          <ul className="space-y-2 p-1 text-center text-lg text-secondary">
            {flatties.map((name, index) => {
              return (
                <li
                  key={index}
                  className="rounded-lg from-primary to-primary transition duration-200 ease-in-out hover:bg-gradient-to-r hover:text-accent-content"
                >
                  {/* TODO: profile link */}
                  <a
                    href={`/profile/${index + 1}`}
                    className="hover:text-white"
                  >
                    {name.firstName}
                  </a>
                </li>
              )
            })}
          </ul>
          <hr className="my-8 h-px border-0 bg-info" />
          <div>
            <h2 className="mb-4 text-center text-3xl font-semibold text-primary">
              Personal Calendar
            </h2>
            <Calendar />
          </div>
        </div>
      </div>
    )
  }
}
