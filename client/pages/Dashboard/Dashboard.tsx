export function Sidebar() {
  return (
    <>
      <h2 className="text-5xl font-bold">Sweethome</h2>
      <br />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
        soluta natus? Ratione vero corporis dolore a eligendi inventore
        accusantium reiciendis praesentium debitis aut incidunt minus labore
        iste, ad omnis aspernatur.
      </p>
      <br />
      <h2 className="text-3xl font-bold">Flatties</h2>
      {/* Todo: replace this list with dynamic list */}
      <ul>
        <li>Alicia Myers</li>
        <li>Elias Kaleta</li>
        <li>Logan Benett</li>
        <li>Ryan Zhao</li>
      </ul>
    </>
  )
}

export function Widget() {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export function Chats() {
  return (
    <>
      <div className="chat chat-start">
        <div className="avatar chat-image">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <div className="chat-bubble">
          It was said that you would, destroy the Sith, not join them.
        </div>
      </div>
      <div className="chat chat-start">
        <div className="avatar chat-image">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <div className="chat-bubble">
          It was you who would bring balance to the Force
        </div>
      </div>
      <div className="chat chat-start">
        <div className="avatar chat-image">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <div className="chat-bubble">Not leave it in Darkness</div>
      </div>
    </>
  )
}

function Dashboard() {
  return (
    <>
      <div className="container flex flex-row">
        <div className="container static my-0 max-w-96 bg-[#d9d9d9] px-5 py-5">
          <Sidebar />
        </div>
        <div className="container flex flex-row">
          <div className="container flex flex-col">
            <div className="max-auto container mb-5 min-w-96 px-5">
              <h3 className="py-5 text-center text-2xl font-bold">
                Announcements
              </h3>
              <Chats />
            </div>
            <div className="max-auto container mb-5 min-w-96 px-5">
              <h3 className="py-5 text-center text-2xl font-bold">Events</h3>
              <Chats />
            </div>
          </div>
          <div className="container flex flex-col">
            <div className="container mb-5 max-w-96">
              <h3 className="py-5 text-center text-2xl font-bold">Chores</h3>
              <Widget />
            </div>
            <div className="container mb-5 max-w-96">
              <h3 className="py-5 text-center text-2xl font-bold">
                Shopping List
              </h3>
              <Widget />
            </div>
            <div className="container mb-5 max-w-96">
              <h3 className="py-5 text-center text-2xl font-bold">Bills</h3>
              <Widget />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
