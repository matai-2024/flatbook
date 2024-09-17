import AvatarIcon from '../../components/UI/AvatarIcon'

export default function Sidebar() {
  return (
    <div className="sidebar rounded-xl bg-white p-12 shadow-xl">
      <div>
        <div className="">
          <h2 className="mb-4 text-center text-5xl font-bold text-primary">
            SweetHome
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
          Flatties
        </h2>
        <ul className="space-y-2 p-1 text-center text-lg text-secondary">
          <li className="rounded-lg from-primary to-primary transition duration-200 ease-in-out hover:bg-gradient-to-r hover:text-accent-content">
            <a href="/profile/1" className="hover:text-white">
              Alicia Myers
            </a>
          </li>
          <li className="rounded-lg from-primary to-primary transition duration-200 ease-in-out hover:bg-gradient-to-r hover:text-accent-content">
            <a href="/profile/2" className="hover:text-white">
              Elias Kaleta
            </a>
          </li>
          <li className="rounded-lg from-primary to-primary transition duration-200 ease-in-out hover:bg-gradient-to-r hover:text-accent-content">
            <a href="/profile/4" className="hover:text-white">
              Logan Benett
            </a>
          </li>
          <li className="rounded-lg from-primary to-primary transition duration-200 ease-in-out hover:bg-gradient-to-r hover:text-accent-content">
            <a href="/profile/3" className="hover:text-white">
              Ryan Zhao
            </a>
          </li>
        </ul>
        <hr className="my-8 h-px border-0 bg-info" />
      </div>
    </div>
  )
}
