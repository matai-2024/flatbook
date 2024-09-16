export default function Sidebar() {
  return (
    <div className="rounded-xl bg-gradient-to-b from-neutral to-base-100 p-10 shadow-xl">
      <div>
        <h2 className="mb-4 py-2 text-center text-5xl font-bold text-primary">
          Sweethome
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          soluta natus? Ratione vero corporis dolore a eligendi inventore
          accusantium reiciendis praesentium debitis aut incidunt minus labore
          iste, ad omnis aspernatur.
        </p>
        <hr className="my-6 h-px border-0 bg-info" />

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
      </div>
    </div>
  )
}
