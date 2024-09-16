import AvatarIcon from '../../components/UI/AvatarIcon'

{
  /* Todo: replace this list with dynamic list */
}
export default function UserSidebar() {
  return (
    <div className="rounded-xl bg-gradient-to-b from-neutral to-base-100 p-8 shadow-xl">
      {/* Avatar */}
      <div>
        <div className="relative mx-auto h-52 w-52">
          <AvatarIcon
            className="h-full w-full rounded-full object-cover ring-4 ring-accent"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
          <div className="absolute -bottom-2 left-[9rem] h-8 w-8 rounded-full border-2 border-base-100 bg-green-500 shadow-md" />
        </div>

        {/* Contact Information */}
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-primary">Contact</h2>
          <ul className="mt-2 text-lg text-info">
            <li>
              Email: <span className="font-medium">example@example.org</span>
            </li>
            <li>
              Phone: <span className="font-medium">123 456 789</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-primary">Social Media</h2>
          <ul className="mt-2 space-y-1 text-lg text-info">
            <li>
              <div className="rounded-lg from-accent to-primary transition duration-200 ease-in-out hover:bg-gradient-to-r hover:text-accent-content">
                Facebook: <span className="font-medium">User1</span>
              </div>
            </li>
            <li>
              <div className="rounded-lg from-accent to-primary transition duration-200 ease-in-out hover:bg-gradient-to-r hover:text-accent-content">
                LinkedIn: <span className="font-medium">LinkedIn.com</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Status */}
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-primary">Flat Status</h2>
          <p className="mt-2 text-lg italic text-info">Taken</p>
        </div>
      </div>
    </div>
  )
}
