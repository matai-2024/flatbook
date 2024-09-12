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

// import { routes } from './index'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

afterEach(cleanup)

export function renderComponent(component: JSX.Element) {
  const user = userEvent.setup()
  return { user, ...render(component) }
}

// export function renderWithRouter(location = '/') {
//   const router = createMemoryRouter(routes, {
//     initialEntries: [location],
//   })
//   userEvent.setup()
//   return render(<RouterProvider router={router} />)
// }

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

//referenced rcmndr test utils
//routes set-up will look like: https://github.com/matai-2024/rcmndr/blob/main/client/index.tsx
//protected-component set-up: https://github.com/matai-2024/rcmndr/blob/main/client/components/UI/ProtectedComponent.tsx