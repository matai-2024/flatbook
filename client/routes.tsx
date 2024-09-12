import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import ProtectedComponent from './components/ProtectedComponent'
import App from './components/App'
import LandingPage from './components/LandingPage'
import NewUserSignUp from './components/NewUserSignUp'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<LandingPage />} />
    <Route
      path="new-user-sign-up"
      element={<ProtectedComponent component={NewUserSignUp} />}
      handle={'Sign Up'}
    />
  </Route>,
)

export const router = createBrowserRouter(routes)

//template for if you're adding a new route
{
  /* <Route
path=""
element={<ProtectedComponent component={} />}
handle={''}
/> */
}
