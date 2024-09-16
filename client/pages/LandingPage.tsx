import RegisterButton from '../components/RegisterButton'
import Footer from '../components/Footer'
import * as motion from 'framer-motion/client'

function LandingPage() {
  const flatBookContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.8,
        delayChildren: 0.25,
        staggerChildren: 0.75,
      },
    },
  }

  const flatBookWords = {
    hidden: {
      opacity: 0,
      scale: 3,
      filter: 'blur(30px)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { type: 'spring', bounce: 0, duration: 0.8 },
    },
  }
  return (
    <div>
      <div className="flex flex-row pb-96 pt-60">
        <div className="ml-20 flex-none basis-3/5">
          <motion.div
            variants={flatBookContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={flatBookWords}
              className="landing-page mt-20 bg-gradient-to-br from-primary via-rose-700 to-primary bg-clip-text leading-none text-transparent"
            >
              FLAT
            </motion.h1>
            <motion.h1
              variants={flatBookWords}
              className="landing-page ml-20 bg-gradient-to-tr from-primary via-rose-700 to-primary bg-clip-text leading-none text-transparent"
            >
              BOOK
            </motion.h1>
          </motion.div>
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
    </div>
  )
}

export default LandingPage
