import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import ProtectedComponent from './components/ProtectedComponent'
import App from './components/App'
import LandingPage from './pages/LandingPage'
import SignUpForm from './pages/SignUpForm'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<LandingPage />} />
    <Route
      path="sign-up"
      element={<ProtectedComponent component={SignUpForm} />}
      handle={'Sign Up'}
    />
  </Route>,
)

export const router = createBrowserRouter(routes)
