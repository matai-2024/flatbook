import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import ProtectedComponent from './components/ProtectedComponent'
import App from './components/App'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard/Dashboard'
import DumbDashboard from './components/DumbDashboard'
import SignUpForm from './pages/SignUpForm'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<LandingPage />} />
    <Route
      path="dashboard"
      // element={<ProtectedComponent component={Dashboard} />} // TODO: add auth0
      element={<Dashboard />}
      handle={'Flat Dashboard'}
    />
    {/* TODO: Update with real dashboard component and path */}
    <Route path="/chores/:id" element={<DumbDashboard />} />
    <Route
      path="signup"
      element={<ProtectedComponent component={SignUpForm} />}
      handle={'Sign Up'}
    />
    {/* TODO-change component to UserProfile */}
    <Route
      path="users/:id"
      element={<ProtectedComponent component={LandingPage} />}
      handle={'Users'}
    />
  </Route>,
)

export const router = createBrowserRouter(routes)
