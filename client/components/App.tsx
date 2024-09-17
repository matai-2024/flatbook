import Nav from './Nav/Nav.tsx'
import AppLayout from './AppLayout'
import Footer from './Footer.tsx'

import AnimatedBackground from './Background/AnimatedBackground.tsx'

function App() {
  return (
    <>
      <AnimatedBackground />
      <div className="relative z-20 bg-white opacity-50">
        <Nav />
        <AppLayout />
        <Footer />
      </div>
    </>
  )
}

export default App
