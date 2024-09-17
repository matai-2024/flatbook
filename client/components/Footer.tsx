function Footer() {
  return (
    <footer className="bottom-0 w-full border-t border-gray-200 bg-white py-12">
      <div className="container mx-auto flex flex-row space-y-8 px-12 lg:space-x-8 lg:space-y-0">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">Flatbook</h2>
          <p className="mt-4 text-base text-gray-600">
            Flatbook is a platform designed for individuals in New Zealand to
            find flats and flatmates. It aims to create a more homely,
            comfortable, and enjoyable flatting experience while also helping to
            manage shared responsibilities, chores, and fostering positive
            living environments.
          </p>
          <p className="mt-6 text-sm text-gray-500">
            ©2000-2024 Team Flatbook. All rights reserved.
          </p>
        </div>

        <div className="w-full px-16 lg:w-auto">
          <h3 className="text-lg font-semibold text-gray-800">Resources</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Help & Support</a>
            </li>
            <li>
              <a href="/">Safety Guide</a>
            </li>
            <li>
              <a href="/">Tenancy Advice</a>
            </li>
          </ul>
        </div>

        <div className="w-full px-10 lg:w-auto">
          <h3 className="text-lg font-semibold text-gray-800">Navigation</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>
              <a href="/">Profile</a>
            </li>
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/">Settings</a>
            </li>
          </ul>
        </div>

        <div className="w-full px-10 lg:w-auto">
          <h3 className="text-lg font-semibold text-gray-800">Account</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <a href="/">Signup</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
