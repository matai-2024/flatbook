// import Carousel from './Carousel'

// function LandingPage() {
//   return <Carousel />
// }

import RegisterButton from '../../components/RegisterButton'

function LandingPage() {
  return (
    <>
      <div className="m-[-50px] flex h-screen flex-row bg-inherit">
        <div className="flex flex-1 basis-1/2 items-center justify-center bg-inherit">
          <div>
            <h1 className="landing px-10 text-center">Flat</h1>
            <h1 className="landing px-10 text-center">Book</h1>
          </div>
        </div>
        <div className=" flex basis-1/2 flex-col justify-center bg-inherit px-32">
          <p>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.
          </p>
          <br />
          <p>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.
          </p>
          <br />
          <div className="text-center">
            <RegisterButton />
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
