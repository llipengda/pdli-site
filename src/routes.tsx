import { Navigate, RouteObject } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'

const routes: RouteObject[] = [
  { path: '/home', element: <Home /> },
  { path: '/services', element: <Services /> },
  { path: '/', element: <Navigate to='/home' /> }
]

export default routes
