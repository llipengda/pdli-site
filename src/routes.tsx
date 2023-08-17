import { Navigate, RouteObject } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/services/Services'
import ServicesIndex from './components/Main/Services/ServicesIndex'
import Minecraft from './pages/services/Minecraft'
import CodeServer from './pages/services/CodeServer'

const routes: RouteObject[] = [
  { path: '/home', element: <Home /> },
  {
    path: '/services/*',
    element: <Services />,
    children: [
      { path: '', element: <ServicesIndex /> },
      { path: 'minecraft', element: <Minecraft /> },
      { path: 'code-server', element: <CodeServer /> }
    ]
  },
  { path: '/', element: <Navigate to='/home' /> }
]

export default routes
