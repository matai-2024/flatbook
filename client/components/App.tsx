import Nav from './Nav/Nav.tsx'
import AppLayout from './AppLayout'
import Footer from './Footer.tsx'

function App() {
  return (
    <>
      <div className="absolute inset-0 -z-10 flex">
        <div className="h-screen w-1/2 bg-gradient-to-l from-fuchsia-100 via-rose-100 to-orange-100"></div>
        <div className="h-screen w-1/2 bg-gradient-to-l from-rose-100 via-pink-100 to-fuchsia-100"></div>
        <div className="h-screen w-1/2 bg-gradient-to-r from-rose-100 via-pink-100 to-fuchsia-100"></div>
        <div className="h-screen w-1/2 bg-gradient-to-r from-fuchsia-100 via-rose-100 to-orange-100"></div>
      </div>

      <div className="relative z-10">
        <Nav />
        <AppLayout />
        <Footer />
      </div>
    </>
  )
}

export default App
