import ChoresList from '../../components/ChoresList/ChoresList'
import CreateAnnouncement from '../../components/CreateAnnouncement/CreateAnnouncement'
import CreateChore from '../../components/CreateChore/CreateChore'
import FlatAnnouncements from '../../components/FlatAnnouncements/FlatAnnouncements'
import Sidebar from './Sidebar'
import ErrorPage from '../ErrorPage'
import ShopList from '../../components/ShoppingList/ShopList'
import Bills from '../../components/Bills/Bills'
import { useGetFlatByAuthId } from '../../hooks/useFlats'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/UI/Button'

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
  const { data: flatId, isLoading, isError } = useGetFlatByAuthId()

  const navigate = useNavigate()

  if (isLoading) {
    return <>Loading</>
  }

  if (isError) {
    return <ErrorPage />
  }

  if ((flatId !== undefined && flatId === null) || flatId === 0) {
    // The user doesn't have a flat yet
    // TODO: to be styled
    return (
      <div className="container">
        <p>Looks like you have not had a flat.</p>
        <Button
          onClick={() => {
            navigate(`/flat_setup`, { replace: true })
          }}
        >
          Next
        </Button>
      </div>
    )
  } else {
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
                <CreateAnnouncement flatId={flatId} />
                <FlatAnnouncements flatId={flatId} />
              </div>
              <div className="max-auto container mb-5 min-w-96 px-5">
                <h3 className="py-5 text-center text-2xl font-bold">Events</h3>
                <ChatsExample />{' '}
                {/* Todo: replace with real Events component */}
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
                <ShopList flatId={flatId} />
              </div>
              <div className="max-auto container mb-5">
                <h3 className="py-5 text-center text-2xl font-bold">Bills</h3>
                <Bills /> {/* Todo: replace with real Bills component */}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Dashboard
