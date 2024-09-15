import { Announcement } from '../../../types/Announcement'
import useFetchAnnouncements from '../../hooks/useFetchAnnouncements'

interface Props {
  id: string
}

export default function FlatAnnouncements({ id }: Props) {
  const {
    data: announcements,
    isLoading,
    isError,
    error,
  } = useFetchAnnouncements(id)

  /*
  FOR USE WITH CHAT MESSAGES
    Messages from new users (compared to the last message) will appear on the opposite side of the container
    Chat bubbles always start on the left hand side and check the last message author
    to decide where to go  
  */
  //   const handleChatBubbleLocation = (
  //     curr: Announcement,
  //     i: number,
  //     arr: Announcement[],
  //   ) => {
  //     return 'card bg-neutral text-neutral-content w-full'
  //   }

  if (isLoading) {
    return <p>Announcements Loading...</p>
  }

  if (isError || !announcements) {
    return <p>Failed {String(error)}</p>
  }

  if (announcements) {
    console.log(announcements)

    return (
      <div className="flex flex-col justify-center">
        <h2 className="self-center text-3xl font-bold">Announcements</h2>
        <ul>
          {announcements.map((announcement: Announcement, i, arr) => (
            <div className="card m-8 h-fit bg-secondary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">{announcement.title}</h2>
                <p>{announcement.content}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-circle">
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
          ))}
        </ul>
      </div>
    )
  }
}
