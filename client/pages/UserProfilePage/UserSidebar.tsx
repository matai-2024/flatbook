import AvatarIcon from '../../components/UI/AvatarIcon'
import { User } from '../../../types/User'

interface Props {
  data: User
}

export default function UserSidebar(props: Props) {
  const profile = props.data

  return (
    <div className="rounded-xl bg-gradient-to-b from-neutral to-base-100 p-8 shadow-xl">
      <div>
        <div className="relative mx-auto h-52 w-52">
          <AvatarIcon
            className="h-full w-full rounded-full object-cover ring-4 ring-accent"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
          <div className="absolute -bottom-2 left-[9rem] h-8 w-8 rounded-full border-2 border-base-100 bg-green-500 shadow-md" />
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-primary">Contact</h2>
          <ul className="mt-2 text-lg text-info">
            <li>
              Email: <span className="font-medium">{profile.email}</span>
            </li>
            <li>
              Phone: <span className="font-medium">{profile.mobile}</span>
            </li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-primary">Social Media</h2>
          <ul className="mt-2 space-y-1 text-lg text-info">
            <li>
              <div className="rounded-lg from-accent to-primary transition duration-200 ease-in-out hover:bg-gradient-to-r hover:text-accent-content">
                <a
                  href={`https://www.instagram.com/${profile.socialMedia}`}
                  className="font-medium"
                >
                  Instagram
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-primary">Flat Status</h2>
          <p className="mt-2 text-lg italic text-info">Taken</p>
        </div>
      </div>
    </div>
  )
}
