import RegisterButton from '../../../components/RegisterButton'

export default function CarouselPage1() {
  return (
    <>
      <div className="flex flex-row bg-pink-500">
        <div className="flex-1 basis-1/2 bg-purple-500">
          <h1 className="px-10 text-center text-9xl">FLAT</h1>
          <h1 className="px-10 text-center text-9xl">BOOK</h1>
        </div>
        <div className="basis-1/2 flex-col bg-white px-32">
          <p>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.
          </p>
          <br></br>
          <p>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.
          </p>
          <br></br>
          <div className="text-center">
            <RegisterButton />
          </div>
        </div>
      </div>
    </>
  )
}
