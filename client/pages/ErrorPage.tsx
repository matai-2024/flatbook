import { GiLighthouse } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex max-h-full  min-h-screen flex-col">
        <div className="flex max-h-full min-h-screen flex-col  items-center py-14">
          <p className="flex items-center justify-center text-6xl font-bold">
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
    </>
  )
}
