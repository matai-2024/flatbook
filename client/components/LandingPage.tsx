import LoginButton from './LoginButton'
import RegisterButton from './RegisterButton'

function LandingPage() {
  return (
    <>
      <div className="flex gap-2">
        <LoginButton />
      </div>
      <div>
        <p>FLATBOOK</p>
      </div>
      <div>
        <p>
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut
          assumenda excepturi exercitationem quasi. In deleniti eaque aut
          repudiandae et a id nisi.
        </p>
      </div>
      <div className="flex gap-2">
        <RegisterButton />
      </div>
    </>
  )
}

export default LandingPage
