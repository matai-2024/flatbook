// @vitest-environment jsdom

import { afterEach } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Route,
  RouterProvider,
  createMemoryRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import '@testing-library/jest-dom/vitest'

import { routes } from './routes.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

afterEach(cleanup)

export function renderComponent(component: JSX.Element) {
  const user = userEvent.setup()
  return { user, ...render(component) }
}

export function renderWithRouter(location = '/') {
  const router = createMemoryRouter(routes, {
    initialEntries: [location],
  })
  userEvent.setup()
  return render(<RouterProvider router={router} />)
}

export function renderWithQuery(component: JSX.Element) {
  const router = createMemoryRouter(
    createRoutesFromElements(<Route path="/" element={component} />),
    {
      initialEntries: ['/'],
    },
  )

  const user = userEvent.setup()
  const queryClient = new QueryClient()
  return {
    user,
    ...render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
    ),
  }
}

//everything that's been commented out can be un-commented out when
//testing up front-end routes is done (ticket#43)
