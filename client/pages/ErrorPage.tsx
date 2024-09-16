import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer'
import { GiLighthouse } from 'react-icons/gi'

export default function ErrorPage() {
  const navigate = useNavigate()
  return (
    <>
      <Nav />
      <div className="flex max-h-full  min-h-screen flex-col py-32">
        <div className="m-10 flex max-h-full min-h-screen flex-col  items-center py-6 ">
          <p className="flex items-center justify-center text-7xl font-bold">
            No ones home
          </p>
          <div className="w-50 h-50 relative m-6 flex items-center justify-center rounded-xl bg-primary text-white">
            <GiLighthouse className="h-96 w-96" />
          </div>

          <button
            className="btn btn-primary flex justify-center"
            onClick={() => navigate('/')}
          >
            Go back
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}
