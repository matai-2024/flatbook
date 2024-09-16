import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import ProtectedComponent from './components/ProtectedComponent'
import App from './components/App'
import LandingPage from './pages/LandingPage'
import DumbDashboard from './components/DumbDashboard'
import SignUpForm from './pages/SignUpForm'
import Dashboard from './pages/Dashboard/Dashboard'
import ErrorPage from './pages/ErrorPage'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<LandingPage />} />
    {/* TODO: Update with real dashboard component and path */}
    <Route path="/chores/:id" element={<DumbDashboard />} />
    <Route
      path="signup"
      element={<ProtectedComponent component={SignUpForm} />}
      handle={'Sign Up'}
    />
    <Route
      path="dashboard/:flatId"
      element={<ProtectedComponent component={Dashboard} />}
      handle={'Flat Dashboard'}
    />
  </Route>,
)

export const router = createBrowserRouter(routes)
