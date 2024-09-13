import { Outlet, useMatches } from 'react-router-dom'

import useDocumentTitle from '../hooks/useDocumentTitle'

function AppLayout() {
  const matches = useMatches()
  const pageTitle = matches[1].handle
  useDocumentTitle(pageTitle ? `${pageTitle}` : 'flatbook')

  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}

export default AppLayout
