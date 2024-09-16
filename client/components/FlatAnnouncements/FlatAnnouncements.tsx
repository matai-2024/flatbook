import { Announcement } from '../../../types/Announcement'
import useFetchAnnouncements from '../../hooks/useFetchAnnouncements'

interface Props {
  flatId: string
}

export default function FlatAnnouncements({ flatId }: Props) {
  const {
    data: announcements,
    isLoading,
    isError,
    error,
  } = useFetchAnnouncements(flatId)

  if (isLoading) {
    return (
      <>
        <div
          className="skeleton m-8 mt-16 h-44 max-w-full bg-secondary"
          data-testid="announcement-skeleton"
        ></div>
        <div className="skeleton m-8 h-44 max-w-full bg-secondary"></div>
        <div className="skeleton m-8 h-44 max-w-full bg-secondary"></div>
        <div className="skeleton m-8 h-44 max-w-full bg-secondary"></div>
        <div className="skeleton m-8 h-44 max-w-full bg-secondary"></div>
      </>
    )
  }

  if (isError || !announcements) {
    return <p>Failed {String(error)}</p>
  }

  if (announcements) {
    return (
      <div className="flex flex-col justify-center">
        <ul>
          {announcements.reverse().map(
            (
              announcement: Announcement, // announcements are reversed to sort by latest as default
            ) => (
              <div
                key={announcement.id}
                className="card m-8 h-fit bg-secondary text-primary-content"
              >
                <div className="card-body">
                  <h2 className="card-title">{announcement.title}</h2>
                  <p>{announcement.content}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-circle">
                      {/* placeholder heart icon  */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ),
          )}
        </ul>
      </div>
    )
  }
}
