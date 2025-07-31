import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import ProtectedComponent from './components/ProtectedComponent'
import App from './components/App'
import LandingPage from './pages/LandingPage/LandingPage'
import SignUpForm from './pages/SignUpForm'
import Dashboard from './pages/Dashboard/Dashboard'
import ErrorPage from './pages/ErrorPage'
import FlatSignUpForm from './pages/FlatSignUpForm'
import UserProfilePage from './pages/UserProfilePage/UserProfilePage'
import RedirectIfUserAlreadyExists from './wrappers/RedirectIfUserAlreadyExists'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<LandingPage />} />
    <Route
      path="signup"
      element={
        <RedirectIfUserAlreadyExists relocationPath="/dashboard">
          <ProtectedComponent component={SignUpForm} />
        </RedirectIfUserAlreadyExists>
      }
      handle={'Sign Up'}
    />
    <Route
      path="dashboard"
      element={<ProtectedComponent component={Dashboard} />}
      handle={'Flat Dashboard'}
    />
    <Route
      path="flat_setup"
      element={<ProtectedComponent component={FlatSignUpForm} />}
      handle={'Flat Set Up'}
    />
    <Route
      path="/profile/:id"
      element={<UserProfilePage />}
      handle={'Profile Page'}
    />
  </Route>,
)

export const router = createBrowserRouter(routes)
