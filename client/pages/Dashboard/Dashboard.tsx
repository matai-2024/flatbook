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
      </>
    )
  }
}

export default Dashboard
