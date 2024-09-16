export default function Sidebar() {
  return (
    <div className="rounded-xl bg-gradient-to-b from-neutral to-base-100 p-8 shadow-xl">
      <div>
        <h2 className="mb-4 text-center text-5xl font-bold text-primary">
          Sweethome
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          soluta natus? Ratione vero corporis dolore a eligendi inventore
          accusantium reiciendis praesentium debitis aut incidunt minus labore
          iste, ad omnis aspernatur.
        </p>

        <h2 className="mb-4 text-center text-3xl font-semibold text-primary">
          Flatties
        </h2>
        <ul className="space-y-2 text-lg text-info">
          <li className="font-medium">Alicia Myers</li>
          <li className="font-medium">Elias Kaleta</li>
          <li className="font-medium">Logan Benett</li>
          <li className="font-medium">Ryan Zhao</li>
        </ul>
      </div>
    </div>
  )
}
