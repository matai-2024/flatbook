import Nav from './Nav/Nav.tsx'
import AppLayout from './AppLayout'
import Footer from './Footer.tsx'

import AnimatedBackground from './Background/AnimatedBackground.tsx'

function App() {
  return (
    <>
      <AnimatedBackground />
      <Nav />
      <AppLayout />
      <Footer />
    </>
  )
}

export default App
