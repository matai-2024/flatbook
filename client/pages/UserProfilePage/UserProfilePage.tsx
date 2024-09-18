import useUserProfile from '../../hooks/useUserProfile'
import UserSidebar from './UserSidebar'
import { User } from '../../../types/User'
import { useParams } from 'react-router-dom'
import ErrorPage from '../ErrorPage'

export default function UserProfilePage() {
  const id = useParams().id
  const { data: users, isError } = useUserProfile(id ? id : '')

  if (isError || !users) {
    return <ErrorPage />
  }

  if (users) {
    return (
      <>
        {users.map((user: User) => (
          <div
            key={user.auth0Id}
            className="max-h-fit max-w-full flex-1 space-x-8"
          >
            <div className="flex h-full space-x-8 p-8">
              <div className="px-4">
                <UserSidebar data={user} />
              </div>

              <div className="to-base w-4/5 rounded-xl bg-white p-8 shadow-2xl">
                <div className="mb-6 border-b-2 border-accent pb-4">
                  <h1 className="py-2 text-5xl font-bold text-primary">
                    {user.firstName} {user.lastName}
                  </h1>
                  <div className="text-2xl italic text-info">
                    {user.nickName}
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 text-3xl font-semibold text-primary">
                    About Me
                  </h2>
                  <p className="text-lg leading-relaxed text-secondary">
                    {user.about}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    )
  }
}
