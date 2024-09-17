function Footer() {
  return (
    <footer className="bg-white">
      <div className="flex flex-row justify-between">
        <div className="basis-1/2 p-20">
          <p className="text-2xl font-bold">Flatbook</p>
          <br></br>
          <p className="text-base">
            Flatbook is a platform designed for individuals in New Zealand to
            find flats and flatmates. It aims to create a more homely,
            comfortable, and enjoyable flatting experience while also helping to
            manage shared responsibilities, chores, and fostering positive
            living environments.
          </p>
          <br></br>
          <p className="text-sm">©2000-2024 Team Flatbook</p>
        </div>

        <div className="basis-1/7 py-20">
          <ul>
            <p className="text-lg font-bold">Resources</p>
            <br></br>
            <li>About</li>
            <li>Help & Support</li>
            <li>Safety Guide</li>
            <li>Tenancy Advice</li>
          </ul>
        </div>

        <div className="basis-1/5 py-20">
          <div className="text-base">
            <ul>
              <p className="text-lg font-bold">Navigation</p>
              <br></br>
              <li>Login</li>
              <li>Signup</li>
              <li>Profile Page</li>
              <li>Dashboard</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
