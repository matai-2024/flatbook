import { Outlet, useMatches } from 'react-router-dom'

import useDocumentTitle from '../hooks/useDocumentTitle'
import Footer from './Footer'

function AppLayout() {
  const matches = useMatches()
  const pageTitle = matches[1].handle
  useDocumentTitle(pageTitle ? `${pageTitle}` : 'flatbook')

  return (
    <>
      <section className="bg-transparent!">
        <header></header>
        <main>
          <Outlet />
        </main>
        <Footer />
      </section>
    </>
  )
}

export default AppLayout
