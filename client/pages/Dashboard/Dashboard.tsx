import ChoresList from '../../components/ChoresList/ChoresList'
import CreateAnnouncement from '../../components/CreateAnnouncement/CreateAnnouncement'
import AddChore from '../../components/CreateChore/CreateChore'
import FlatAnnouncements from '../../components/FlatAnnouncements/FlatAnnouncements'
import Sidebar from './Sidebar'

/* Todo: To be replaced by real widgets */
function WidgetExample() {
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
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
      <div className="flex min-h-screen w-full bg-gradient-to-b from-base-100 to-neutral py-32">
        {/* Sidebar */}
        <div className="w-1/4 px-10 py-8">
          <Sidebar />
        </div>

        {/* Content Area */}
        <div className="flex w-3/4 px-8 py-8">
          {/* Left Column (Announcements, Events) */}
          <div className="flex w-1/2 flex-col space-y-8 px-6">
            <div className="flex-grow rounded-xl bg-gradient-to-r from-white to-base-100 p-6 shadow-2xl">
              <h3 className="mb-4 text-center text-2xl font-bold text-primary">
                Announcements
              </h3>
              <CreateAnnouncement flatId="1" />
              <FlatAnnouncements flatId="1" />
            </div>

            <div className="flex-grow rounded-xl bg-gradient-to-r from-white to-base-100 p-6 shadow-2xl">
              <h3 className="mb-4 text-center text-2xl font-bold text-primary">
                Events
              </h3>
              <ChatsExample /> {/* Todo: replace with real Events component */}
            </div>
          </div>

          {/* Right Column (Chores, Shopping List, Bills) */}
          <div className="flex w-1/2 flex-col justify-between space-y-8">
            <div className="flex-grow rounded-xl bg-gradient-to-r from-white to-base-100 p-6 shadow-2xl">
              <h3 className="mb-4 text-center text-2xl font-bold text-primary">
                Chores
              </h3>
              <div className="flex flex-row space-x-4">
                <ChoresList flatId={'1'} />
                <AddChore flatId={'1'} />
              </div>
            </div>

            <div className="flex-grow rounded-xl bg-gradient-to-r from-white to-base-100 p-6 shadow-2xl">
              <h3 className="mb-4 text-center text-2xl font-bold text-primary">
                Shopping List
              </h3>
              <WidgetExample />{' '}
              {/* Todo: replace with real Shopping List component */}
            </div>

            <div className="flex-grow rounded-xl bg-gradient-to-r from-white to-base-100 p-6 shadow-2xl">
              <h3 className="mb-4 text-center text-2xl font-bold text-primary">
                Bills
              </h3>
              <WidgetExample /> {/* Todo: replace with real Bills component */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
