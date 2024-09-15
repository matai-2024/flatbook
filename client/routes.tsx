import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import ProtectedComponent from './components/ProtectedComponent'
import App from './components/App'
import LandingPage from './pages/LandingPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Dashboard from './pages/Dashboard/Dashboard'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<LandingPage />} />
    <Route
      path="dashboard"
      // element={<ProtectedComponent component={Dashboard} />} // TODO: add auth0
      element={<Dashboard />}
      handle={'Flat Dashboard'}
    />
  </Route>,
)

export const router = createBrowserRouter(routes)

/**
  // template for if you're adding a protected-route
  <Route
  path="my-path"
  element={<ProtectedComponent component={componentGoesHere} />}
  handle={'page name goes here'}
  />
 */
