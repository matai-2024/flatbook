import { useParams } from 'react-router-dom'
import ChoresList from '../../components/ChoresList/ChoresList'
import CreateAnnouncement from '../../components/CreateAnnouncement/CreateAnnouncement'
import CreateChore from '../../components/CreateChore/CreateChore'
import FlatAnnouncements from '../../components/FlatAnnouncements/FlatAnnouncements'
import Sidebar from './Sidebar'
import ErrorPage from '../ErrorPage'
import ShopList from '../../components/ShoppingList/ShopList'
import Bills from '../../components/Bills/Bills'

/* Todo: To be replaced by real widgets */
// function WidgetExample() {
//   return (
//     <>
//       <div className="card w-full bg-base-100 shadow-xl">
//         <figure>
//           <img
//             src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//             alt="Shoes"
//           />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">Shoes!</h2>
//           <p>If a dog chews shoes whose shoes does he choose?</p>
//           <div className="card-actions justify-end">
//             <button className="btn btn-primary">Buy Now</button>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

/* Todo: To be replaced by real widgets */

function Dashboard() {
  const { flatId } = useParams()

  if (!flatId) {
    return <ErrorPage />
  }

  return (
    <div className="w-full bg-base-100 p-8">
      <div className="flex w-full flex-col md:flex-row">
        <div className="w-full flex-col space-y-8 md:w-1/3 md:px-8">
          <Sidebar />
        </div>

        <div className="w-full flex-col space-y-8">
          <div className="flex w-full flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0">
            {/* Left Column */}
            <div className="flex w-full flex-col space-y-3">
              {/* Announcements */}
              <div className="rounded-xl bg-white">
                <h3 className="m-2 text-center text-2xl font-bold text-primary">
                  <br></br>
                  Announcements
                </h3>
                <CreateAnnouncement flatId={flatId} />
                <FlatAnnouncements flatId={flatId} />
                <br></br>
              </div>
              <div />
              {/* Chores */}
              <div className="flex w-full flex-col space-y-8">
                <div className="flex-grow rounded-xl bg-white p-6">
                  <h3 className="m-2 text-center text-2xl font-bold text-primary">
                    Chores
                  </h3>
                  <div className="flex flex-row space-x-4">
                    <ChoresList flatId={flatId} />
                    <CreateChore flatId={flatId} />
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column */}
            <div className="flex w-full flex-col space-y-5">
              {/* Bills */}
              <div className="flex w-full flex-col space-y-8">
                <div className="flex-grow rounded-xl bg-white p-6">
                  <h3 className="m-2 text-center text-2xl font-bold text-primary">
                    Bills
                  </h3>
                  <div className="flex flex-row space-x-4">
                    <div className="flex-grow">
                      <Bills />
                    </div>
                  </div>
                </div>
              </div>
              {/* Shopping List */}
              <div className="rounded-xl bg-white">
                <h3 className="m-2 text-center text-2xl font-bold text-primary">
                  <br></br>
                  Shopping List
                </h3>
                <div className="flex flex-row space-x-4">
                  <div className="flex-grow">
                    <ShopList flatId={flatId} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
