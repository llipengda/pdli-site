import { Navigate, RouteObject } from 'react-router-dom'
import { lazy } from 'react'
import DetailService from './pages/services/DetailService'
const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/services/Services'))
const ServicesIndex = lazy(
  () => import('./components/Main/Services/ServicesIndex')
)

const routes: RouteObject[] = [
  { path: '/home', element: <Home /> },
  {
    path: '/services/*',
    element: <Services />,
    children: [
      { path: '', element: <ServicesIndex /> },
      {
        path: 'minecraft',
        element: <DetailService name='minecraft' key='minecraft' />
      },
      {
        path: 'code-server',
        element: <DetailService name='code-server' key='code-server' />
      }
    ]
  },
  { path: '/', element: <Navigate to='/home' /> }
]

export default routes
