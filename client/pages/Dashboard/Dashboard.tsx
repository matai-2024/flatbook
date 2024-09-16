import ChoresList from '../../components/ChoresList/ChoresList'
import AddChore from '../../components/CreateChore/CreateChore'
import Sidebar from './Sidebar'

/* Todo: To be replaced by real widgets */
function WidgetExample() {
  return (
    <>
      <div className="card w-96 w-full bg-base-100 shadow-xl">
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

/* Todo: To be replaced by real widgets */
function ChatsExample() {
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
      <div className="flex min-h-screen space-x-8 bg-gradient-to-b from-base-100 to-neutral">
        <div className="flex w-full flex-col px-8 py-36">
          {/* Main Container */}
          <div className="flex w-full flex-row space-x-8">
            {/* Sidebar */}
            <Sidebar />

            {/* Content Area */}
            <div className="flex w-full flex-row space-x-8">
              {/* Left Column (Announcements, Events) */}
              <div className="flex w-1/2 flex-col space-y-8">
                <div
                  className="rounded-xl bg-gradient-to-r from-white to-base-100 p-6
                 shadow-2xl"
                >
                  <h3
                    className=" mb-4 p-3
                   text-center text-2xl font-bold text-primary"
                  >
                    Announcements
                  </h3>
                  <ChatsExample />{' '}
                  {/* Todo: replace with real Announcements component */}
                </div>

                <div
                  className="rounded-xl bg-gradient-to-r from-white to-base-100 p-6
                 shadow-2xl"
                >
                  <h3
                    className="mb-4 p-3
                   text-center text-2xl font-bold text-primary"
                  >
                    Events
                  </h3>
                  <ChatsExample />{' '}
                  {/* Todo: replace with real Events component */}
                </div>
              </div>

              {/* Right Column (Chores, Shopping List, Bills) */}
              <div className="flex w-1/2 flex-col space-y-8">
                <div
                  className="rounded-xl bg-gradient-to-r from-white to-base-100 p-6
                 shadow-2xl"
                >
                  <h3
                    className="mb-4 p-3
                   text-center text-2xl font-bold text-primary"
                  >
                    Chores
                  </h3>
                  <div className="flex flex-row space-x-4">
                    <ChoresList id={'1'} /> {/* Todo: Why id? */}
                    <AddChore id={'1'} /> {/* Todo: Why id? */}
                  </div>
                </div>

                <div
                  className="rounded-xl bg-gradient-to-r from-white to-base-100 p-6
                 shadow-2xl"
                >
                  <h3
                    className="mb-4 p-3
                   text-center text-2xl font-bold text-primary"
                  >
                    Shopping List
                  </h3>
                  <WidgetExample />{' '}
                  {/* Todo: replace with real Shopping List component */}
                </div>

                <div
                  className="rounded-xl bg-gradient-to-r from-white to-base-100 p-6
                 shadow-2xl"
                >
                  <h3
                    className="mb-4 p-3
                   text-center text-2xl font-bold text-primary"
                  >
                    Bills
                  </h3>
                  <WidgetExample />{' '}
                  {/* Todo: replace with real Bills component */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
