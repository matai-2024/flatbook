import { useParams } from 'react-router-dom'
import ChoresList from '../../components/ChoresList/ChoresList'
import CreateAnnouncement from '../../components/CreateAnnouncement/CreateAnnouncement'
import CreateChore from '../../components/CreateChore/CreateChore'
import FlatAnnouncements from '../../components/FlatAnnouncements/FlatAnnouncements'
import Sidebar from './Sidebar'
import ErrorPage from '../ErrorPage'

/* Todo: To be replaced by real widgets */
function WidgetExample() {
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
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
  const { flatId } = useParams()

  if (!flatId) {
    return <ErrorPage />
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-base-100 to-neutral py-36">
      <div className="flex h-full w-full flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full p-6 md:w-1/4 md:p-8">
          <Sidebar />
        </div>
        <div className="container flex flex-row">
          <div className="container flex flex-col">
            <div className="max-auto container mb-5 min-w-96 px-5">
              <h3 className="py-5 text-center text-2xl font-bold">
                Announcements
              </h3>
              <CreateAnnouncement flatId={flatId} />
              <FlatAnnouncements flatId={flatId} />
            </div>
            <div className="max-auto container mb-5 min-w-96 px-5">
              <h3 className="py-5 text-center text-2xl font-bold">Events</h3>
              <ChatsExample /> {/* Todo: replace with real Events component */}
            </div>
          </div>
          <div className="container flex flex-col">
            <div className="max-auto container mb-5">
              <h3 className="py-5 text-center text-2xl font-bold">Chores</h3>
              <div className="container flex flex-row space-x-1">
                <CreateChore flatId={flatId} />
                <ChoresList flatId={flatId} />
              </div>
            </div>
            <div className="max-auto container mb-5">
              <h3 className="py-5 text-center text-2xl font-bold">
                Shopping List
              </h3>
              <WidgetExample />
              {/* Todo: replace with real Shopping List component */}
            </div>
            <div className="max-auto container mb-5">
              <h3 className="py-5 text-center text-2xl font-bold">Bills</h3>
              <WidgetExample /> {/* Todo: replace with real Bills component */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
