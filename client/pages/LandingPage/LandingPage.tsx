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
        <div className="register flex basis-1/2 flex-col justify-center bg-inherit px-32 text-center text-3xl font-medium">
          <p>
            Transforming your flat, one dashboard at a time. Home, sweet home.
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
