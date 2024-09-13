import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import ProtectedComponent from './components/ProtectedComponent'
import App from './components/App'
import LandingPage from './components/LandingPage'
import {
  NewUserForm1,
  NewUserForm2,
  NewUserForm3,
} from './components/NewUserForms'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<LandingPage />} />
    <Route
      path="new-user-sign-up-page-1"
      element={<ProtectedComponent component={NewUserForm1} />}
      handle={'Sign Up'}
    />
    <Route
      path="new-user-sign-up-page-2"
      element={<ProtectedComponent component={NewUserForm2} />}
      handle={'Sign Up'}
    />
    <Route
      path="new-user-sign-up-page-3"
      element={<ProtectedComponent component={NewUserForm3} />}
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
