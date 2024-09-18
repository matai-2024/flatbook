import ChoresList from '../../components/ChoresList/ChoresList'
import CreateAnnouncement from '../../components/CreateAnnouncement/CreateAnnouncement'
import CreateChore from '../../components/CreateChore/CreateChore'
import FlatAnnouncements from '../../components/FlatAnnouncements/FlatAnnouncements'
import Sidebar from './Sidebar'
import ErrorPage from '../ErrorPage'
import ShopList from '../../components/ShoppingList/ShopList'
import Bills from '../../components/Bills/Bills'
import { useGetFlatByAuthId } from '../../hooks/useFlats'

function Dashboard() {
  const { data: flatId, isLoading, isError } = useGetFlatByAuthId()

  if (isLoading) {
    return <>Loading</>
  }

  if (isError) {
    return <ErrorPage />
  }

  return (
    <div className="w-full bg-inherit p-8">
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
            </div>
            {/* Right Column */}
            <div className="flex w-full flex-col space-y-5 pr-7">
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
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
