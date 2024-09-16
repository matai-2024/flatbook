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

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<LandingPage />} />
    {/* TODO: Update with real dashboard component and path */}
    <Route path="/chores/:id" element={<DumbDashboard />} />
    <Route
      path="signup"
      element={<ProtectedComponent component={SignUpForm} />}
      handle={'Sign Up'}
    />
  </Route>,
)

export const router = createBrowserRouter(routes)
