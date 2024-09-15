import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
// import ProtectedComponent from './components/ProtectedComponent'
import App from './components/App'
import LandingPage from './pages/LandingPage'
import DumbDashboard from './components/DumbDashboard'
import ErrorPage from './pages/ErrorPage'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<LandingPage />} />
    {/* TODO: Update with real dashboard component and path */}
    <Route path="/chores/:id" element={<DumbDashboard />} />
  </Route>,
)

export const router = createBrowserRouter(routes)

//template for if you're adding a protected-route
//<Route
//path="my-path"
//element={<ProtectedComponent component={componentGoesHere} />}
//handle={'page name goes here'}
///>
