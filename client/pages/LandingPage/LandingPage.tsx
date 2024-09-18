// import Carousel from './Carousel'

// function LandingPage() {
//   return <Carousel />
// }

import * as motion from 'framer-motion/client'
import RegisterButton from '../../components/RegisterButton'

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
    <>
      <div className="m-[-50px] flex h-screen flex-row bg-inherit">
        <div className="flex flex-1 basis-1/2 items-center justify-center bg-inherit">
          <motion.div
            variants={flatBookContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={flatBookWords}
              className="landing landing-page mt-20 bg-gradient-to-br from-primary via-rose-700 to-rose-900 bg-clip-text px-10 pb-14 text-center leading-none text-transparent"
            >
              Flat
            </motion.h1>
            <motion.h1
              variants={flatBookWords}
              className="landing landing-page ml-20 bg-gradient-to-tr from-primary via-rose-700 to-primary bg-clip-text px-10 text-center leading-none text-transparent"
            >
              Book
            </motion.h1>
          </motion.div>
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
