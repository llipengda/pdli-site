import { Navigate, RouteObject } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/services/Services'
import ServicesIndex from './components/Main/Services/ServicesIndex'
import DetailService from './pages/services/DetailService'

const routes: RouteObject[] = [
  { path: '/home', element: <Home /> },
  {
    path: '/services/*',
    element: <Services />,
    children: [
      { path: '', element: <ServicesIndex /> },
      { path: 'minecraft', element: <DetailService name='minecraft' key='minecraft'/> },
      { path: 'code-server', element: <DetailService name='code-server' key='code-server'/> }
    ]
  },
  { path: '/', element: <Navigate to='/home' /> }
]

export default routes
