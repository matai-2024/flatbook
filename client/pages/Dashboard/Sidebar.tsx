export default function Sidebar() {
  return (
    <div className="w-1/4 rounded-xl bg-gradient-to-b from-neutral to-base-100 p-6 shadow-lg">
      {/* Title */}
      <h2 className="mb-6 p-6 text-center text-4xl font-bold text-primary">
        Sweethome
      </h2>

      {/* Introduction */}
      <p className="mb-6 text-lg leading-relaxed text-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
        soluta natus? Ratione vero corporis dolore eligendi accusantium
        reiciendis.
      </p>

      <div className="my-8 border-t border-accent"></div>
      {/* Section: Flatties */}
      <h3 className="mb-4 text-2xl font-semibold text-primary">Flatties</h3>

      {/* List of Flatties */}
      <ul className="space-y-2 text-lg text-secondary">
        <li className="transition duration-300 hover:text-primary">
          Alicia Myers
        </li>
        <li className="transition duration-300 hover:text-primary">
          Elias Kaleta
        </li>
        <li className="transition duration-300 hover:text-primary">
          Logan Benett
        </li>
        <li className="transition duration-300 hover:text-primary">
          Ryan Zhao
        </li>
      </ul>

      {/* Divider */}
      <div className="my-8 border-t border-accent"></div>

      {/* Additional Information */}
      <div className="text-lg text-info">
        <h3 className="mb-4 text-xl font-semibold text-primary">More Info</h3>
        <p className="leading-relaxed">
          For any issues, contact your flat manager or reach out through the
          flats social media channels.
        </p>
      </div>
    </div>
  )
}
