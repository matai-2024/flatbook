import RegisterButton from '../components/RegisterButton'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex-none basis-3/5">
          <h1 className="landing-page">FLAT</h1>
          <h1 className="landing-page leading-none">BOOK</h1>
        </div>
        <div className="basis-1/2 flex-row">
          <p className="landing-page-description">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.
            <br></br>
            <br></br>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.
          </p>
          <p className="register-button">
            <RegisterButton />
          </p>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default LandingPage
